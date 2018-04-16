var Contacts = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
  },

  render: function() {
    var contacts = this.props.items.map(function(contact) {
        return <Contact item={contact} key={contact.id}/>
    });

    return (
     <div>
        <h1>Lista kontaktów</h1>
          <ul className={'contactsList'}>
            {contacts}
          </ul>
      </div>
    )
  }
});


