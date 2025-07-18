import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

function More(){
    return(
        <div>
            <p>
            My name is Yoshikage Kira. I'm 33 years old. My house is in the northeast section of Morioh, where all the villas are, and I am not married. I work as an employee for the Kame Yu department stores, and I get home every day by 8 PM at the latest. I don't smoke, but I occasionally drink. I'm in bed by 11 PM, and make sure I get eight hours of sleep, no matter what. After having a glass of warm milk and doing about twenty minutes of stretches before going to bed, I usually have no problems sleeping until morning. Just like a baby, I wake up without any fatigue or stress in the morning. I was told there were no issues at my last check-up. I'm trying to explain that I'm a person who wishes to live a very quiet life. I take care not to trouble myself with any enemies, like winning and losing, that would cause me to lose sleep at night. That is how I deal with society, and I know that is what brings me happiness. Although, if I were to fight I wouldn't lose to anyone.
            </p>

            <Link className="Back-to-profile btn btn-primary" to="/" >Back to profile</Link>
        </div>
    );
}

export default More;

// function More() {
//   return (
//     <div className="container d-flex justify-content-center align-items-center vh-100">
//       <div className="card shadow p-4" style={{ maxWidth: "600px" }}>
//         <h2 className="text-danger text-center mb-3">About Me</h2>
//         <p className="text-justify">
//           My name is <b>Yoshikage Kira</b>. I'm 33 years old. My house is in the northeast section of <i>Morioh</i>, where all the villas are, and I am not married.
//           I work as an employee for the Kame Yu department stores, and I get home every day by 8 PM at the latest. I don't smoke, but I occasionally drink. I'm in bed by 11 PM, and make sure I get eight hours of sleep, <b>no matter what</b>. 
//           <br /><br />
//           After having a glass of warm milk and doing about twenty minutes of stretches before going to bed, I usually have no problems sleeping until morning. Just like a baby, I wake up without any fatigue or stress in the morning. I was told there were no issues at my last check-up.
//           <br /><br />
//           I'm trying to explain that I'm a person who wishes to live a very quiet life. I take care not to trouble myself with any enemies, like winning and losing, that would cause me to lose sleep at night. That is how I deal with society, and I know that is what brings me happiness. Although, if I were to fight, I wouldn't lose to anyone.
//         </p>
//         <div className="text-center mt-3">
//           <Link className="btn btn-secondary" to="/">
//             Back to Profile
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
