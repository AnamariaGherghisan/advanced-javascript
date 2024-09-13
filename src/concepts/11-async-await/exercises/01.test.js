import axios from "axios";
import { getDataFromURL } from "./01";

jest.mock("axios");

const mockSuccessResponse = {
  login: "surajverma2587",
  id: 10376859,
  node_id: "MDQ6VXNlcjEwMzc2ODU5",
  avatar_url: "https://avatars.githubusercontent.com/u/10376859?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/surajverma2587",
  html_url: "https://github.com/surajverma2587",
  followers_url: "https://api.github.com/users/surajverma2587/followers",
  following_url:
    "https://api.github.com/users/surajverma2587/following{/other_user}",
  gists_url: "https://api.github.com/users/surajverma2587/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/surajverma2587/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/surajverma2587/subscriptions",
  organizations_url: "https://api.github.com/users/surajverma2587/orgs",
  repos_url: "https://api.github.com/users/surajverma2587/repos",
  events_url: "https://api.github.com/users/surajverma2587/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/surajverma2587/received_events",
  type: "User",
  site_admin: false,
  name: "Suraj Verma",
  company: "Booking.com",
  blog: "",
  location: " Manchester, UK",
  email: null,
  hireable: null,
  bio: "Senior Software Engineer and Full Stack Instructor passionate about transforming people in to seasoned software engineers.",
  twitter_username: null,
  public_repos: 186,
  public_gists: 0,
  followers: 113,
  following: 10,
  created_at: "2015-01-03T00:32:06Z",
  updated_at: "2024-01-30T20:21:09Z",
};

describe("getDataFromURL", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const spy = jest.spyOn(console, "log");

  it("should log the expected response for a valid url", async () => {
    axios.get.mockResolvedValue({ data: mockSuccessResponse });

    await getDataFromURL("https://api.github.com/users/surajverma2587");

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith({
      username: "surajverma2587",
      imageUrl: "https://avatars.githubusercontent.com/u/10376859?v=4",
      profileUrl: "https://github.com/surajverma2587",
      name: "Suraj Verma",
    });
  });

  it("should log the expected error for an invalid url", async () => {
    axios.get.mockRejectedValue(new Error("Failed to retrieve data"));

    await getDataFromURL("https://api.github.com/users/surajverma2587");

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith("Failed to retrieve data");
  });

  it("should make a network request to the expected endpoint", async () => {
    axios.get.mockResolvedValue({ data: mockSuccessResponse });

    await getDataFromURL("https://api.github.com/users/surajverma2587");

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      "https://api.github.com/users/surajverma2587"
    );
  });
});
