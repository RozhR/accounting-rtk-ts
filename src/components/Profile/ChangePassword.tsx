import {useState} from "react";

interface Props {
    close: () => void;
}

const ChangePassword = ({close}: Props) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleClickSave = () => {
        if (newPassword === confirmPassword) {
            // TODO: Implement change password save and close functionality
            alert('Password changed successfully!');
            close();
        } else {
            alert('New password and confirm password do not match!')
        }
    }

    const handleClickClear = () => {
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
    }

    return (
        <>
            <label>Old Password:
                <input
                    type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                />
            </label>
            <label>New Password:
                <input type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                />
            </label>
            <label>Confirm Password:
                <input type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}/>
            </label>
            <button onClick={handleClickSave}>Save and close</button>
            <button onClick={close}>Close without saving</button>
            <button onClick={handleClickClear}>Clear</button>
        </>
    );
};

export default ChangePassword;