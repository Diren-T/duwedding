// import React from "react";
// import styled from "styled-components";

// const ModalBackground = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const ModalContent = styled.div`
//   background-color: white;
//   padding: 2rem;
//   border-radius: 5px;
//   width: 80%;
//   max-width: 500px;
// `;

// const BookingModal = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <ModalBackground onClick={onClose}>
//       <ModalContent onClick={(e) => e.stopPropagation()}>
//         <h2>Termin buchen</h2>
//         <form>
//           <label htmlFor="name">Name:</label>
//           <input type="text" id="name" name="name" required />

//           <label htmlFor="email">E-Mail:</label>
//           <input type="email" id="email" name="email" required />

//           <label htmlFor="date">Datum:</label>
//           <input type="date" id="date" name="date" required />

//           <label htmlFor="time">Zeit:</label>
//           <input type="time" id="time" name="time" required />

//           <button type="submit">Termin anfragen</button>
//         </form>
//       </ModalContent>
//     </ModalBackground>
//   );
// };

// export default BookingModal;
