import { fork, all } from 'redux-saga/effects';
import {
  watchLogin,
  watchLogout,
  watchGetSession,
} from './session';
import {
  watchGetOpenings,
  watchApplyJob,
  watchGetAppliedJobs,
  watchRejectJob,
} from './user';
import {
  watchGetUsers,
  watchGetApplicants,
  watchRejectInterview,
} from './employer';

export default function* rootSaga () {
  yield all([
    fork(watchLogin),
    fork(watchGetOpenings),
    fork(watchApplyJob),
    fork(watchGetAppliedJobs),
    fork(watchRejectJob),
    fork(watchGetUsers),
    fork(watchGetApplicants),
    fork(watchRejectInterview),
    fork(watchLogout),
    fork(watchGetSession),
  ]);
}
