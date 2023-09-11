import React, { useEffect, useState } from "react";

const ClientComponent = ({ children }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return <>{children}</>;
};

export default ClientComponent;