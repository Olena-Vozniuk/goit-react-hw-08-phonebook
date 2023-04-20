export const styles = {
  item: {
    padding: '10px',
    backgroundColor: 'rgba(27, 28, 28, 0.1)',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    },
    itemContentWrap: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingLeft: '15px',
    },
    itemName: {
        display: 'flex',
        alignItems: 'center',
    },
    itemIcon: {
        width: '25px',
        marginRight: '5px',
    },
    deleteIcon: {
        '&:hover': {
    background: 'orangered',
    color: 'white'
    },
    }
};