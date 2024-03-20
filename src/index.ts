
import app from "./app";

const PORT  = process.env.PORT || 5000;













app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
}).on('error', (err: any) => {
    console.log(err.message);
});

