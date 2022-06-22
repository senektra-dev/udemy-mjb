const user = {
    username : 'Cherryman',
    notifications : []
}

// following code does not work, arrays are pointers.
if (user.notifications === []) {
    console.log("No new notifications");
}

// This works
if (!user.notifications.length) {
    console.log("No new notifications for user");
}
