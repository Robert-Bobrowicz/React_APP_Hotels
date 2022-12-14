import React, { useEffect, useReducer } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Layout from './components/Layout/Layout';
import ThemeContext from './components/context/themeContext';
import AuthContext from './components/context/authContext';
import ReducerContext from './components/context/reducerContext';
import { reducer, initialState } from './reducer';
import Hotel from './pages/Hotel';
// import LoadingIcon from './components/LoadingIcon/LoadingIcon';
import Search from './pages/Search/Search';
import Profile from './pages/Profile/Profile';
import ProfileDetails from "./pages/Profile/ProfileDetails";
import MyHotels from "./pages/Profile/MyHotels";
import NotFound from './pages/404/NotFound';
import Login from './pages/Auth/Login';
import Register from './components/Register/Register';
import ErrorBoundary from './components/hoc/ErrorBoundary';
import AddHotel from './components/Hotels/AddHotel/AddHotel';
import EditHotel from './components/Hotels/EditHotel/EditHotel';
import BookHotel from './components/BookHotel/BookHotel';

// const Profile = lazy(() => {
//   import('./pages/Profile/Profile');
// })


// const hotelsDB = [
//   {
//     id: 1,
//     name: "Robert's Apartments Piwna 12",
//     city: "Old Town, Warsaw",
//     rating: 9.2,
//     description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
//     image: ""
//   },
//   {
//     id: 2,
//     name: "Robert's Apartments Old Town",
//     city: "Old Town, Warsaw",
//     rating: 9.8,
//     description: "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
//     image: ""
//   },
//   {
//     id: 3,
//     name: "Robert's Apartments National Stadium",
//     city: "Praga, Warsaw",
//     rating: 9.4,
//     description: "No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
//     image: ""
//   }
// ]

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const searchHandler = term => {
  //   console.log('szukam z poziomu App', term);
  //   const newHotels = [...hotelsDB]
  //     .filter(el => el.name
  //       .toLowerCase()
  //       .includes(term.toLowerCase()));
  //   dispatch({ type: 'set-hotels', hotels: newHotels })
  // }

  const checkUser = () => {
    const tokenData = JSON.parse(window.localStorage.getItem('token-data'));
    if (tokenData) {
      dispatch({ type: 'set-isAuthenticated', isAuthenticated: true });
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <Router basename='/'>
      <AuthContext.Provider
        value={{
          // isAuthenticated: state.isAuthenticated,
          // login: () => dispatch({ type: 'set-isAuthenticated', isAuthenticated: true }),
          user: state.user,
          login: (user) => dispatch({ type: 'set-isAuthenticated', user }),
          logout: () => dispatch({ type: 'set-isAuthenticated', isAuthenticated: false })
        }}>
        <ThemeContext.Provider value={state.color}>
          <div className="App">
            <ReducerContext.Provider value={{
              state: state,
              dispatch: dispatch
            }}>

              <ErrorBoundary>
                <Layout
                  header={<Header />}
                  // onSearch={(term) => searchHandler(term)} />}
                  menu={<Menu />}

                  content={
                    <>
                      <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/hotel/:id" element={<Hotel />} />
                        <Route path="/search/:term" element={<Search />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        {/* <Route path='/profile' element={state.isAuthenticated ? <Profile /> : <Login />}>  */}
                        <Route path='/profile' element={state.user ? <Profile /> : <Login />}>
                          <Route path="/profile" element={<ProfileDetails />} />
                          <Route path="/profile/myhotels" element={<MyHotels />} />
                        </Route>
                        <Route path="profile/myhotels/add-new" element={<AddHotel />} />
                        <Route path="profile/myhotels/edit/:id" element={<EditHotel />} />
                        <Route path="/bookhotel" element={<BookHotel />} />
                        <Route path="*" element={<NotFound />} />
                      </Routes>

                      {/* {state.loading ? <LoadingIcon /> : null} */}
                    </>
                  }
                  footer={<Footer />}
                />
              </ErrorBoundary>
            </ReducerContext.Provider>
          </div>
        </ThemeContext.Provider>
      </AuthContext.Provider>
    </Router >
  )
}


// // Class Component 

// class App extends Component {

//   static contextType = ThemeContext;

//   hotels = [
//     {
//       id: 1,
//       name: "Robert's Apartments Piwna 12",
//       city: "Old Town, Warsaw",
//       rating: 9.2,
//       description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
//       image: ""
//     },
//     {
//       id: 2,
//       name: "Robert's Apartments Old Town",
//       city: "Old Town, Warsaw",
//       rating: 9.8,
//       description: "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
//       image: ""
//     },
//     {
//       id: 3,
//       name: "Robert's Apartments National Stadium",
//       city: "Praga, Warsaw",
//       rating: 9.4,
//       description: "No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
//       image: ""
//     }
//   ]

//   state = {
//     hotels: [],
//     loading: true,
//     color: 'primary',
//     isAuthenticated: false
//   }

//   searchHandler(term) {
//     console.log('szukam z poziomu App', term);
//     const hotels = [...this.hotels]
//       .filter(el => el.name
//         .toLowerCase()
//         .includes(term.toLowerCase()));
//     this.setState({ hotels });
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({
//         hotels: this.hotels,
//         loading: false
//       });
//     }, 2000)
//   }

//   render() {
//     return (
//       <AuthContext.Provider
//         value={{
//           isAuthenticated: this.state.isAuthenticated,
//           login: () => this.setState({ isAuthenticated: true }),
//           logout: () => this.setState({ isAuthenticated: false })
//         }}>
//         <ThemeContext.Provider value={this.state.color}>
//           <div className="App">
//             <Layout
//               header={<Header
//                 onSearch={(findHotel) => this.searchHandler(findHotel)} />}
//               menu={<Menu />}
//               content={
//                 this.state.loading ?
//                   (<LoadingIcon />) :
//                   (<Hotels hotels={this.state.hotels} />)
//               }
//               footer={<Footer />}
//             />
//           </div>
//         </ThemeContext.Provider>
//       </AuthContext.Provider>
//     )
//   }
// }


export default App;