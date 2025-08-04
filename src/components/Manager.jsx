import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaCopy, FaTrash } from 'react-icons/fa';

const Manager = () => {
    const [form, setForm] = useState({ site: "", UserName: "", Password: "" });
    const [savedPasswords, setSavedPasswords] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [visiblePasswords, setVisiblePasswords] = useState({});
    
    // Toggle visibility for individual password
    const toggleVisibility = (index) => {
        setVisiblePasswords(prev => ({ ...prev, [index]: !prev[index] }));
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const savePassword = () => {
        if (!form.site || !form.UserName || !form.Password) return;
        setSavedPasswords([...savedPasswords, form]);
        setForm({ site: "", UserName: "", Password: "" });
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
    };

    const handleCopy = (password) => {
        navigator.clipboard.writeText(password);
        alert("Password copied to clipboard!");
    };

    const handleDelete = (index) => {
        const updated = savedPasswords.filter((_, i) => i !== index);
        setSavedPasswords(updated);
    };

    return (
        <div className="container mx-auto max-w-2xl min-h-screen flex flex-col justify-center items-center relative px-4 py-10">
            {/* Background */}
            <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

            <h1 className="text-4xl font-extrabold text-white mb-1 drop-shadow-md text-center">PassOP</h1>
            <p className="text-lg text-purple-200 mb-6 drop-shadow-sm text-center">Your Own Password Manager</p>

            {showPopup && (
                <div className="bg-green-600 text-white px-6 py-3 rounded-full shadow-lg mb-4 transition-all duration-500">
                    ✅ Password saved successfully!
                </div>
            )}

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 w-full shadow-xl border border-white/10">
                <div className="flex flex-col space-y-4">
                    <input
                        value={form.site}
                        onChange={handleChange}
                        className="rounded-full px-4 py-2 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        type="text"
                        placeholder="Website / App Name"
                        name="site"
                    />
                    <input
                        value={form.UserName}
                        onChange={handleChange}
                        className="rounded-full px-4 py-2 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        type="text"
                        placeholder="Username / Email"
                        name="UserName"
                    />
                    <input
                        value={form.Password}
                        onChange={handleChange}
                        className="rounded-full px-4 py-2 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        type="password"
                        placeholder="Password"
                        name="Password"
                    />
                    <button
                        onClick={savePassword}
                        className="bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-full font-semibold"
                    >
                        Save Password
                    </button>
                </div>
            </div>

            {/* Saved Passwords List */}
            {savedPasswords.length > 0 && (
                <div className="mt-8 w-full bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/10">
                    <h2 className="text-xl text-white font-semibold mb-4">Saved Passwords</h2>
                    {savedPasswords.map((item, index) => (
                        <div key={index} className="flex items-center justify-between mb-3 p-3 bg-white/10 rounded-lg text-white border border-white/10">
                            <div>
                                <div className="font-bold">{item.site}</div>
                                <div className="text-sm">{item.UserName}</div>
                                <div className="flex items-center space-x-2 mt-1">
                                    <span>
                                        {visiblePasswords[index] ? item.Password : '*'.repeat(item.Password.length)}
                                    </span>
                                    <button onClick={() => toggleVisibility(index)}>
                                        {visiblePasswords[index] ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                    <button onClick={() => handleCopy(item.Password)}>
                                        <FaCopy />
                                    </button>
                                    <button onClick={() => handleDelete(index)}>
                                        <FaTrash className="text-red-400 hover:text-red-600" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Manager;
