import {useState} from "react";

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleClickSave = () => {
        // TODO: Implement change password save and close functionality
        alert('Password changed successfully!');
    }

    const handleClickClose  = () => {
        // TODO: Implement change password close without saving functionality
        alert('Password changing cancelled!');
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
            <button onClick={handleClickClose}>Close without saving</button>
            <button onClick={handleClickClear}>Clear</button>
        </>
    );
};

export default ChangePassword;