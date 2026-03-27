import { createContext, useContext, useState } from "react";

const LibraryContext = createContext();

export const LibraryProvider = ({ children }) => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [returnedBooks, setReturnedBooks] = useState([]);
  const [notifications, setNotifications] = useState([]);

  // Add notification without duplicates
  const getTime = () => {
  const now = new Date();
  return now.toLocaleString(); // pwede mo pa format later
  };

  const addNotification = (notif) => {
  setNotifications((prev) => {
    if (prev.some((n) => n.message === notif.message)) return prev;
    return [...prev, notif];
  });
};

  // Borrow book
  const borrowBook = (book) => {
    setBorrowedBooks((prev) => {
      if (prev.some((b) => b.title === book.title)) return prev;
      addNotification({ 
  message: `You borrowed "${book.title}"`, 
  time: getTime(),
  type: "borrow"
});
      return [...prev, book];
    });
  };

  // Return book
  const returnBook = (book) => {
    setBorrowedBooks((prev) => prev.filter((b) => b.title !== book.title));
    setReturnedBooks((prev) => {
      if (!prev.some((b) => b.title === book.title)) {
        addNotification({ 
  message: `You returned "${book.title}"`, 
  time: getTime(),
  type: "return"
});
        return [...prev, book];
      }
      return prev;
    });
  };

  // Delete returned book
  const deleteBook = (book) => {
    setReturnedBooks((prev) => prev.filter((b) => b.title !== book.title));
    addNotification({ 
  message: `Deleted "${book.title}" from library`, 
  time: getTime(),
  type: "delete"
});
  };

  return (
    <LibraryContext.Provider
      value={{
        borrowedBooks,
        returnedBooks,
        borrowBook,
        returnBook,
        deleteBook,
        notifications,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
};

export const useLibrary = () => useContext(LibraryContext);