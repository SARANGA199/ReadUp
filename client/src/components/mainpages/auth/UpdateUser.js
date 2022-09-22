import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Styles/profile.css';
import { id } from 'date-fns/locale';

function UpdateUser() {

    const state = useContext(GlobalState);
    const [id,setId] = useState();
    const [firstname, setFirstname] = useState();
    const [lastname,setLastname] = useState();
    const [username,setUsername]= useState();
    const [email,setEmail]= useState();
    const [userType,setUserType]= useState();
    const [user] = state.userAPI.user;
    const [token] = state.token;
    const [image, setImage] = useState(false);

    useEffect(() => {

        setId(localStorage.getItem('uid'));
        setFirstname(localStorage.getItem('FirstName'));
        setLastname(localStorage.getItem('LastName'));
        setUsername(localStorage.getItem('UserName'));
        setEmail(localStorage.getItem('Email'));
        setUserType(localStorage.getItem('UserType'));
        // setImage(localStorage.getItem)

    },[] );

    function submitData(e) {
        e.preventDefault();
        const newRoute = {
              
          firstname,
          lastname,
          username,
          email,
          userType,
          image
        }
        swal({
            title: "Are you sure?",
            text: "You are going to update a users account!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          }).then((willDelete) => {
            if (willDelete) {
              axios.put(`/user/updateUsr/${id}`,newRoute)
              swal("Poof! User account successfully updated!", {
                icon: "success",
              });
            } else {
              swal("User account is safe!");
            }
          }).catch((err)=>{
    
            alert(err);
         })
      
    }

    return (
        <>
        <div className="profContainer">
        <div className="profLeft">
          <div className="profTop">
            UPDATE <br />
            USER <br />
            PROFILE
          </div>
        </div>
        <div className="profile_page">
            <div className="col-left">
            <form onSubmit={submitData}  className="form">
                <div className='card1'>
                <h2>Update</h2>
                <br/>
                <div className="row">
                <div className="col-md-6 mb-4">
                <div className="form-outline">
                <div className="form-group">
                    <label htmlFor="name">First Name</label>
                    <input type="text" name="Fname" id="Fname" defaultValue={firstname}
                    placeholder="First name" onChange={e=>{setFirstname(e.target.value);}} />
                </div>
                </div>
                </div>
                <div className="col-md-6 mb-4">
                <div className="form-outline">
                <div className="form-group">
                    <label htmlFor="regNumber">Last Name</label>
                    <input type="text" name="lastName" id="lastName" defaultValue={lastname}
                    placeholder="Last Name" onChange={e=>{setLastname(e.target.value);}}/>
                </div>
                </div>
                </div>
                </div>

                <div className="row">
                <div className="col-md-6 mb-4">
                <div className="form-outline">
                <div className="form-group">
                    <label htmlFor="email">Username</label>
                    <input type="username" name="username" id="username" defaultValue={username}
                    placeholder="Username" onChange={e=>{setUsername(e.target.value);}}/>
                </div>
                </div>
                </div>

                <div className="col-md-6 mb-4">
                <div className="form-outline">
                <div className="form-group">
                    <label htmlFor="regNumber">Email</label>
                    <input type="email" name="email" id="email" defaultValue={email}
                    placeholder="Email" onChange={e=>{setEmail(e.target.value);}}/>
                </div>
                </div>
                </div>
                </div>
                
                <div className="row">
                <div className="col-md-6 mb-4">
                <div className="form-outline">
                <div className="form-group">
                    <label htmlFor="email">Address</label>
                    <input type="address" name="address" id="address"
                    placeholder="Address"/>
                </div>
                </div>
                </div>

                <div className="col-md-6 mb-4">
                <div className="form-outline">
                <div className="form-group">
                    <label htmlFor="regNumber">User Type</label>
                    <input type="userType" name="userType" id="userType" defaultValue={userType}
                    placeholder="userType" onChange={e=>{setUserType(e.target.value);}}/>
                </div>
                </div>
                </div>
                </div>

                <button>Update</button>
                </div>
                </form>
            </div>
        </div>
        </div>
        </>
    )
}

export default UpdateUser