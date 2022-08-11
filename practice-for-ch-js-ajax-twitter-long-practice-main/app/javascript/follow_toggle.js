import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    // Your code here
    this.toggleButton = toggleButton;
    this.handleClick = this.handleClick.bind(this);
    toggleButton.addEventListener("click", this.handleClick)    
  }
  

  async handleClick(event) {
    event.preventDefault();
    if (this.followState === "followed") {
      this.unfollow();
    } else {
      this.follow();
    }
  }

  async follow() {
    // Your code here
    this.followState = "followed";
    await API.followUser(this.toggleButton.getAttribute('data-user-id'))
  }

  async unfollow() {
    // Your code here
    this.followState = "unfollowed"
    await API.unfollowUser(this.toggleButton.getAttribute('data-user-id'))
  }

  render() {
    console.log("in render", this.followState)
    switch (this.followState) {
      // Your code here
      case "followed":
        this.toggleButton.innerText = "Unfollow";
        break;
      case "unfollowed":
        this.toggleButton.innerText = "Follow";
        break;
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}
