import Rating from '@mui/material/Rating';

function SkillRating(props) {
  console.log(props.isDark)
  return (
      <Rating

        name="read-only"
        readOnly
        value={props.rating}
        precision={.5}
        
        size="small"
        sx={{
    color: props.isDark ? '#34d399': "#bbf7d0",
     // Tailwind emerald-500
    '& .MuiRating-iconFilled': {
      color: props.isDark ? '#34d399': "#bbf7d0", // filled star
    },
    '& .MuiRating-iconEmpty': {
      color: '#d1d5db', // optional: empty star color (gray-300)
    }
  }}
      />
      
  );
}

export default SkillRating;