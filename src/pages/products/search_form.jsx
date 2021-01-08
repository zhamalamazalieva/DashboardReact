import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const SearchForm = ({ setSearchValue }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 600,
      height: 38,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
  }));
  const classes = useStyles();
  const [inputValue, setInputValue] = React.useState("");
  const handleInput = (event) => {
    setSearchValue(event.target.value);
    setInputValue(event.target.value);
  };

  return (
    <Paper component="form" className={classes.root}>
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        onChange={(event) => handleInput(event)}
        className={classes.input}
        placeholder="Search products by name, id"
      />
    </Paper>
  );
};
export default SearchForm;
