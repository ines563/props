import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  return (
    <div>
      {props.nom} <br/>
      {props.bio} <br/>
      {props.profession}<br/>
      {props.children}<br/>
      <button onClick={() => props.show(props.nom)}>Afficher le nom </button>
    </div>
  );
};
Profile.propTypes = {
  nom: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  show: PropTypes.func,
};
Profile.defaultProps = {
    nom:"inesss",
    bio:"21 ans sfax",
    profession:"informaticien"
}


export default Profile;
