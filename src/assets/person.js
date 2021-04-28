export default { 
  all: () => Promise.resolve([
    { 
      id: 1, 
      name: 'Ryan Gosling', 
      address: 'Los Feliz, California, U.S', 
      phoneNumber: '+1-123-123', 
      photo: 'https://cdn.famousoutfits.com/wp-content/uploads/2014/08/profile-ryan-gosling.png' 
    }, 
    { 
      id: 2, 
      name: 'Robert Pattinson', 
      address: 'Orlando, Florida, U.S', 
      phoneNumber: '+1-123-193', 
      photo: 'https://cdn.famousoutfits.com/wp-content/uploads/2014/08/profile-ryan-gosling.png' 
    }, 
    { 
      id: 3, 
      name: 'Christian Bale', 
      address: 'Toronto, Canada', 
      phoneNumber: '+1-123-163', 
      photo: 'https://cdn.famousoutfits.com/wp-content/uploads/2014/08/profile-ryan-gosling.png' 
    }
  ]) 
}