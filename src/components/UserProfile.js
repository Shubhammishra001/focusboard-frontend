import React, { useEffect, useState } from "react";
import API from "../utils/api";

const UserProfile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // fetch /users/me if available
    const fetchProfile = async () => {
      try {
        const res = await API.get("/users/me"); // backend endpoint must exist
        setProfile(res.data);
      } catch (err) {
        console.warn("Could not fetch profile", err);
      }
    };
    fetchProfile();
  }, []);

  if (!profile) {
    return <div>Loading profile...</div>;
  }

  return (
    <div>
      <h3>{profile.username}'s Profile</h3>
      <p>
        <strong>Login ID:</strong> {profile.loginId}
      </p>
      <p>
        <strong>Email:</strong> {profile.email}
      </p>
      <p>
        <strong>Role:</strong> {profile.role}
      </p>
      <p>
        <strong>Tenant:</strong> {profile.tenantId}
      </p>
      <p>
        <strong>Active:</strong> {profile.active ? "Yes" : "No"}
      </p>
    </div>
  );
};

export default UserProfile;
