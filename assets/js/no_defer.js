// add bootstrap classes to tables
$(document).ready(function () {
  // `determineComputedTheme` lives in theme.js, which is only loaded when
  // `site.enable_darkmode` is true. Fall back to "light" otherwise so this
  // jQuery `ready` handler doesn't throw and abort the rest of the page setup.
  const currentTheme = typeof determineComputedTheme === "function" ? determineComputedTheme() : "light";
  $("table").each(function () {
    if (currentTheme == "dark") {
      $(this).addClass("table-dark");
    } else {
      $(this).removeClass("table-dark");
    }

    // only select tables that are not inside an element with "news" (about page) or "card" (cv page) class
    if (
      $(this).parents('[class*="news"]').length == 0 &&
      $(this).parents('[class*="card"]').length == 0 &&
      $(this).parents('[class*="archive"]').length == 0 &&
      $(this).parents("code").length == 0
    ) {
      // make table use bootstrap-table
      $(this).attr("data-toggle", "table");
      // add some classes to make the table look better
      // $(this).addClass('table-sm');
      $(this).addClass("table-hover");
    }
  });
});
