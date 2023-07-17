// import { useRouter } from "next/router";

// import { useEffect, useState } from "react";

// const withAuth = (WrappedComponent) => {
//   const Wrapper = (props) => {
//     const [userObject, setUserObject] = useState({});

//     const router = useRouter();

//     // Perform authentication or authorization check

//     const isAuthenticated = true;
//     useEffect(() => {
//       if (!userObject) {
//         router.push("/sign-up"); // Redirect to login page if not authenticated
//       }
//     }, [userObject, router]);

//     useEffect(() => {
//       setUserObject(JSON.parse(localStorage.getItem("my-details") as string));
//     }, []);

//     // Render the wrapped component if authenticated

//     return userObject ? <WrappedComponent {...props} /> : null;
//   };

//   return Wrapper;
// };

// export default withAuth;

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Props {
  prop1: string;
  prop2: number;
  // Add more prop definitions here
}

const withAuth = (WrappedComponent: React.ComponentType<Props>) => {
  const Wrapper = (props: Props) => {
    const [userObject, setUserObject] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const router = useRouter();

    useEffect(() => {
      const checkAuth = () => {
        const user = JSON.parse(localStorage.getItem("my-details") as string);
        if (!user) {
          router.push("/sign-up"); // Redirect to login page if not authenticated
        } else {
          setUserObject(user);
          setIsLoading(false);
        }
      };

      checkAuth();
    }, [router]);

    if (isLoading) {
      return <div></div>;
    }

    // Render the wrapped component if authenticated
    return userObject ? <WrappedComponent {...props} /> : null;
  };

  return Wrapper;
};

export default withAuth;
