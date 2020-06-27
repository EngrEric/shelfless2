// import React from "react";
// import { Typography, Grid } from "@material-ui/core";
// import Skeleton from "@material-ui/lab/Skeleton";

// const variants = ["h1", "h3", "body1", "caption"];

// function TypographyDemo(props) {
//   const { loading = false } = props;

//   return (
//     <div>
//       {variants.map((variant) => (
//         <Typography component="div" key={variant} variant={variant}>
//           {loading ? <Skeleton /> : variant}
//         </Typography>
//       ))}
//     </div>
//   );
// }

// export default function SkeletonTypography({ loading }) {
//   return (
//     <Grid container spacing={8}>
//       <Grid item xs>
//         <TypographyDemo loading={loading} />
//       </Grid>
//     </Grid>
//   );
// }
