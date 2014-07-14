(function (enyo, scope) {

    /**
    * Provides static methods for easing calculations.
    *
	* @ui
	* @public
    * @todo verify this combines with enyo.easing definition
    * @todo verify all these methods need to be documented
	*/

    enyo.mixin(enyo.easing, /** @lends  enyo.easing.prototype */ {

        /**
        * @method
        * @type {Number}
        * @public
        */
        easeInQuad: function (n, t, b, c, d) {
            return c*(t /= d)*t + b;
        },

        /**
        * @method
        * @type {Number}
        * @public
        */
        easeOutQuad: function (n, t, b, c, d) {
            return -c *(t /= d)*(t-2) + b;
        },


        /**
        * @method
        * @type {Number}
        * @public
        */
        easeInOutQuad: function (n, t, b, c, d) {
            if ((t /= d/2) < 1) { return c/2*t*t + b; }
            return -c/2 * ((--t)*(t-2) - 1) + b;
        },


        /**
        * @method
        * @type {Number}
        * @public
        */
        easeInCubic: function (n, t, b, c, d) {
            return c*(t /= d)*t*t + b;
        },

        /**
        * @method
        * @type {Number}
        * @public
        */
        easeOutCubic: function (n, t, b, c, d) {
            return c*((t=t/d-1)*t*t + 1) + b;
        },

        /**
        * @method
        * @type {Number}
        * @public
        */
        easeInOutCubic: function (n, t, b, c, d) {
            if ((t /= d/2) < 1) { return c/2*t*t*t + b; }
            return c/2*((t-=2)*t*t + 2) + b;
        },

        /**
        * @method
        * @type {Number}
        * @public
        */
        easeInQuart: function (n, t, b, c, d) {
            return c*(t /= d)*t*t*t + b;
        },

        /**
        * @method
        * @type {Number}
        * @public
        */
        easeOutQuart: function (n, t, b, c, d) {
            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        },

        /**
        * @method
        * @type {Number}
        * @public
        */
        easeInOutQuart: function (n, t, b, c, d) {
            if ((t /= d/2) < 1) { return c/2*t*t*t*t + b; }
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        },

        /**
        * @method
        * @type {Number}
        * @public
        */
        easeInQuint: function (n, t, b, c, d) {
            return c*(t /= d)*t*t*t*t + b;
        },

        /**
        * @method
        * @type {Number}
        * @public
        */
        easeOutQuint: function (n, t, b, c, d) {
            return c*((t=t/d-1)*t*t*t*t + 1) + b;
        },

        /**
        * @method
        * @type {Number}
        * @public
        */
        easeInOutQuint: function (n, t, b, c, d) {
            if ((t /= d/2) < 1) { return c/2*t*t*t*t*t + b; }
            return c/2*((t-=2)*t*t*t*t + 2) + b;
        },

        /**
        * @method
        * @type {Number}
        * @public
        */
        easeInSine: function (n, t, b, c, d) {
            return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
        },

        /**
        * @method
        * @type {Number}
        * @public
        */
        easeOutSine: function (n, t, b, c, d) {
            return c * Math.sin(t/d * (Math.PI/2)) + b;
        },

        /**
        * @method
        * @type {Number}
        * @public
        */
        easeInOutSine: function (n, t, b, c, d) {
            return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
        },

        /**
        * @method
        * @type {Number}
        * @public
        */
        easeInExpo: function (n, t, b, c, d) {
            return (t===0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
        },

        /**
        * @method
        * @type {Number}
        * @public
        */
        easeOutExpo: function (n, t, b, c, d) {
            return (t===d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
        },

        /**
        * @method
        * @type {Number}
        * @public
        */
        easeInOutExpo: function (n, t, b, c, d) {
            if (t===0) { return b; }
            if (t===d) { return b+c; }
            if ((t /= d/2) < 1) { return c/2 * Math.pow(2, 10 * (t - 1)) + b; }
            return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
        },

        /**
        * @method
        * @type {Number}
        * @public
        */
        easeInCirc: function (n, t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d)*t) - 1) + b;
        },

        /**
        * @method
        * @type {Number}
        * @public
        */
        easeOutCirc: function (n, t, b, c, d) {
            return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
        },

        /**
        * @method
        * @type {Number}
        * @public
        */
        easeInOutCirc: function (n, t, b, c, d) {
            if ((t /= d/2) < 1) { return -c/2 * (Math.sqrt(1 - t*t) - 1) + b; }
            return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
        },

        /**
        * @method
        * @type {Number}
        * @public
        */
        easeInElastic: function (n, t, b, c, d) {
            var s = 1.70158;
            var a = c;
            var p = 0;
            if (t===0) { return b; }
            if ((t /= d)==1) { return b+c; }
            if (!p) { p=d*0.3; }
            if (a < Math.abs(c)) { a=c; s=p/4; }
            else { s = p/(2*Math.PI) * Math.asin (c/a); }
            return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        },

        /**
        * @method
        * @type {Number}
        * @public
        */
        easeOutElastic: function (n, t, b, c, d) {
            var s = 1.70158;
            var a = c;
            var p = 0;
            if (t===0) { return b; }
            if ((t /= d)==1) { return b+c; }
            if (!p) { p=d*0.3; }
            if (a < Math.abs(c)) { a=c; s=p/4; }
            else { s = p/(2*Math.PI) * Math.asin (c/a); }
            return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
        },

        /**
        * @method
        * @type {Number}
        * @public
        */
        easeInOutElastic: function (n, t, b, c, d) {
            var s = 1.70158;
            var a = c;
            var p = 0;
            if (t===0) { return b; }
            if ((t /= d/2)===2) { return b+c; }
            if (!p) { p=d*(0.3*1.5); }
            if (a < Math.abs(c)) { a=c; s=p/4; }
            else { s = p/(2*Math.PI) * Math.asin (c/a); }
            if (t < 1) { return -0.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b; }
            return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
        },

        /**
        * @method
        * @type {Number}
        * @public
        */
        easeInBack: function (n, t, b, c, d) {
            var s = 1.70158;
            return c*(t /= d)*t*((s+1)*t - s) + b;
        },

        /**
        * @method
        * @type {Number}
        * @public
        */
        easeOutBack: function (n, t, b, c, d) {
            var s = 1.70158;
            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        },

        /**
        * @method
        * @type {Number}
        * @public
        */
        easeInOutBack: function (n, t, b, c, d) {
            var s = 1.70158;
            if ((t /= d/2) < 1) { return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b; }
            return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
        },

        /**
        * @method
        * @type {Number}
        * @public
        */
        easeInBounce: function (n, t, b, c, d) {
            return c - enyo.easing.easeOutBounce (d-t, 0, c, d) + b;
        },

        /**
        * @method
        * @type {Number}
        * @public
        */
        easeOutBounce: function (n, t, b, c, d) {
            if ((t /= d) < (1/2.75)) {
                return c*(7.5625*t*t) + b;
            } else if (t < (2/2.75)) {
                return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
            } else if (t < (2.5/2.75)) {
                return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
            } else {
                return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
            }
        },

        /**
        * @method
        * @type {Number}
        * @public
        */
        easeInOutBounce: function (n, t, b, c, d) {
            if (t < d/2) { return enyo.easing.easeInBounce (n, t*2, 0, c, d) * 0.5 + b; }
            return enyo.easing.easeOutBounce (n, t*2-d, 0, c, d) * 0.5 + c * 0.5 + b;
        }
    });

    /*

    TERMS OF USE - EASING EQUATIONS

    Open source under the BSD License.

    Copyright © 2001 Robert Penner
    All rights reserved.

    Redistribution and use in source and binary forms, with or without modification,
    are permitted provided that the following conditions are met:

    Redistributions of source code must retain the above copyright notice, this list
    of conditions and the following disclaimer.

    Redistributions in binary form must reproduce the above copyright notice, this list
    of conditions and the following disclaimer in the documentation and/or other materials
    provided with the distribution.

    Neither the name of the author nor the names of contributors may be used to endorse
    or promote products derived from this software without specific prior written permission.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
    EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
    OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
    SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
    SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT
    OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
    HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
    TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
    EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

    */

})(enyo, this);
