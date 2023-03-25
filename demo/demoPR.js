if (typeof SiebelAppFacade.demoPR === "undefined") {
  SiebelJS.Namespace("SiebelAppFacade.demoPR");
  define("siebel/custom/customer360/demoPR", [
    "siebel/phyrenderer",
    "siebel/custom/customer360/vendor.js",
    "siebel/custom/customer360/main.js",
  ], function () {
    SiebelAppFacade.demoPR = (function () {
      function demoPR(pm) {
        SiebelAppFacade.demoPR.superclass.constructor.apply(this, arguments);
      }

      SiebelJS.Extend(demoPR, SiebelAppFacade.PhysicalRenderer);

      demoPR.prototype.ShowUI = function () {
        SiebelAppFacade.demoPR.superclass.ShowUI.apply(this, arguments);

        const pm = this.GetPM();
        window.APP.mainApp(pm);
      };

      demoPR.prototype.EndLife = function () {
        SiebelAppFacade.demoPR.superclass.EndLife.apply(this, arguments);
        // cleanup
        window.APP = null;
      };

      return demoPR;
    })();
    return "SiebelAppFacade.demoPR";
  });
}
