import React, { useState } from "react";
import { BsTsunami } from "react-icons/bs";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const [profile, setProfile] = useState({
    name: "Sri Vidhya",
    email: "vidhiyasri106@gmail.com",
    phone: "9363151549",
    address: "3/642, Dharmapuri, Tamil Nadu",
    dob: "2005-10-16",
    gender: "female",
    // image:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" ,
    image:"https://th.bing.com/th/id/OIP.Gv65SvceNlRKxI0uCShlewHaE7?w=2000&h=1331&rs=1&pid=ImgDetMain",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile({ ...profile, image: URL.createObjectURL(file) });
    }
  };

  const toggleEdit = () => {
    if (isEditing) {
      alert("✅ Profile updated successfully!");
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-10 px-4 font-sans">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          {["profile", "orders"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 mx-2 text-lg font-semibold rounded-full transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab === "profile" ? "👤 Profile Info" : "📦 Order History"}
            </button>
          ))}
        </div>

        {activeTab === "profile" ? (
          <div className="grid md:grid-cols-3 gap-10 items-start animate-fade-in">
            {/* Profile Picture */}
            <div className="relative flex flex-col items-center text-center">
              <div className="border-4 border-pink-400 rounded-full p-1 shadow-lg hover:scale-105 transition">
                <img
                  src={profile.image}
                  alt="Profile"
                  className="w-32 h-32 object-cover rounded-full"
                />
              </div>
              {isEditing && (
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="mt-2 text-sm"
                />
              )}
              <button
                onClick={toggleEdit}
                className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full shadow hover:scale-105 transition"
              >
                {isEditing ? "💾 Save" : "✏️ Edit"}
              </button>
            </div>

            {/* Profile Details */}
            <div className="md:col-span-2 space-y-5">
              <h2 className="text-3xl font-bold text-gray-800">
                👋 Welcome, <span className="text-pink-600">{profile.name.split(" ")[0]}!</span>
              </h2>

              <div className="grid grid-cols-2 gap-6">
                <InputField
                  label="Full Name"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  editable={isEditing}
                />
                <InputField
                  label="Email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  editable={isEditing}
                />
                <InputField
                  label="Phone Number"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  editable={isEditing}
                />
                <InputField
                  label="Date of Birth"
                  name="dob"
                  type="date"
                  value={profile.dob}
                  onChange={handleChange}
                  editable={isEditing}
                />
                <InputField
                  label="Address"
                  name="address"
                  value={profile.address}
                  onChange={handleChange}
                  editable={isEditing}
                />
                <div>
                  <label className="block mb-1 text-gray-700 font-semibold">Gender</label>
                  {isEditing ? (
                    <div className="flex gap-4 mt-1">
                      {["female", "male", "other"].map((g) => (
                        <label key={g} className="flex items-center gap-1">
                          <input
                            type="radio"
                            name="gender"
                            value={g}
                            checked={profile.gender === g}
                            onChange={handleChange}
                          />
                          {g.charAt(0).toUpperCase() + g.slice(1)}
                        </label>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600 capitalize bg-gray-100 p-2 rounded">{profile.gender}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Order History Placeholder
          <div className="text-center text-gray-600 text-lg mt-6 animate-fade-in">
            🕒 You haven’t placed any orders yet.
          </div>
        )}
      </div>
    </div>
  );
}

function InputField({ label, name, value, onChange, editable, type = "text" }) {
  return (
    <div className="transition-all">
      <label className="block mb-1 text-gray-700 font-semibold">{label}</label>
      {editable ? (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm bg-white"
        />
      ) : (
        <p className="px-3 py-2 bg-gray-100 rounded text-gray-700">{value}</p>
      )}
    </div>
  );
}
