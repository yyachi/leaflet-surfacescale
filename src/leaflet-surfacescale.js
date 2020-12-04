// Customized scale control for surface.
L.Control.SurfaceScale = L.Control.Scale.extend({
    options: L.Util.extend({}, L.Control.Scale.prototype.options, { length: undefined }),
    _updateMetric: function (maxMeters) {
        var map = this._map,
            pixelsPerMeter = this.options.maxWidth / (maxMeters * map.getZoomScale(map.getZoom(), 0)),
            microMetersPerPixel = this.options.length / 256;
        rate = pixelsPerMeter * microMetersPerPixel,
            meters = this._getRoundNum(maxMeters * rate),
            label = meters < 1000 ? meters + ' μm' : (meters / 1000) + ' mm';
        this._updateScale(this._mScale, label, meters / rate / maxMeters);
    }
});
L.control.surfaceScale = function (options) {
    return new L.Control.SurfaceScale(options);
};
