(function (enyo, scope) {

    /**
    *
    * @ui
    * @class FlexLayout.ResponseStrategy.RowAfterColumns
    * @extends enyo.Control
    * @private
    */

    enyo.FlexLayout.ResponseStrategy.RowAfterColumns = enyo.singleton({

        /**
        * @private
        */
        kind: 'enyo.FlexLayout.ResponseStrategy',

        /**
        * @private
        * @method
        */
        _getPositionAfterColumns: function(oControl) {
            var n         = 0,
                bFound    = false,
                aChildren = oControl.parent.children,
                nChildren = aChildren.length;

            for (;n<nChildren; n++) {
                if (aChildren[n] == oControl) {
                    bFound = true;
                    continue;
                }
                if (bFound && aChildren[n].flexOrient != 'column') {
                    return n - 1;
                }
            }
            return -1;
        },

        /**
        * @private
        * @method
        */
        respond: enyo.inherit(function(sup) {
            return function(oControl, bIncreasing) {
                sup.apply(this, arguments);
                if (bIncreasing) {
                    this.reverseProperty(oControl, 'flexOrder');
                    this.reverseProperty(oControl, 'flexOrient');
                } else {
                    this.setProperty(oControl, 'flexOrder', this._getPositionAfterColumns(oControl));
                    this.setProperty(oControl, 'flexOrient', 'row');
                }
            };
        })
    });

})(enyo, this);