! function(t, i, o) {
    "use strict";
    var e = "ontouchstart" in t,
        r = ("undefined" != typeof InstallTrigger, "webkitTransform" in i.documentElement.style);
    t.requestAnimFrame = function() {
        return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(i) {
            t.setTimeout(i, 1e3 / 60)
        }
    }(), t.MYSmoothScroll = function() {
        this.options = MYSmoothScroll.Defaults, this.animators = [], this.initialize()
    }, MYSmoothScroll.Defaults = {
        friction: .95,
        step: 2,
        minDistance: .1
    }, MYSmoothScroll.Animator = function(t) {
        var i = "html" === t.nodeName.toLowerCase() && r ? t.children[t.children.length - 1] : t;
        this.target = t, this.originalTarget = i, this.direction = o, this.currentY = i.scrollTop, this.targetY = i.scrollTop, this.lastY = i.scrollTop, this.delta = 0, this.minY = 0, this.maxY = o, this.isPlaying = !1, this.speed = 0
    }, MYSmoothScroll.Animator.prototype.update = function(i) {
        var o = t.MYSmoothScroll.instance,
            e = i.detail ? -1 * i.detail : i.wheelDelta / 40,
            r = 0 > e ? -1 : 1;
        r != this.direction && (this.speed = 0, this.direction = r), this.currentY = -this.originalTarget.scrollTop, this.delta = e, this.targetY += e, this.speed += (this.targetY - this.lastY) * o.options.step, this.lastY = this.targetY, this.start()
    }, MYSmoothScroll.Animator.prototype.start = function() {
        this.isPlaying || (this.isPlaying = !0, t.jQuery && t.jQuery(this.originalTarget).stop(), this.play())
    }, MYSmoothScroll.Animator.prototype.play = function() {
        var t = this;
        this.isPlaying && (requestAnimFrame(function() {
            t.play()
        }), this.render())
    }, MYSmoothScroll.Animator.prototype.stop = function() {
        this.isPlaying && (this.speed = 0, this.isPlaying = !1)
    }, MYSmoothScroll.Animator.prototype.render = function() {
        var i = t.MYSmoothScroll.instance;
        Math.abs(this.originalTarget.scrollTop - -this.currentY) > Math.abs(this.delta) && Math.abs(this.originalTarget.scrollTop - -this.currentY) > 1 && this.stop(), this.speed < -i.options.minDistance || this.speed > i.options.minDistance ? (this.currentY = this.currentY + this.speed, this.currentY > this.minY ? this.currentY = this.speed = 0 : this.currentY < this.maxY && (this.speed = 0, this.currentY = this.maxY), this.originalTarget.scrollTop = -this.currentY, this.speed *= i.options.friction) : this.stop()
    }, MYSmoothScroll.prototype.initialize = function() {
        t.addEventListener("mousewheel", this.onWheel), t.addEventListener("DOMMouseScroll", this.onWheel)
    }, MYSmoothScroll.prototype.onWheel = function(i) {
        if (!i.ctrlKey) {
            var o, e, r = t.MYSmoothScroll.instance;
            for (i.preventDefault(), o = i.target; null !== o && "html" != o.nodeName.toLocaleLowerCase() && !(("auto" == t.getComputedStyle(o).getPropertyValue("overflow") || "scroll" == t.getComputedStyle(o).getPropertyValue("overflow")) && o.scrollHeight > o.clientHeight && o.clientHeight > 0);) o = o.parentNode;
            if (null != o) {
                e = r.isAnimator(o) ? r.getAnimator(o) : r.createAnimator(o);
                for (var n in r.animators) r.animators[n] !== e && r.animators[n].stop && r.animators[n].stop();
                e.update(i)
            }
        }
    }, MYSmoothScroll.prototype.createAnimator = function(t) {
        return this.animators[this.animators.push(new MYSmoothScroll.Animator(t)) - 1]
    }, MYSmoothScroll.prototype.isAnimator = function(t) {
        for (var i in this.animators)
            if (this.animators[i].target === t) return !0;
        return !1
    }, MYSmoothScroll.prototype.getAnimator = function(t) {
        for (var i in this.animators)
            if (this.animators[i].target === t) return this.animators[i];
        return o
    }, e || (t.MYSmoothScroll.instance = new MYSmoothScroll)
}(window, document);