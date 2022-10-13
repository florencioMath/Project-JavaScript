function changeRouteGitHub() {
  const route = document.URL;
  const anchors = document.getElementsByClassName("anchors");
  const arrayAnchors = Array.from(anchors);
  const routeToAdd = "/Project-JavaScript/";

  if (route.includes("127.0.0.1:5500")) {
    arrayAnchors.forEach((anchor) => {
      anchor.href =
        anchor.href.substring(31, 31) + routeToAdd + anchor.href.substring(32);
    });
  }
}

// changeRouteGitHub();
