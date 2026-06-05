import { useEffect, useState } from "react";
import { fetchInternships } from "../apis/internshipApi";

const useInternships = () => {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadInternships();
  }, []);

 const loadInternships = async () => {
  try {
    const data = await fetchInternships();

    const internshipsArray = Object.values(
      data.internships_meta
    );

    setInternships(internshipsArray);
  } catch (error) {
    setError("Failed to fetch internships");
  } finally {
    setLoading(false);
  }
};

  return {
    internships,
    loading,
    error,
  };
};

export default useInternships;