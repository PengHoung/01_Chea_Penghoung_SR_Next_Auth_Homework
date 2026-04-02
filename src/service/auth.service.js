export async function loginService(data) {
    const user = {
        email: data.email,
        password: data.password,       
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auths/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
    const loggedInUser = await response.json();
    console.log("this is loggedInUser in auth service :", loggedInUser);
    return loggedInUser;
}