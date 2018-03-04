import React from 'react';
import PropTypes from 'prop-types';
import { Job, Dialog, FormBuilder, ItemsList } from 'components';
import { application } from 'components/FormBuilder/forms';

const OpeningsTab = (props) => {

  const handlesubmit = () => {
    props.userActions.applyJob();
  };

  const {
    openings: { jobs },
    ui: { dialog: { show, component } },
    uiActions: { toggleDialog },
    renderItem,
    userActions: { getOpenings, applyJob },
  } = props;

  return (
    <div>
      <ItemsList
        data={jobs}
        onMount={getOpenings}
        renderItem={renderItem}
      />
      <Dialog
        showDialog={show && component === 'ApplicationDialog'}
        onToggle={toggleDialog}
        innerContainer="container-full"
        title="You are almost ready to apply!"
      >
        <FormBuilder
          {...application}
          onSubmit={applyJob}
        />
      </Dialog>
    </div>
  );
};

OpeningsTab.propTypes = {
  openings:    PropTypes.object,
  ui:          PropTypes.object,
  uiActions:   PropTypes.object,
  userActions: PropTypes.object,
  renderItem:  PropTypes.func,
};
OpeningsTab.defaultProps = {
  openings:    {},
  ui:          {},
  uiActions:   {},
  userActions: {},
  renderItem:  () => {},
};

export default OpeningsTab;
