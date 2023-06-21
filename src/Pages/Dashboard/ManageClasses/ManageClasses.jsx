import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../hook/useAxioSecure";
import Swal from "sweetalert2";
import UseClass from "../../../hook/UseClass";
import { useState } from "react";

const ManageClasses = () => {
  const [classes, , refetch] = UseClass();
  const [axiosSecure] = useAxiosSecure();
  const [payStatusMap, setPayStatusMap] = useState({});
  const [isClickedMap, setIsClickedMap] = useState({});
 
  const [feedbackText, setFeedbackText] = useState("");
  const [selectedClass, setSelectedClass] = useState(null);

  const handleDelete = (classs) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/classes/${classs._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  const handleApprove = (classs) => {
    
    setPayStatusMap((prevMap) => ({ ...prevMap, [classs._id]: "approved" }));
    setIsClickedMap((prevMap) => ({ ...prevMap, [classs._id]: true }));
    
    const updatedClass = {
      approval_status: "approved",
      
      
     
  }
  fetch(`https://fashion-fiesta-server-production.up.railway.app/classes/${classs._id}/approvalstatus`, {
      method: 'PUT',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(updatedClass)
  })
      .then(res => res.json())
      .then(data => {
          console.log(data);
          if (data.modifiedCount > 0) {
              Swal.fire({
                  title: 'Success!',
                  text: 'Class Approved Successfully',
                  icon: 'success',
                  confirmButtonText: 'Cool'
              })
              .then((result) => {
                 
                });
              
          }
         
      })


   
  };

  const handleDeny = (classs) => {
    setPayStatusMap((prevMap) => ({ ...prevMap, [classs._id]: "denied" }));
    setIsClickedMap((prevMap) => ({ ...prevMap, [classs._id]: true }));

    const updatedClass = {
      approval_status: "denied",
     
      
     
  }
  fetch(`https://fashion-fiesta-server-production.up.railway.app/classes/${classs._id}/approvalstatus`, {
      method: 'PUT',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(updatedClass)
  })
      .then(res => res.json())
      .then(data => {
          console.log(data);
          if (data.modifiedCount > 0) {
              Swal.fire({
                  title: 'Denied!',
                  text: 'Class Denied ',
                  icon: 'error',
                  confirmButtonText: 'Cool'
              })
              .then((result) => {
                 
                });
              
          }
         
      })
  };
  const openFeedbackModal = (classs) => {
  
    setSelectedClass(classs);
    setFeedbackText("");
    Swal.fire({
      title: "Feedback",
      html: `
        <div>
          <h2>Course Name: ${classs.name}</h2>
          <p>Instructor: ${classs.instructor}</p>
          <p >Email: ${classs.email}</p>
          <textarea id="feedback" rows="4"  placeholder="Enter your feedback"></textarea>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: "Submit",
      preConfirm: () => {
        const feedback = document.getElementById("feedback").value;
        
        setFeedbackText(feedback);
        console.log(feedback)
      // handleFeedbackSubmit(feedbackText,selectedClass);
      const updatedClass = {
        feedback: feedback,
        
      };
  
      fetch(`https://fashion-fiesta-server-production.up.railway.app/classes/${classs._id}/feedback`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(updatedClass)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.modifiedCount > 0) {
            Swal.fire({
              title: 'Success!',
              text: 'Feedback Send Successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            }).then((result) => {
              
            });
          } 
        });
  
      closeFeedbackModal();
      },
    });
  };
  
  const closeFeedbackModal = () => {
    Swal.close();
  };


  // const handleFeedback = (classs) =>{
  //   const updatedClass = {
  //     feedback: ""
  //   }
  //   fetch(`https://fashion-fiesta-server-production.up.railway.app/classes/${classs._id}`, {
  //     method: 'PUT',
  //     headers: {
  //         'content-type': 'application/json'
  //     },
  //     body: JSON.stringify(updatedClass)
  // })
  // .then(res => res.json())
  // .then(data => {
  //     console.log(data);
  //     if (data.modifiedCount > 0) {
  //         Swal.fire({
  //             title: 'Success!',
  //             text: 'Feedback Send Successfully',
  //             icon: 'success',
  //             confirmButtonText: 'Cool'
  //         })
  //         .then((result) => {
             
  //           });
          
  //     }
     
  // })
  // }

  return (
    <div className="w-full">
     <h1 className="text-3xl font-bold text-center bottom-2 bg-blue-300 py-4 text-blue-900">Total Courses: {classes.length}</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Course Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classs, index) => (
              <tr key={classs._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={classs.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{classs.name}</div>
                    </div>
                  </div>
                </td>
                <td>{classs.instructor}</td>
                <td>{classs.email}</td>
                <td>{classs.available_seats}</td>
                <td className="text-right">${classs.price}</td>
                <td>
                  <div className="badge badge-primary text-red-400 badge-outline">
                    {payStatusMap[classs._id] ||
                      classs.approval_status ||
                      "pending"}
                  </div>
                </td>
                <td className="flex items-center">
                  <div
                    onClick={() => handleApprove(classs)}
                    className={`badge badge-primary btn badge-outline ${isClickedMap[classs._id] ? "disabled" : ""
                      }`}
                    disabled={classs.approval_status === "approved" || classs.approval_status === "denied"
                  }
                  >
                    Approve
                  </div>
                  <div
                    onClick={() => handleDeny(classs)}
                    className={`badge badge-primary btn badge-outline ${isClickedMap[classs._id] ? "disabled" : ""
                      }`}
                    disabled={classs.approval_status === "approved" || classs.approval_status === "denied"}
                  >
                    Deny
                  </div>
                  <div
                    className="badge badge-primary btn badge-outline"
                    onClick={() => openFeedbackModal(classs)}
                  >
                    Feedback
                  </div>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(classs)}
                    className="btn btn-ghost bg-red-600 text-white"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default ManageClasses;
