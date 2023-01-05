import { useEffect, useState } from "react";
import { useMounted } from "./useMounted";

export function useRole(firebaseUser) {
  const [loading, setLoading] = useState(!!firebaseUser);
  const [role, setRole] = useState("");

  const isMounted = useMounted();

  useEffect(() => void setLoading(!!firebaseUser), [firebaseUser]);

  useEffect(() => {
    if (loading) {
      firebaseUser
        .getIdTokenResult()
        .then((token) => isMounted() && setRole(token.claims.role || ""))
        .finally(() => isMounted() && setLoading(false));
    }
  }, [firebaseUser, loading, isMounted]);

  return { loading: loading, role };
}
