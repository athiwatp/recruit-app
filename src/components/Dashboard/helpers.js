import PATHS from 'constants/paths';

const getTabList = (user) => {
  if (user === 'user') {
    return (
      [
        { to: PATHS.USER_DASHBOARD_HELLO,
          title: '<i class="fas fa-th-large"></i> Dashboard',
        },
        {
          to: PATHS.JOBS,
          title: '<i class="fas fa-briefcase"></i> Jobs',
        },
      ]
    );
  }

  return (
    [
      { to: PATHS.EMPLOYER_DASHBOARD_HELLO,
        title: '<i class="fas fa-th-large"></i> Dashboard',
      },
      {
        to: PATHS.CANDIDATES,
        title: '<i class="fas fa-users"></i> Candidates',
      },
    ]
  );
};

export default getTabList;
