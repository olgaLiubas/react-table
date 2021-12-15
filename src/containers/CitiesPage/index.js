// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import Row from "components/Row";
// import Footer from "components/Footer";
// import Header from "components/Header";
// import Portal from "components/Portal";
// import { fetchCountriesForSaga } from "bus/country/actions";
// import { getCountries } from "bus/country/selectors";

// import CircularProgress from "@mui/material/CircularProgress";
// import { getFetchingCountriesStatuses } from "bus/country/selectors";
// import { citiesCellsNamesConfig } from "constants/citiesCellsNamesConfig";

// const CitiesPage = ({ styles }) => {
//   const dispatch = useDispatch();
//   const arrayOfData = useSelector(getCountries);
//   const fetchingStatuses = useSelector(getFetchingCountriesStatuses);

//   useEffect(() => {
//     dispatch(fetchCountriesForSaga());
//   }, []);

//   return (
//     <>
//       <div className={styles.table}>
//         <Header cellsNamesConfig={citiesCellsNamesConfig} />

//         <div id="modal_place" className={styles.modalPlace}></div>

//         <Portal />

//         {fetchingStatuses.loading && (
//           <CircularProgress color="inherit" className={styles.loader} />
//         )}

//         {fetchingStatuses.success && !fetchingStatuses.loading && (
//           <>
//             {arrayOfData.map((item) => (
//               <Row
//                 key={item.id}
//                 item={item}
//                 cellsNamesConfig={citiesCellsNamesConfig}
//               />
//             ))}
//           </>
//         )}

//         <Footer />
//       </div>
//     </>
//   );
// };

// export default CitiesPage;
