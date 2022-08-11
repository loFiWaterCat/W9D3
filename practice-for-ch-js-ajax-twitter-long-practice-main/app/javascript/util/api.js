const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = {
    // Your code here
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-CSRF-Token": csrfToken,
    ...options.headers
  };

  const response = await fetch(url, options);
  if (response.ok) {
    return response.json();
  } else {
    throw response;
  }
}

// /users/:user_id/follow(.:format)
export const followUser = function(id) {
  const url = `/users/${id}/follow`;
  return customFetch(url, {
    method: "POST"
  });
}

export const unfollowUser = function(id) {
  const url = `/users/${id}/follow`;
  return customFetch(url, {
    method: "DELETE"
  });
}

