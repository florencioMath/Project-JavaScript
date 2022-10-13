function changeRouteGitHub() {
  const route = document.URL;
  const anchors = document.getElementsByClassName("anchors");
  const arrayAnchors = Array.from(anchors);
  const routeToAdd = "/Project-JavaScript/";

  if (route.includes("github.io")) {
    arrayAnchors.forEach((anchor) => {
      anchor.href =
        anchor.href.substring(31, 31) + routeToAdd + anchor.href.substring(32);
    });
  }
}

changeRouteGitHub();
