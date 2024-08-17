import connect from "./connect/connect.js";
import User from "./schemas/user.js"

// 더미 데이터 넣기용
connect();

const user_inserted = await User.create(
    {
        email : "khb1234@gmail.com",
        name : "김한비",
        age : 20,
    },
    {
        email : "khb5678@gmail.com",
        name : "홍길동",
        age : 30,
    },    
)

const users = await User.find();
console.log(users);
