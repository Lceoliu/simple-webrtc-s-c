!(function (e, r) {
	"function" == typeof define && define.amd
		? define([], r)
		: "object" == typeof exports
		? (module.exports = r())
		: (e.Decoder = r());
})(this, function () {
	function initglobal() {
		(global = this),
			global ||
				("undefined" != typeof window
					? (global = window)
					: "undefined" != typeof self && (global = self));
	}
	function error(e) {
		console.error(e), console.trace();
	}
	function assert(e, r) {
		e || error(r);
	}
	var global;
	return (
		initglobal(),
		(function () {
			"use strict";
			function asmFactory(e, r, i) {
				"use asm";
				var n = e.Math.imul;
				var t = e.Math.min;
				var a = e.Math.max;
				var f = e.Math.pow;
				var o = new e.Uint8Array(i);
				var s = new e.Uint32Array(i);
				var u = new e.Uint8Array(i);
				var l = new e.Uint8Array(i);
				var c = new e.Uint32Array(i);
				var b = 0;
				var d = 0;
				var h = 0;
				var p = 0;
				var k = 0;
				var w = 0;
				var m = 0;
				var v = 0;
				var g = 0;
				var y = 0;
				function B(e, r) {
					e = e | 0;
					r = r | 0;
					var i = 0;
					var t = 0;
					b = e;
					g = n(e, 4) | 0;
					d = r;
					h = n(b | 0, d | 0) | 0;
					p = (h | 0) >> 2;
					w = n(n(b, d) | 0, 4) | 0;
					k = (h + p) | (0 + p) | 0;
					v = 0;
					m = (v + w) | 0;
					y = (m + k) | 0;
					t = ~~+f(+2, +24);
					t = n(t, 4) | 0;
					for (i = 0 | 0; ((i | 0) < (t | 0)) | 0; i = (i + 4) | 0) {
						c[((y + i) | 0) >> 2] = 0;
					}
				}
				function A() {
					var e = 0;
					var r = 0;
					var i = 0;
					var n = 0;
					var t = 0;
					var a = 0;
					var f = 0;
					var o = 0;
					var s = 0;
					var l = 0;
					var k = 0;
					var w = 0;
					var B = 0;
					var A = 0;
					B = v | 0;
					e = m | 0;
					r = (e + h) | 0 | 0;
					i = (r + p) | 0;
					for (s = 0; (s | 0) < (d | 0); s = (s + 2) | 0) {
						k = r;
						w = i;
						for (l = 0; (l | 0) < (b | 0); l = (l + 2) | 0) {
							n = u[e >> 0] | 0;
							t = u[((e + b) | 0) >> 0] | 0;
							a = u[r >> 0] | 0;
							f = u[i >> 0] | 0;
							A = (((((n << 16) | 0) + ((a << 8) | 0)) | 0) + f) | 0;
							o = c[((y + A) | 0) >> 2] | 0;
							if (o) {
							} else {
								o = U(n, a, f) | 0;
								c[((y + A) | 0) >> 2] = o | 0;
							}
							c[B >> 2] = o;
							A = (((((t << 16) | 0) + ((a << 8) | 0)) | 0) + f) | 0;
							o = c[((y + A) | 0) >> 2] | 0;
							if (o) {
							} else {
								o = U(t, a, f) | 0;
								c[((y + A) | 0) >> 2] = o | 0;
							}
							c[((B + g) | 0) >> 2] = o;
							B = (B + 4) | 0;
							e = (e + 1) | 0;
							n = u[e >> 0] | 0;
							t = u[((e + b) | 0) >> 0] | 0;
							A = (((((n << 16) | 0) + ((a << 8) | 0)) | 0) + f) | 0;
							o = c[((y + A) | 0) >> 2] | 0;
							if (o) {
							} else {
								o = U(n, a, f) | 0;
								c[((y + A) | 0) >> 2] = o | 0;
							}
							c[B >> 2] = o;
							A = (((((t << 16) | 0) + ((a << 8) | 0)) | 0) + f) | 0;
							o = c[((y + A) | 0) >> 2] | 0;
							if (o) {
							} else {
								o = U(t, a, f) | 0;
								c[((y + A) | 0) >> 2] = o | 0;
							}
							c[((B + g) | 0) >> 2] = o;
							B = (B + 4) | 0;
							e = (e + 1) | 0;
							r = (r + 1) | 0;
							i = (i + 1) | 0;
						}
						B = (B + g) | 0;
						e = (e + b) | 0;
					}
				}
				function U(e, r, i) {
					e = e | 0;
					r = r | 0;
					i = i | 0;
					var f = 0;
					var o = 0;
					var s = 0;
					var u = 0;
					var l = 0;
					var c = 0;
					var b = 0;
					var d = 0;
					var h = 0;
					l = n(1192, (e - 16) | 0) | 0;
					c = n(1634, (i - 128) | 0) | 0;
					b = n(832, (i - 128) | 0) | 0;
					d = n(400, (r - 128) | 0) | 0;
					h = n(2066, (r - 128) | 0) | 0;
					f = (((l + c) | 0) >> 10) | 0;
					o = (((((l - b) | 0) - d) | 0) >> 10) | 0;
					s = (((l + h) | 0) >> 10) | 0;
					if ((((f & 255) | 0) != (f | 0)) | 0) {
						f = t(255, a(0, f | 0) | 0) | 0;
					}
					if ((((o & 255) | 0) != (o | 0)) | 0) {
						o = t(255, a(0, o | 0) | 0) | 0;
					}
					if ((((s & 255) | 0) != (s | 0)) | 0) {
						s = t(255, a(0, s | 0) | 0) | 0;
					}
					u = 255;
					u = (u << 8) | 0;
					u = (u + s) | 0;
					u = (u << 8) | 0;
					u = (u + o) | 0;
					u = (u << 8) | 0;
					u = (u + f) | 0;
					return u | 0;
				}
				return { init: B, doit: A };
			}
			var getModule = function (
					_broadwayOnHeadersDecoded,
					_broadwayOnPictureDecoded
				) {
					function d(e) {
						throw e;
					}
					function n() {
						return function () {};
					}
					function ha(e) {
						eval.call(k, e);
					}
					function w(e, r) {
						e || A("Assertion failed: " + r);
					}
					function na(a) {
						var b = p["_" + a];
						if (!b)
							try {
								b = eval("_" + a);
							} catch (e) {}
						return (
							w(
								b,
								"Cannot call unknown function " +
									a +
									" (perhaps LLVM optimizations or closure removed it?)"
							),
							b
						);
					}
					function sa(e, r, i) {
						switch (
							((i = i || "i8"),
							"*" === i.charAt(i.length - 1) && (i = "i32"),
							i)
						) {
							case "i1":
								I[e >> 0] = r;
								break;
							case "i8":
								I[e >> 0] = r;
								break;
							case "i16":
								J[e >> 1] = r;
								break;
							case "i32":
								K[e >> 2] = r;
								break;
							case "i64":
								(ma = [
									r >>> 0,
									((la = r),
									1 <= +ta(la)
										? 0 < la
											? (0 | va(+wa(la / 4294967296), 4294967295)) >>> 0
											: ~~+xa((la - +(~~la >>> 0)) / 4294967296) >>> 0
										: 0),
								]),
									(K[e >> 2] = ma[0]),
									(K[(e + 4) >> 2] = ma[1]);
								break;
							case "float":
								ya[e >> 2] = r;
								break;
							case "double":
								za[e >> 3] = r;
								break;
							default:
								A("invalid type for setValue: " + i);
						}
					}
					function Aa(e, r) {
						switch (
							((r = r || "i8"),
							"*" === r.charAt(r.length - 1) && (r = "i32"),
							r)
						) {
							case "i1":
								return I[e >> 0];
							case "i8":
								return I[e >> 0];
							case "i16":
								return J[e >> 1];
							case "i32":
								return K[e >> 2];
							case "i64":
								return K[e >> 2];
							case "float":
								return ya[e >> 2];
							case "double":
								return za[e >> 3];
							default:
								A("invalid type for setValue: " + r);
						}
						return k;
					}
					function M(e, r, n, t) {
						var a, f;
						"number" == typeof e
							? ((a = i), (f = e))
							: ((a = m), (f = e.length));
						var o = "string" == typeof r ? r : k,
							n =
								n == Ba
									? t
									: [Ca, z.pb, z.Ec, z.bb][n === g ? L : n](
											Math.max(f, o ? 1 : r.length)
									  );
						if (a) {
							for (t = n, w(0 == (3 & n)), e = n + (f & -4); t < e; t += 4)
								K[t >> 2] = 0;
							for (e = n + f; t < e; ) I[t++ >> 0] = 0;
							return n;
						}
						if ("i8" === o)
							return (
								e.subarray || e.slice
									? N.set(e, n)
									: N.set(new Uint8Array(e), n),
								n
							);
						for (var s, u, t = 0; t < f; ) {
							var l = e[t];
							"function" == typeof l && (l = z.sg(l)),
								(a = o || r[t]),
								0 === a
									? t++
									: ("i64" == a && (a = "i32"),
									  sa(n + t, l, a),
									  u !== a && ((s = z.oc(a)), (u = a)),
									  (t += s));
						}
						return n;
					}
					function ka(e, r) {
						if (0 === r || !e) return "";
						for (var n, t = m, a = 0; ; ) {
							if (((n = N[(e + a) >> 0]), 128 <= n)) t = i;
							else if (0 == n && !r) break;
							if ((a++, r && a == r)) break;
						}
						r || (r = a);
						var f = "";
						if (!t) {
							for (; 0 < r; )
								(n = String.fromCharCode.apply(
									String,
									N.subarray(e, e + Math.min(r, 1024))
								)),
									(f = f ? f + n : n),
									(e += 1024),
									(r -= 1024);
							return f;
						}
						for (t = new z.Da(), a = 0; a < r; a++)
							(n = N[(e + a) >> 0]), (f += t.nb(n));
						return f;
					}
					function Da(e) {
						function r(n, t, a) {
							var f,
								t = t || 1 / 0,
								c = "",
								b = [];
							if ("N" === e[o]) {
								for (o++, "K" === e[o] && o++, f = []; "E" !== e[o]; )
									if ("S" === e[o]) {
										o++;
										var h = e.indexOf("_", o);
										f.push(u[e.substring(o, h) || 0] || "?"), (o = h + 1);
									} else if ("C" === e[o]) f.push(f[f.length - 1]), (o += 2);
									else {
										var h = parseInt(e.substr(o)),
											p = h.toString().length;
										if (!h || !p) {
											o--;
											break;
										}
										var k = e.substr(o + p, h);
										f.push(k), u.push(k), (o += p + h);
									}
								if ((o++, (f = f.join("::")), t--, 0 === t)) return n ? [f] : f;
							} else
								("K" === e[o] || (l && "L" === e[o])) && o++,
									(h = parseInt(e.substr(o))) &&
										((p = h.toString().length),
										(f = e.substr(o + p, h)),
										(o += p + h));
							(l = m),
								"I" === e[o]
									? (o++,
									  (h = r(i)),
									  (p = r(i, 1, i)),
									  (c += p[0] + " " + f + "<" + h.join(", ") + ">"))
									: (c = f);
							e: for (; o < e.length && 0 < t--; )
								if (((f = e[o++]), f in s)) b.push(s[f]);
								else
									switch (f) {
										case "P":
											b.push(r(i, 1, i)[0] + "*");
											break;
										case "R":
											b.push(r(i, 1, i)[0] + "&");
											break;
										case "L":
											o++,
												(h = e.indexOf("E", o) - o),
												b.push(e.substr(o, h)),
												(o += h + 2);
											break;
										case "A":
											(h = parseInt(e.substr(o))),
												(o += h.toString().length),
												"_" !== e[o] && d("?"),
												o++,
												b.push(r(i, 1, i)[0] + " [" + h + "]");
											break;
										case "E":
											break e;
										default:
											c += "?" + f;
											break e;
									}
							return (
								!a && 1 === b.length && "void" === b[0] && (b = []),
								n ? (c && b.push(c + "?"), b) : c + ("(" + b.join(", ") + ")")
							);
						}
						var n = !!p.___cxa_demangle;
						if (n)
							try {
								var t = Ca(e.length);
								ra(e.substr(1), t);
								var a = Ca(4),
									f = p.___cxa_demangle(t, 0, 0, a);
								if (0 === Aa(a, "i32") && f) return ka(f);
							} catch (e) {
							} finally {
								t && Ea(t), a && Ea(a), f && Ea(f);
							}
						var o = 3,
							s = {
								v: "void",
								b: "bool",
								c: "char",
								s: "short",
								i: "int",
								l: "long",
								f: "float",
								d: "double",
								w: "wchar_t",
								a: "signed char",
								h: "unsigned char",
								t: "unsigned short",
								j: "unsigned int",
								m: "unsigned long",
								x: "long long",
								y: "unsigned long long",
								z: "...",
							},
							u = [],
							l = i,
							t = e;
						try {
							if ("Object._main" == e || "_main" == e) return "main()";
							if (
								("number" == typeof e && (e = ka(e)),
								"_" !== e[0] || "_" !== e[1] || "Z" !== e[2])
							)
								return e;
							switch (e[3]) {
								case "n":
									return "operator new()";
								case "d":
									return "operator delete()";
							}
							t = r();
						} catch (e) {
							t += "?";
						}
						return (
							0 <= t.indexOf("?") &&
								!n &&
								z.Aa(
									"warning: a problem occurred in builtin C++ name demangling; build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling"
								),
							t
						);
					}
					function Fa() {
						var e;
						e: {
							if (((e = Error()), !e.stack)) {
								try {
									d(Error(0));
								} catch (r) {
									e = r;
								}
								if (!e.stack) {
									e = "(no stack trace available)";
									break e;
								}
							}
							e = e.stack.toString();
						}
						return e.replace(/__Z[\w\d_]+/g, function (e) {
							var r = Da(e);
							return e === r ? e : e + " [" + r + "]";
						});
					}
					function Na(e) {
						for (; 0 < e.length; ) {
							var r = e.shift();
							if ("function" == typeof r) r();
							else {
								var i = r.ja;
								"number" == typeof i
									? r.Xa === g
										? z.Fa("v", i)
										: z.Fa("vi", i, [r.Xa])
									: i(r.Xa === g ? k : r.Xa);
							}
						}
					}
					function Ta(e) {
						Oa.unshift(e);
					}
					function Ua(e) {
						Ra.unshift(e);
					}
					function Va(e, r, i) {
						return (
							(e = new z.Da().Ac(e)), i && (e.length = i), r || e.push(0), e
						);
					}
					function ra(e, r, i) {
						for (e = Va(e, i), i = 0; i < e.length; )
							(I[(r + i) >> 0] = e[i]), (i += 1);
					}
					function qa(e, r) {
						for (var i = 0; i < e.length; i++) I[(r + i) >> 0] = e[i];
					}
					function Ya() {
						S++, p.monitorRunDependencies && p.monitorRunDependencies(S);
					}
					function Za() {
						if (
							(S--,
							p.monitorRunDependencies && p.monitorRunDependencies(S),
							0 == S && (Wa !== k && (clearInterval(Wa), (Wa = k)), Xa))
						) {
							var e = Xa;
							(Xa = k), e();
						}
					}
					function V(e) {
						return (K[bb >> 2] = e);
					}
					function cb(e, r) {
						for (var i = 0, n = e.length - 1; 0 <= n; n--) {
							var t = e[n];
							"." === t
								? e.splice(n, 1)
								: ".." === t
								? (e.splice(n, 1), i++)
								: i && (e.splice(n, 1), i--);
						}
						if (r) for (; i--; i) e.unshift("..");
						return e;
					}
					function db(e) {
						var r = "/" === e.charAt(0),
							i = "/" === e.substr(-1),
							e = cb(
								e.split("/").filter(function (e) {
									return !!e;
								}),
								!r
							).join("/");
						return (
							!e && !r && (e = "."), e && i && (e += "/"), (r ? "/" : "") + e
						);
					}
					function eb(e) {
						var r =
								/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
									.exec(e)
									.slice(1),
							e = r[0],
							r = r[1];
						return e || r ? (r && (r = r.substr(0, r.length - 1)), e + r) : ".";
					}
					function W(e) {
						if ("/" === e) return "/";
						var r = e.lastIndexOf("/");
						return -1 === r ? e : e.substr(r + 1);
					}
					function fb() {
						var e = Array.prototype.slice.call(arguments, 0);
						return db(e.join("/"));
					}
					function X(e, r) {
						return db(e + "/" + r);
					}
					function gb() {
						for (
							var e = "", r = m, i = arguments.length - 1;
							-1 <= i && !r;
							i--
						) {
							if (
								((r = 0 <= i ? arguments[i] : B.yb()),
								"string" != typeof r &&
									d(new TypeError("Arguments to path.resolve must be strings")),
								!r)
							)
								return "";
							(e = r + "/" + e), (r = "/" === r.charAt(0));
						}
						return (
							(e = cb(
								e.split("/").filter(function (e) {
									return !!e;
								}),
								!r
							).join("/")),
							(r ? "/" : "") + e || "."
						);
					}
					function hb(e, r) {
						function i(e) {
							for (var r = 0; r < e.length && "" === e[r]; r++);
							for (var i = e.length - 1; 0 <= i && "" === e[i]; i--);
							return r > i ? [] : e.slice(r, i - r + 1);
						}
						for (
							var e = gb(e).substr(1),
								r = gb(r).substr(1),
								n = i(e.split("/")),
								t = i(r.split("/")),
								a = Math.min(n.length, t.length),
								f = a,
								o = 0;
							o < a;
							o++
						)
							if (n[o] !== t[o]) {
								f = o;
								break;
							}
						for (a = [], o = f; o < n.length; o++) a.push("..");
						return (a = a.concat(t.slice(f))), a.join("/");
					}
					function jb(e, r) {
						(ib[e] = { input: [], K: [], sa: r }), B.Ob(e, kb);
					}
					function zb() {
						d("TODO");
					}
					function Ab(e, r, i) {
						if (((e = B.qa(e)), !e)) return V(U.V), -1;
						try {
							return B.write(e, I, r, i);
						} catch (e) {
							return B.sc(e), -1;
						}
					}
					function Cb(e) {
						return (e = B.pc(e)), e ? e.C : -1;
					}
					function Db(e, r) {
						return Ab(Cb(r), e, Bb(e));
					}
					function Eb(e, r) {
						var n;
						return (
							(n = 255 & e),
							(n = 0 <= n ? n : Math.pow(2, g) + n),
							(I[Eb.Cc >> 0] = n),
							-1 == Ab(Cb(r), Eb.Cc, 1)
								? ((n = B.pc(r)) && (n.error = i), -1)
								: n
						);
					}
					function Fb(e) {
						Fb.$c ||
							((E = (E + 4095) & -4096),
							(Fb.$c = i),
							w(z.bb),
							(Fb.Wc = z.bb),
							(z.bb = function () {
								A("cannot dynamically allocate, sbrk now has control");
							}));
						var r = E;
						return 0 != e && Fb.Wc(e), r;
					}
					function Hb(e, r, i) {
						window._broadwayOnPictureDecoded(e, r, i);
					}
					function Ib() {
						window._broadwayOnHeadersDecoded();
					}
					function Jb(e, r) {
						return (
							(Kb = e),
							(Lb = r),
							Mb
								? (0 == e
										? ((Nb = function () {
												setTimeout(Ob, r);
										  }),
										  (Pb = "timeout"))
										: 1 == e &&
										  ((Nb = function () {
												Qb(Ob);
										  }),
										  (Pb = "rAF")),
								  0)
								: 1
						);
					}
					function Rb(e, r, n, t) {
						(p.noExitRuntime = i),
							w(
								!Mb,
								"emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."
							),
							(Mb = e),
							(Sb = t);
						var a = Tb;
						(Ob = function () {
							if (!H)
								if (0 < Ub.length) {
									var r = Date.now(),
										i = Ub.shift();
									if ((i.ja(i.Xa), Vb)) {
										var n = Vb,
											f = 0 == n % 1 ? n - 1 : Math.floor(n);
										Vb = i.dg ? f : (8 * n + (f + 0.5)) / 9;
									}
									console.log(
										'main loop blocker "' +
											i.name +
											'" took ' +
											(Date.now() - r) +
											" ms"
									),
										p.setStatus &&
											((r = p.statusMessage || "Please wait..."),
											(i = Vb),
											(n = Wb.ig),
											i
												? i < n
													? p.setStatus(r + " (" + (n - i) + "/" + n + ")")
													: p.setStatus(r)
												: p.setStatus("")),
										setTimeout(Ob, 0);
								} else if (!(a < Tb))
									if (((Xb = (Xb + 1) | 0), 1 == Kb && 1 < Lb && 0 != Xb % Lb))
										Nb();
									else {
										"timeout" === Pb &&
											p.fg &&
											(p.fa(
												"Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!"
											),
											(Pb = ""));
										e: if (!(H || (p.preMainLoop && p.preMainLoop() === m))) {
											try {
												"undefined" != typeof t
													? z.Fa("vi", e, [t])
													: z.Fa("v", e);
											} catch (e) {
												if (e instanceof ia) break e;
												e &&
													"object" == typeof e &&
													e.stack &&
													p.fa("exception thrown: " + [e, e.stack]),
													d(e);
											}
											p.postMainLoop && p.postMainLoop();
										}
										a < Tb ||
											("object" == typeof SDL &&
												SDL.ac &&
												SDL.ac.Pd &&
												SDL.ac.Pd(),
											Nb());
									}
						}),
							r && 0 < r ? Jb(0, 1e3 / r) : Jb(1, 1),
							Nb(),
							n && d("SimulateInfiniteLoop");
					}
					function cc(e) {
						var r = Date.now();
						if (0 === bc) bc = r + 1e3 / 60;
						else for (; r + 2 >= bc; ) bc += 1e3 / 60;
						(r = Math.max(bc - r, 0)), setTimeout(e, r);
					}
					function Qb(e) {
						"undefined" == typeof window
							? cc(e)
							: (window.requestAnimationFrame ||
									(window.requestAnimationFrame =
										window.requestAnimationFrame ||
										window.mozRequestAnimationFrame ||
										window.webkitRequestAnimationFrame ||
										window.msRequestAnimationFrame ||
										window.oRequestAnimationFrame ||
										cc),
							  window.requestAnimationFrame(e));
					}
					function xb(e) {
						return {
							jpg: "image/jpeg",
							jpeg: "image/jpeg",
							png: "image/png",
							bmp: "image/bmp",
							ogg: "audio/ogg",
							wav: "audio/wav",
							mp3: "audio/mpeg",
						}[e.substr(e.lastIndexOf(".") + 1)];
					}
					function yb(e, r, n) {
						function t() {
							n ? n() : d('Loading data file "' + e + '" failed.');
						}
						var a = new XMLHttpRequest();
						a.open("GET", e, i),
							(a.responseType = "arraybuffer"),
							(a.onload = function () {
								if (200 == a.status || (0 == a.status && a.response)) {
									var i = a.response;
									w(
										i,
										'Loading data file "' + e + '" failed (no arrayBuffer).'
									),
										r(new Uint8Array(i)),
										Za();
								} else t();
							}),
							(a.onerror = t),
							a.send(k),
							Ya();
					}
					function ec() {
						var e = p.canvas;
						dc.forEach(function (r) {
							r(e.width, e.height);
						});
					}
					function fc(e, r, i) {
						r && i ? ((e.ae = r), (e.Ad = i)) : ((r = e.ae), (i = e.Ad));
						var n = r,
							t = i;
						if (
							(p.forcedAspectRatio &&
								0 < p.forcedAspectRatio &&
								(n / t < p.forcedAspectRatio
									? (n = Math.round(t * p.forcedAspectRatio))
									: (t = Math.round(n / p.forcedAspectRatio))),
							(document.webkitFullScreenElement ||
								document.webkitFullscreenElement ||
								document.mozFullScreenElement ||
								document.mozFullscreenElement ||
								document.fullScreenElement ||
								document.fullscreenElement ||
								document.msFullScreenElement ||
								document.msFullscreenElement ||
								document.webkitCurrentFullScreenElement) === e.parentNode &&
								"undefined" != typeof screen)
						)
							var a = Math.min(screen.width / n, screen.height / t),
								n = Math.round(n * a),
								t = Math.round(t * a);
						ac
							? (e.width != n && (e.width = n),
							  e.height != t && (e.height = t),
							  "undefined" != typeof e.style &&
									(e.style.removeProperty("width"),
									e.style.removeProperty("height")))
							: (e.width != r && (e.width = r),
							  e.height != i && (e.height = i),
							  "undefined" != typeof e.style &&
									(n != r || t != i
										? (e.style.setProperty("width", n + "px", "important"),
										  e.style.setProperty("height", t + "px", "important"))
										: (e.style.removeProperty("width"),
										  e.style.removeProperty("height"))));
					}
					function ia(e) {
						(this.name = "ExitStatus"),
							(this.message = "Program terminated with exit(" + e + ")"),
							(this.status = e);
					}
					function mc(e) {
						function r() {
							if (!p.calledRun && ((p.calledRun = i), !H)) {
								if (
									(Sa || ((Sa = i), Na(R)),
									Na(Pa),
									ba &&
										jc !== k &&
										p.fa("pre-main prep time: " + (Date.now() - jc) + " ms"),
									p.onRuntimeInitialized && p.onRuntimeInitialized(),
									p._main && lc && p.callMain(e),
									p.postRun)
								)
									for (
										"function" == typeof p.postRun && (p.postRun = [p.postRun]);
										p.postRun.length;

									)
										Ua(p.postRun.shift());
								Na(Ra);
							}
						}
						if (
							((e = e || p.arguments), jc === k && (jc = Date.now()), !(0 < S))
						) {
							if (p.preRun)
								for (
									"function" == typeof p.preRun && (p.preRun = [p.preRun]);
									p.preRun.length;

								)
									Ta(p.preRun.shift());
							Na(Oa),
								!(0 < S) &&
									!p.calledRun &&
									(p.setStatus
										? (p.setStatus("Running..."),
										  setTimeout(function () {
												setTimeout(function () {
													p.setStatus("");
												}, 1),
													r();
										  }, 1))
										: r());
						}
					}
					function nc(e) {
						p.noExitRuntime ||
							((H = i),
							(y = ic),
							Na(Qa),
							t
								? (process.stdout.once("drain", function () {
										process.exit(e);
								  }),
								  console.log(" "),
								  setTimeout(function () {
										process.exit(e);
								  }, 500))
								: da && "function" == typeof quit && quit(e),
							d(new ia(e)));
					}
					function A(e) {
						e && (p.print(e), p.fa(e)),
							(H = i),
							d(
								"abort() at " +
									Fa() +
									"\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information."
							);
					}
					var window = this;
					(window._broadwayOnHeadersDecoded = _broadwayOnHeadersDecoded),
						(window._broadwayOnPictureDecoded = _broadwayOnPictureDecoded);
					var Module = {
							print: function (e) {
								console.log("stdout: " + e);
							},
							printErr: function (e) {
								console.log("stderr: " + e);
							},
						},
						g = void 0,
						i = !0,
						k = null,
						m = !1,
						p;
					p ||
						(p = eval(
							"(function() { try { return Module || {} } catch(e) { return {} } })()"
						));
					var aa = {},
						r;
					for (r in p) p.hasOwnProperty(r) && (aa[r] = p[r]);
					var t = "object" == typeof process && !1,
						ba = "object" == typeof window,
						ca = "function" == typeof importScripts,
						da = !ba && !t && !ca;
					if (t) {
						p.print ||
							(p.print = function (e) {
								process.stdout.write(e + "\n");
							}),
							p.printErr ||
								(p.printErr = function (e) {
									process.stderr.write(e + "\n");
								});
						var fa = null("fs"),
							ga = null("path");
						(p.read = function (e, r) {
							var e = ga.normalize(e),
								i = fa.readFileSync(e);
							return (
								!i &&
									e != ga.resolve(e) &&
									((e = path.join(__dirname, "..", "src", e)),
									(i = fa.readFileSync(e))),
								i && !r && (i = i.toString()),
								i
							);
						}),
							(p.readBinary = function (e) {
								return p.read(e, i);
							}),
							(p.load = function (e) {
								ha(read(e));
							}),
							(p.thisProgram =
								1 < process.argv.length
									? process.argv[1].replace(/\\/g, "/")
									: "unknown-program"),
							(p.arguments = process.argv.slice(2)),
							"undefined" != typeof module && (module.exports = p),
							process.on("uncaughtException", function (e) {
								e instanceof ia || d(e);
							});
					} else
						da
							? (p.print || (p.print = print),
							  "undefined" != typeof printErr && (p.printErr = printErr),
							  (p.read =
									"undefined" != typeof read
										? read
										: function () {
												d("no read() available (jsc?)");
										  }),
							  (p.readBinary = function (e) {
									return "function" == typeof readbuffer
										? new Uint8Array(readbuffer(e))
										: ((e = read(e, "binary")), w("object" == typeof e), e);
							  }),
							  "undefined" != typeof scriptArgs
									? (p.arguments = scriptArgs)
									: "undefined" != typeof arguments &&
									  (p.arguments = arguments),
							  (this.Module = p),
							  eval(
									"if (typeof gc === 'function' && gc.toString().indexOf('[native code]') > 0) var gc = undefined"
							  ))
							: ba || ca
							? ((p.read = function (e) {
									var r = new XMLHttpRequest();
									return r.open("GET", e, m), r.send(k), r.responseText;
							  }),
							  "undefined" != typeof arguments && (p.arguments = arguments),
							  "undefined" != typeof console
									? (p.print ||
											(p.print = function (e) {
												console.log(e);
											}),
									  p.printErr ||
											(p.printErr = function (e) {
												console.log(e);
											}))
									: p.print || (p.print = n()),
							  ba ? (window.Module = p) : (p.load = importScripts))
							: d("Unknown runtime environment. Where are we?");
					!p.load &&
						p.read &&
						(p.load = function (e) {
							ha(p.read(e));
						}),
						p.print || (p.print = n()),
						p.printErr || (p.printErr = p.print),
						p.arguments || (p.arguments = []),
						p.thisProgram || (p.thisProgram = "./this.program"),
						(p.print = p.print),
						(p.fa = p.printErr),
						(p.preRun = []),
						(p.postRun = []);
					for (r in aa) aa.hasOwnProperty(r) && (p[r] = aa[r]);
					var z = {
						Yd: function (e) {
							ja = e;
						},
						xd: function () {
							return ja;
						},
						Tb: function () {
							return y;
						},
						Sb: function (e) {
							y = e;
						},
						oc: function (e) {
							switch (e) {
								case "i1":
								case "i8":
									return 1;
								case "i16":
									return 2;
								case "i32":
									return 4;
								case "i64":
									return 8;
								case "float":
									return 4;
								case "double":
									return 8;
								default:
									return "*" === e[e.length - 1]
										? z.ia
										: "i" === e[0]
										? ((e = parseInt(e.substr(1))), w(0 === e % 8), e / 8)
										: 0;
							}
						},
						vd: function (e) {
							return Math.max(z.oc(e), z.ia);
						},
						Qf: 16,
						ng: function (e, r, i) {
							return i || ("i64" != e && "double" != e)
								? e
									? Math.min(r || (e ? z.vd(e) : 0), z.ia)
									: Math.min(r, 8)
								: 8;
						},
						Fa: function (e, r, i) {
							return i && i.length
								? (i.splice || (i = Array.prototype.slice.call(i)),
								  i.splice(0, 0, r),
								  p["dynCall_" + e].apply(k, i))
								: p["dynCall_" + e].call(k, r);
						},
						eb: [],
						Vc: function (e) {
							for (var r = 0; r < z.eb.length; r++)
								if (!z.eb[r]) return (z.eb[r] = e), 2 * (1 + r);
							d(
								"Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS."
							);
						},
						Sd: function (e) {
							z.eb[(e - 2) / 2] = k;
						},
						og: function (a, b) {
							z.wb || (z.wb = {});
							var c = z.wb[a];
							if (c) return c;
							for (var c = [], e = 0; e < b; e++)
								c.push(String.fromCharCode(36) + e);
							(e = ka(a)),
								'"' === e[0] &&
									(e.indexOf('"', 1) === e.length - 1
										? (e = e.substr(1, e.length - 2))
										: A(
												"invalid EM_ASM input |" +
													e +
													"|. Please use EM_ASM(..code..) (no quotes) or EM_ASM({ ..code($0).. }, input) (to input values)"
										  ));
							try {
								var f = eval(
									"(function(Module, FS) { return function(" +
										c.join(",") +
										"){ " +
										e +
										" } })"
								)(p, "undefined" != typeof B ? B : k);
							} catch (r) {
								p.fa(
									"error in executing inline EM_ASM code: " +
										r +
										" on: \n\n" +
										e +
										"\n\nwith args |" +
										c +
										"| (make sure to use the right one out of EM_ASM, EM_ASM_ARGS, etc.)"
								),
									d(r);
							}
							return (z.wb[a] = f);
						},
						Aa: function (e) {
							z.Aa.Rb || (z.Aa.Rb = {}),
								z.Aa.Rb[e] || ((z.Aa.Rb[e] = 1), p.fa(e));
						},
						Cb: {},
						rg: function (e, r) {
							w(r), z.Cb[r] || (z.Cb[r] = {});
							var i = z.Cb[r];
							return (
								i[e] ||
									(i[e] = function () {
										return z.Fa(r, e, arguments);
									}),
								i[e]
							);
						},
						Da: function () {
							var e = [],
								r = 0;
							(this.nb = function (i) {
								if (((i &= 255), 0 == e.length))
									return 0 == (128 & i)
										? String.fromCharCode(i)
										: (e.push(i),
										  (r = 192 == (224 & i) ? 1 : 224 == (240 & i) ? 2 : 3),
										  "");
								if (r && (e.push(i), r--, 0 < r)) return "";
								var i = e[0],
									n = e[1],
									t = e[2],
									a = e[3];
								return (
									2 == e.length
										? (i = String.fromCharCode(((31 & i) << 6) | (63 & n)))
										: 3 == e.length
										? (i = String.fromCharCode(
												((15 & i) << 12) | ((63 & n) << 6) | (63 & t)
										  ))
										: ((i =
												((7 & i) << 18) |
												((63 & n) << 12) |
												((63 & t) << 6) |
												(63 & a)),
										  (i = String.fromCharCode(
												(((i - 65536) / 1024) | 0) + 55296,
												((i - 65536) % 1024) + 56320
										  ))),
									(e.length = 0),
									i
								);
							}),
								(this.Ac = function (e) {
									for (
										var e = unescape(encodeURIComponent(e)), r = [], i = 0;
										i < e.length;
										i++
									)
										r.push(e.charCodeAt(i));
									return r;
								});
						},
						pg: function () {
							d(
								"You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work"
							);
						},
						pb: function (e) {
							var r = y;
							return (y = (y + e) | 0), (y = (y + 15) & -16), r;
						},
						Ec: function (e) {
							var r = D;
							return (D = (D + e) | 0), (D = (D + 15) & -16), r;
						},
						bb: function (e) {
							var r = E;
							return (
								(E = (E + e) | 0),
								(E = (E + 15) & -16),
								E >= F &&
									A(
										"Cannot enlarge memory arrays. Either (1) compile with -s TOTAL_MEMORY=X with X higher than the current value " +
											F +
											", (2) compile with ALLOW_MEMORY_GROWTH which adjusts the size at runtime but prevents some optimizations, or (3) set Module.TOTAL_MEMORY before the program runs."
									),
								r
							);
						},
						ub: function (e, r) {
							return Math.ceil(e / (r ? r : 16)) * (r ? r : 16);
						},
						Fg: function (e, r, i) {
							return i
								? +(e >>> 0) + 4294967296 * +(r >>> 0)
								: +(e >>> 0) + 4294967296 * +(0 | r);
						},
						Pc: 8,
						ia: 4,
						Rf: 0,
					};
					(p.Runtime = z), (z.addFunction = z.Vc), (z.removeFunction = z.Sd);
					var H = m,
						la,
						ma,
						ja,
						oa,
						pa;
					!(function () {
						function a(r) {
							return (
								(r = r.toString().match(e).slice(1)),
								{ arguments: r[0], body: r[1], returnValue: r[2] }
							);
						}
						var b = {
								stackSave: function () {
									z.Tb();
								},
								stackRestore: function () {
									z.Sb();
								},
								arrayToC: function (e) {
									var r = z.pb(e.length);
									return qa(e, r), r;
								},
								stringToC: function (e) {
									var r = 0;
									return (
										e !== k &&
											e !== g &&
											0 !== e &&
											((r = z.pb((e.length << 2) + 1)), ra(e, r)),
										r
									);
								},
							},
							c = { string: b.stringToC, array: b.arrayToC };
						pa = function (e, r, i, n) {
							var t = na(e),
								a = [],
								e = 0;
							if (n)
								for (var f = 0; f < n.length; f++) {
									var o = c[i[f]];
									o
										? (0 === e && (e = z.Tb()), (a[f] = o(n[f])))
										: (a[f] = n[f]);
								}
							return (
								(i = t.apply(k, a)),
								"string" === r && (i = ka(i)),
								0 !== e && z.Sb(e),
								i
							);
						};
						var e =
								/^function\s*\(([^)]*)\)\s*{\s*([^*]*?)[\s;]*(?:return\s*(.*?)[;\s]*)?}$/,
							f = {},
							h;
						for (h in b) b.hasOwnProperty(h) && (f[h] = a(b[h]));
						oa = function (b, c, e) {
							var e = e || [],
								h = na(b),
								b = e.every(function (e) {
									return "number" === e;
								}),
								x = "string" !== c;
							if (x && b) return h;
							var s = e.map(function (e, r) {
									return "$" + r;
								}),
								c = "(function(" + s.join(",") + ") {",
								v = e.length;
							if (!b)
								for (
									var c = c + ("var stack = " + f.stackSave.body + ";"), G = 0;
									G < v;
									G++
								) {
									var ua = s[G],
										ea = e[G];
									"number" !== ea &&
										((ea = f[ea + "ToC"]),
										(c += "var " + ea.arguments + " = " + ua + ";"),
										(c += ea.body + ";"),
										(c += ua + "=" + ea.returnValue + ";"));
								}
							return (
								(e = a(function () {
									return h;
								}).returnValue),
								(c += "var ret = " + e + "(" + s.join(",") + ");"),
								x ||
									((e = a(function () {
										return ka;
									}).returnValue),
									(c += "ret = " + e + "(ret);")),
								b || (c += f.stackRestore.body.replace("()", "(stack)") + ";"),
								eval(c + "return ret})")
							);
						};
					})(),
						(p.cwrap = oa),
						(p.ccall = pa),
						(p.setValue = sa),
						(p.getValue = Aa);
					var L = 2,
						Ba = 4;
					(p.ALLOC_NORMAL = 0),
						(p.ALLOC_STACK = 1),
						(p.ALLOC_STATIC = L),
						(p.ALLOC_DYNAMIC = 3),
						(p.ALLOC_NONE = Ba),
						(p.allocate = M),
						(p.Pointer_stringify = ka),
						(p.UTF16ToString = function (e) {
							for (var r = 0, i = ""; ; ) {
								var n = J[(e + 2 * r) >> 1];
								if (0 == n) return i;
								++r, (i += String.fromCharCode(n));
							}
						}),
						(p.stringToUTF16 = function (e, r) {
							for (var i = 0; i < e.length; ++i)
								J[(r + 2 * i) >> 1] = e.charCodeAt(i);
							J[(r + 2 * e.length) >> 1] = 0;
						}),
						(p.UTF32ToString = function (e) {
							for (var r = 0, i = ""; ; ) {
								var n = K[(e + 4 * r) >> 2];
								if (0 == n) return i;
								++r,
									65536 <= n
										? ((n -= 65536),
										  (i += String.fromCharCode(
												55296 | (n >> 10),
												56320 | (1023 & n)
										  )))
										: (i += String.fromCharCode(n));
							}
						}),
						(p.stringToUTF32 = function (e, r) {
							for (var i = 0, n = 0; n < e.length; ++n) {
								var t = e.charCodeAt(n);
								if (55296 <= t && 57343 >= t)
									var a = e.charCodeAt(++n),
										t = (65536 + ((1023 & t) << 10)) | (1023 & a);
								(K[(r + 4 * i) >> 2] = t), ++i;
							}
							K[(r + 4 * i) >> 2] = 0;
						}),
						(p.stackTrace = function () {
							return Fa();
						});
					for (
						var I,
							N,
							J,
							Ga,
							K,
							Ha,
							ya,
							za,
							Ia = 0,
							D = 0,
							Ja = 0,
							y = 0,
							Ka = 0,
							La = 0,
							E = 0,
							Ma = p.TOTAL_STACK || 5242880,
							F = p.TOTAL_MEMORY || 52428800,
							O = 65536;
						O < F || O < 2 * Ma;

					)
						O = 16777216 > O ? 2 * O : O + 16777216;
					O !== F &&
						(p.fa(
							"increasing TOTAL_MEMORY to " +
								O +
								" to be compliant with the asm.js spec"
						),
						(F = O)),
						w(
							"undefined" != typeof Int32Array &&
								"undefined" != typeof Float64Array &&
								!!new Int32Array(1).subarray &&
								!!new Int32Array(1).set,
							"JS engine does not provide full typed array support"
						);
					var Q = new ArrayBuffer(F);
					(I = new Int8Array(Q)),
						(J = new Int16Array(Q)),
						(K = new Int32Array(Q)),
						(N = new Uint8Array(Q)),
						(Ga = new Uint16Array(Q)),
						(Ha = new Uint32Array(Q)),
						(ya = new Float32Array(Q)),
						(za = new Float64Array(Q)),
						(K[0] = 255),
						w(
							255 === N[0] && 0 === N[3],
							"Typed arrays 2 must be run on a little-endian system"
						),
						(p.HEAP = g),
						(p.buffer = Q),
						(p.HEAP8 = I),
						(p.HEAP16 = J),
						(p.HEAP32 = K),
						(p.HEAPU8 = N),
						(p.HEAPU16 = Ga),
						(p.HEAPU32 = Ha),
						(p.HEAPF32 = ya),
						(p.HEAPF64 = za);
					var Oa = [],
						R = [],
						Pa = [],
						Qa = [],
						Ra = [],
						Sa = m;
					(p.addOnPreRun = p.Xf = Ta),
						(p.addOnInit = p.Uf =
							function (e) {
								R.unshift(e);
							}),
						(p.addOnPreMain = p.Wf =
							function (e) {
								Pa.unshift(e);
							}),
						(p.addOnExit = p.Tf =
							function (e) {
								Qa.unshift(e);
							}),
						(p.addOnPostRun = p.Vf = Ua),
						(p.intArrayFromString = Va),
						(p.intArrayToString = function (e) {
							for (var r = [], i = 0; i < e.length; i++) {
								var n = e[i];
								255 < n && (n &= 255), r.push(String.fromCharCode(n));
							}
							return r.join("");
						}),
						(p.writeStringToMemory = ra),
						(p.writeArrayToMemory = qa),
						(p.writeAsciiToMemory = function (e, r, i) {
							for (var n = 0; n < e.length; n++)
								I[(r + n) >> 0] = e.charCodeAt(n);
							i || (I[(r + e.length) >> 0] = 0);
						}),
						(Math.imul && -5 === Math.imul(4294967295, 5)) ||
							(Math.imul = function (e, r) {
								var i = 65535 & e,
									n = 65535 & r;
								return (i * n + (((e >>> 16) * n + i * (r >>> 16)) << 16)) | 0;
							}),
						(Math.vg = Math.imul);
					var ta = Math.abs,
						xa = Math.ceil,
						wa = Math.floor,
						va = Math.min,
						S = 0,
						Wa = k,
						Xa = k;
					(p.addRunDependency = Ya),
						(p.removeRunDependency = Za),
						(p.preloadedImages = {}),
						(p.preloadedAudios = {});
					var T = k,
						Ia = 8,
						D = Ia + 7808;
					R.push(),
						M(
							[
								0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3,
								3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6,
								7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 0,
								1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3,
								4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0,
								1, 2, 3, 0, 0, 0, 0, 10, 0, 0, 0, 13, 0, 0, 0, 16, 0, 0, 0, 11,
								0, 0, 0, 14, 0, 0, 0, 18, 0, 0, 0, 13, 0, 0, 0, 16, 0, 0, 0, 20,
								0, 0, 0, 14, 0, 0, 0, 18, 0, 0, 0, 23, 0, 0, 0, 16, 0, 0, 0, 20,
								0, 0, 0, 25, 0, 0, 0, 18, 0, 0, 0, 23, 0, 0, 0, 29, 0, 0, 0, 0,
								0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 4, 0, 0, 0, 5, 0,
								0, 0, 6, 0, 0, 0, 7, 0, 0, 0, 8, 0, 0, 0, 9, 0, 0, 0, 10, 0, 0,
								0, 11, 0, 0, 0, 12, 0, 0, 0, 13, 0, 0, 0, 14, 0, 0, 0, 15, 0, 0,
								0, 16, 0, 0, 0, 17, 0, 0, 0, 18, 0, 0, 0, 19, 0, 0, 0, 20, 0, 0,
								0, 21, 0, 0, 0, 22, 0, 0, 0, 23, 0, 0, 0, 24, 0, 0, 0, 25, 0, 0,
								0, 26, 0, 0, 0, 27, 0, 0, 0, 28, 0, 0, 0, 29, 0, 0, 0, 29, 0, 0,
								0, 30, 0, 0, 0, 31, 0, 0, 0, 32, 0, 0, 0, 32, 0, 0, 0, 33, 0, 0,
								0, 34, 0, 0, 0, 34, 0, 0, 0, 35, 0, 0, 0, 35, 0, 0, 0, 36, 0, 0,
								0, 36, 0, 0, 0, 37, 0, 0, 0, 37, 0, 0, 0, 37, 0, 0, 0, 38, 0, 0,
								0, 38, 0, 0, 0, 38, 0, 0, 0, 39, 0, 0, 0, 39, 0, 0, 0, 39, 0, 0,
								0, 39, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0, 0, 8, 0, 0, 0,
								16, 0, 0, 0, 32, 0, 0, 0, 64, 0, 0, 0, 128, 0, 0, 0, 1, 0, 0, 0,
								1, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3,
								0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 4, 0, 0, 0, 5, 0,
								0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 6, 0, 0, 0, 7, 0, 0, 0, 8, 0, 0,
								0, 9, 0, 0, 0, 12, 0, 0, 0, 13, 0, 0, 0, 10, 0, 0, 0, 11, 0, 0,
								0, 14, 0, 0, 0, 15, 0, 0, 0, 47, 31, 15, 0, 23, 27, 29, 30, 7,
								11, 13, 14, 39, 43, 45, 46, 16, 3, 5, 10, 12, 19, 21, 26, 28,
								35, 37, 42, 44, 1, 2, 4, 8, 17, 18, 20, 24, 6, 9, 22, 25, 32,
								33, 34, 36, 40, 38, 41, 0, 16, 1, 2, 4, 8, 32, 3, 5, 10, 12, 15,
								47, 7, 11, 13, 14, 6, 9, 31, 35, 37, 42, 44, 33, 34, 36, 40, 39,
								43, 45, 46, 17, 18, 20, 24, 19, 21, 26, 28, 23, 27, 29, 30, 22,
								25, 38, 41, 17, 1, 0, 0, 0, 0, 0, 0, 34, 18, 1, 1, 0, 0, 0, 0,
								50, 34, 18, 2, 0, 0, 0, 0, 67, 51, 34, 34, 18, 18, 2, 2, 83, 67,
								51, 35, 18, 18, 2, 2, 19, 35, 67, 51, 99, 83, 2, 2, 0, 0, 101,
								85, 68, 68, 52, 52, 35, 35, 35, 35, 19, 19, 19, 19, 1, 1, 1, 1,
								1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 249, 233, 217, 200, 200,
								184, 184, 167, 167, 167, 167, 151, 151, 151, 151, 134, 134, 134,
								134, 134, 134, 134, 134, 118, 118, 118, 118, 118, 118, 118, 118,
								230, 214, 198, 182, 165, 165, 149, 149, 132, 132, 132, 132, 116,
								116, 116, 116, 100, 100, 100, 100, 84, 84, 84, 84, 67, 67, 67,
								67, 67, 67, 67, 67, 51, 51, 51, 51, 51, 51, 51, 51, 35, 35, 35,
								35, 35, 35, 35, 35, 19, 19, 19, 19, 19, 19, 19, 19, 3, 3, 3, 3,
								3, 3, 3, 3, 214, 182, 197, 197, 165, 165, 149, 149, 132, 132,
								132, 132, 84, 84, 84, 84, 68, 68, 68, 68, 4, 4, 4, 4, 115, 115,
								115, 115, 115, 115, 115, 115, 99, 99, 99, 99, 99, 99, 99, 99,
								51, 51, 51, 51, 51, 51, 51, 51, 35, 35, 35, 35, 35, 35, 35, 35,
								19, 19, 19, 19, 19, 19, 19, 19, 197, 181, 165, 5, 148, 148, 116,
								116, 52, 52, 36, 36, 131, 131, 131, 131, 99, 99, 99, 99, 83, 83,
								83, 83, 67, 67, 67, 67, 19, 19, 19, 19, 181, 149, 164, 164, 132,
								132, 36, 36, 20, 20, 4, 4, 115, 115, 115, 115, 99, 99, 99, 99,
								83, 83, 83, 83, 67, 67, 67, 67, 51, 51, 51, 51, 166, 6, 21, 21,
								132, 132, 132, 132, 147, 147, 147, 147, 147, 147, 147, 147, 115,
								115, 115, 115, 115, 115, 115, 115, 99, 99, 99, 99, 99, 99, 99,
								99, 83, 83, 83, 83, 83, 83, 83, 83, 67, 67, 67, 67, 67, 67, 67,
								67, 51, 51, 51, 51, 51, 51, 51, 51, 35, 35, 35, 35, 35, 35, 35,
								35, 150, 6, 21, 21, 116, 116, 116, 116, 131, 131, 131, 131, 131,
								131, 131, 131, 99, 99, 99, 99, 99, 99, 99, 99, 67, 67, 67, 67,
								67, 67, 67, 67, 51, 51, 51, 51, 51, 51, 51, 51, 35, 35, 35, 35,
								35, 35, 35, 35, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82,
								82, 82, 82, 82, 134, 6, 37, 37, 20, 20, 20, 20, 115, 115, 115,
								115, 115, 115, 115, 115, 99, 99, 99, 99, 99, 99, 99, 99, 51, 51,
								51, 51, 51, 51, 51, 51, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82,
								82, 82, 82, 82, 82, 82, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66,
								66, 66, 66, 66, 66, 66, 22, 6, 117, 117, 36, 36, 36, 36, 83, 83,
								83, 83, 83, 83, 83, 83, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98,
								98, 98, 98, 98, 98, 98, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66,
								66, 66, 66, 66, 66, 66, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
								50, 50, 50, 50, 50, 50, 21, 5, 100, 100, 35, 35, 35, 35, 82, 82,
								82, 82, 82, 82, 82, 82, 66, 66, 66, 66, 66, 66, 66, 66, 50, 50,
								50, 50, 50, 50, 50, 50, 4, 20, 35, 35, 51, 51, 83, 83, 65, 65,
								65, 65, 65, 65, 65, 65, 4, 20, 67, 67, 34, 34, 34, 34, 49, 49,
								49, 49, 49, 49, 49, 49, 3, 19, 50, 50, 33, 33, 33, 33, 2, 18,
								33, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 102, 32, 38, 16, 6, 8,
								101, 24, 101, 24, 67, 16, 67, 16, 67, 16, 67, 16, 67, 16, 67,
								16, 67, 16, 67, 16, 34, 8, 34, 8, 34, 8, 34, 8, 34, 8, 34, 8,
								34, 8, 34, 8, 34, 8, 34, 8, 34, 8, 34, 8, 34, 8, 34, 8, 34, 8,
								34, 8, 0, 0, 0, 0, 0, 0, 0, 0, 106, 64, 74, 48, 42, 40, 10, 32,
								105, 56, 105, 56, 73, 40, 73, 40, 41, 32, 41, 32, 9, 24, 9, 24,
								104, 48, 104, 48, 104, 48, 104, 48, 72, 32, 72, 32, 72, 32, 72,
								32, 40, 24, 40, 24, 40, 24, 40, 24, 8, 16, 8, 16, 8, 16, 8, 16,
								103, 40, 103, 40, 103, 40, 103, 40, 103, 40, 103, 40, 103, 40,
								103, 40, 71, 24, 71, 24, 71, 24, 71, 24, 71, 24, 71, 24, 71, 24,
								71, 24, 110, 96, 78, 88, 46, 80, 14, 80, 110, 88, 78, 80, 46,
								72, 14, 72, 13, 64, 13, 64, 77, 72, 77, 72, 45, 64, 45, 64, 13,
								56, 13, 56, 109, 80, 109, 80, 77, 64, 77, 64, 45, 56, 45, 56,
								13, 48, 13, 48, 107, 72, 107, 72, 107, 72, 107, 72, 107, 72,
								107, 72, 107, 72, 107, 72, 75, 56, 75, 56, 75, 56, 75, 56, 75,
								56, 75, 56, 75, 56, 75, 56, 43, 48, 43, 48, 43, 48, 43, 48, 43,
								48, 43, 48, 43, 48, 43, 48, 11, 40, 11, 40, 11, 40, 11, 40, 11,
								40, 11, 40, 11, 40, 11, 40, 0, 0, 0, 0, 47, 104, 47, 104, 16,
								128, 80, 128, 48, 128, 16, 120, 112, 128, 80, 120, 48, 120, 16,
								112, 112, 120, 80, 112, 48, 112, 16, 104, 111, 112, 111, 112,
								79, 104, 79, 104, 47, 96, 47, 96, 15, 96, 15, 96, 111, 104, 111,
								104, 79, 96, 79, 96, 47, 88, 47, 88, 15, 88, 15, 88, 0, 0, 0, 0,
								0, 0, 0, 0, 102, 56, 70, 32, 38, 32, 6, 16, 102, 48, 70, 24, 38,
								24, 6, 8, 101, 40, 101, 40, 37, 16, 37, 16, 100, 32, 100, 32,
								100, 32, 100, 32, 100, 24, 100, 24, 100, 24, 100, 24, 67, 16,
								67, 16, 67, 16, 67, 16, 67, 16, 67, 16, 67, 16, 67, 16, 0, 0, 0,
								0, 0, 0, 0, 0, 105, 72, 73, 56, 41, 56, 9, 48, 8, 40, 8, 40, 72,
								48, 72, 48, 40, 48, 40, 48, 8, 32, 8, 32, 103, 64, 103, 64, 103,
								64, 103, 64, 71, 40, 71, 40, 71, 40, 71, 40, 39, 40, 39, 40, 39,
								40, 39, 40, 7, 24, 7, 24, 7, 24, 7, 24, 0, 0, 0, 0, 109, 120,
								109, 120, 110, 128, 78, 128, 46, 128, 14, 128, 46, 120, 14, 120,
								78, 120, 46, 112, 77, 112, 77, 112, 13, 112, 13, 112, 109, 112,
								109, 112, 77, 104, 77, 104, 45, 104, 45, 104, 13, 104, 13, 104,
								109, 104, 109, 104, 77, 96, 77, 96, 45, 96, 45, 96, 13, 96, 13,
								96, 12, 88, 12, 88, 12, 88, 12, 88, 76, 88, 76, 88, 76, 88, 76,
								88, 44, 88, 44, 88, 44, 88, 44, 88, 12, 80, 12, 80, 12, 80, 12,
								80, 108, 96, 108, 96, 108, 96, 108, 96, 76, 80, 76, 80, 76, 80,
								76, 80, 44, 80, 44, 80, 44, 80, 44, 80, 12, 72, 12, 72, 12, 72,
								12, 72, 107, 88, 107, 88, 107, 88, 107, 88, 107, 88, 107, 88,
								107, 88, 107, 88, 75, 72, 75, 72, 75, 72, 75, 72, 75, 72, 75,
								72, 75, 72, 75, 72, 43, 72, 43, 72, 43, 72, 43, 72, 43, 72, 43,
								72, 43, 72, 43, 72, 11, 64, 11, 64, 11, 64, 11, 64, 11, 64, 11,
								64, 11, 64, 11, 64, 107, 80, 107, 80, 107, 80, 107, 80, 107, 80,
								107, 80, 107, 80, 107, 80, 75, 64, 75, 64, 75, 64, 75, 64, 75,
								64, 75, 64, 75, 64, 75, 64, 43, 64, 43, 64, 43, 64, 43, 64, 43,
								64, 43, 64, 43, 64, 43, 64, 11, 56, 11, 56, 11, 56, 11, 56, 11,
								56, 11, 56, 11, 56, 11, 56, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 6, 24, 70, 56, 38, 56, 6, 16, 102, 72, 70, 48, 38,
								48, 6, 8, 37, 40, 37, 40, 69, 40, 69, 40, 37, 32, 37, 32, 69,
								32, 69, 32, 37, 24, 37, 24, 101, 64, 101, 64, 69, 24, 69, 24,
								37, 16, 37, 16, 100, 56, 100, 56, 100, 56, 100, 56, 100, 48,
								100, 48, 100, 48, 100, 48, 100, 40, 100, 40, 100, 40, 100, 40,
								100, 32, 100, 32, 100, 32, 100, 32, 100, 24, 100, 24, 100, 24,
								100, 24, 68, 16, 68, 16, 68, 16, 68, 16, 36, 8, 36, 8, 36, 8,
								36, 8, 4, 0, 4, 0, 4, 0, 4, 0, 0, 0, 10, 128, 106, 128, 74, 128,
								42, 128, 10, 120, 106, 120, 74, 120, 42, 120, 10, 112, 106, 112,
								74, 112, 42, 112, 10, 104, 41, 104, 41, 104, 9, 96, 9, 96, 73,
								104, 73, 104, 41, 96, 41, 96, 9, 88, 9, 88, 105, 104, 105, 104,
								73, 96, 73, 96, 41, 88, 41, 88, 9, 80, 9, 80, 104, 96, 104, 96,
								104, 96, 104, 96, 72, 88, 72, 88, 72, 88, 72, 88, 40, 80, 40,
								80, 40, 80, 40, 80, 8, 72, 8, 72, 8, 72, 8, 72, 104, 88, 104,
								88, 104, 88, 104, 88, 72, 80, 72, 80, 72, 80, 72, 80, 40, 72,
								40, 72, 40, 72, 40, 72, 8, 64, 8, 64, 8, 64, 8, 64, 7, 56, 7,
								56, 7, 56, 7, 56, 7, 56, 7, 56, 7, 56, 7, 56, 7, 48, 7, 48, 7,
								48, 7, 48, 7, 48, 7, 48, 7, 48, 7, 48, 71, 72, 71, 72, 71, 72,
								71, 72, 71, 72, 71, 72, 71, 72, 71, 72, 7, 40, 7, 40, 7, 40, 7,
								40, 7, 40, 7, 40, 7, 40, 7, 40, 103, 80, 103, 80, 103, 80, 103,
								80, 103, 80, 103, 80, 103, 80, 103, 80, 71, 64, 71, 64, 71, 64,
								71, 64, 71, 64, 71, 64, 71, 64, 71, 64, 39, 64, 39, 64, 39, 64,
								39, 64, 39, 64, 39, 64, 39, 64, 39, 64, 7, 32, 7, 32, 7, 32, 7,
								32, 7, 32, 7, 32, 7, 32, 7, 32, 6, 8, 38, 8, 0, 0, 6, 0, 6, 16,
								38, 16, 70, 16, 0, 0, 6, 24, 38, 24, 70, 24, 102, 24, 6, 32, 38,
								32, 70, 32, 102, 32, 6, 40, 38, 40, 70, 40, 102, 40, 6, 48, 38,
								48, 70, 48, 102, 48, 6, 56, 38, 56, 70, 56, 102, 56, 6, 64, 38,
								64, 70, 64, 102, 64, 6, 72, 38, 72, 70, 72, 102, 72, 6, 80, 38,
								80, 70, 80, 102, 80, 6, 88, 38, 88, 70, 88, 102, 88, 6, 96, 38,
								96, 70, 96, 102, 96, 6, 104, 38, 104, 70, 104, 102, 104, 6, 112,
								38, 112, 70, 112, 102, 112, 6, 120, 38, 120, 70, 120, 102, 120,
								6, 128, 38, 128, 70, 128, 102, 128, 0, 0, 67, 16, 2, 0, 2, 0,
								33, 8, 33, 8, 33, 8, 33, 8, 103, 32, 103, 32, 72, 32, 40, 32,
								71, 24, 71, 24, 39, 24, 39, 24, 6, 32, 6, 32, 6, 32, 6, 32, 6,
								24, 6, 24, 6, 24, 6, 24, 6, 16, 6, 16, 6, 16, 6, 16, 102, 24,
								102, 24, 102, 24, 102, 24, 38, 16, 38, 16, 38, 16, 38, 16, 6, 8,
								6, 8, 6, 8, 6, 8, 3, 0, 0, 0, 15, 0, 0, 0, 1, 0, 0, 0, 10, 0, 0,
								0, 0, 0, 0, 0, 5, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
								11, 0, 0, 0, 1, 0, 0, 0, 14, 0, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 4,
								0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 4, 0, 0, 0, 2, 0,
								0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 4, 0, 0, 0, 8, 0, 0, 0, 4, 0, 0,
								0, 3, 0, 0, 0, 4, 0, 0, 0, 6, 0, 0, 0, 4, 0, 0, 0, 9, 0, 0, 0,
								4, 0, 0, 0, 12, 0, 0, 0, 3, 0, 0, 0, 19, 0, 0, 0, 1, 0, 0, 0,
								18, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 4, 0, 0, 0, 16, 0, 0, 0,
								3, 0, 0, 0, 23, 0, 0, 0, 1, 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0,
								21, 0, 0, 0, 4, 0, 0, 0, 20, 0, 0, 0, 1, 0, 0, 0, 11, 0, 0, 0,
								1, 0, 0, 0, 14, 0, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 255, 0, 0, 0,
								4, 0, 0, 0, 1, 0, 0, 0, 15, 0, 0, 0, 2, 0, 0, 0, 10, 0, 0, 0, 4,
								0, 0, 0, 5, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 3, 0,
								0, 0, 4, 0, 0, 0, 6, 0, 0, 0, 4, 0, 0, 0, 9, 0, 0, 0, 255, 0, 0,
								0, 12, 0, 0, 0, 4, 0, 0, 0, 7, 0, 0, 0, 255, 0, 0, 0, 2, 0, 0,
								0, 4, 0, 0, 0, 13, 0, 0, 0, 255, 0, 0, 0, 8, 0, 0, 0, 1, 0, 0,
								0, 19, 0, 0, 0, 2, 0, 0, 0, 18, 0, 0, 0, 4, 0, 0, 0, 17, 0, 0,
								0, 255, 0, 0, 0, 16, 0, 0, 0, 1, 0, 0, 0, 23, 0, 0, 0, 2, 0, 0,
								0, 22, 0, 0, 0, 4, 0, 0, 0, 21, 0, 0, 0, 255, 0, 0, 0, 20, 0, 0,
								0, 1, 0, 0, 0, 10, 0, 0, 0, 1, 0, 0, 0, 11, 0, 0, 0, 4, 0, 0, 0,
								0, 0, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 14, 0, 0, 0, 1,
								0, 0, 0, 15, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 5, 0,
								0, 0, 4, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0, 0, 3, 0, 0, 0, 4, 0, 0,
								0, 8, 0, 0, 0, 4, 0, 0, 0, 9, 0, 0, 0, 4, 0, 0, 0, 6, 0, 0, 0,
								4, 0, 0, 0, 7, 0, 0, 0, 4, 0, 0, 0, 12, 0, 0, 0, 4, 0, 0, 0, 13,
								0, 0, 0, 1, 0, 0, 0, 18, 0, 0, 0, 1, 0, 0, 0, 19, 0, 0, 0, 4, 0,
								0, 0, 16, 0, 0, 0, 4, 0, 0, 0, 17, 0, 0, 0, 1, 0, 0, 0, 22, 0,
								0, 0, 1, 0, 0, 0, 23, 0, 0, 0, 4, 0, 0, 0, 20, 0, 0, 0, 4, 0, 0,
								0, 21, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 7, 0, 0, 0, 4, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0, 0, 1,
								0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 3, 0, 0, 0, 4, 0,
								0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 4, 0, 0, 0, 8, 0, 0,
								0, 0, 0, 0, 0, 15, 0, 0, 0, 4, 0, 0, 0, 10, 0, 0, 0, 4, 0, 0, 0,
								9, 0, 0, 0, 4, 0, 0, 0, 12, 0, 0, 0, 4, 0, 0, 0, 11, 0, 0, 0, 4,
								0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 4, 0, 0, 0, 16,
								0, 0, 0, 0, 0, 0, 0, 19, 0, 0, 0, 4, 0, 0, 0, 18, 0, 0, 0, 0, 0,
								0, 0, 21, 0, 0, 0, 4, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 23, 0,
								0, 0, 4, 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0,
								0, 4, 0, 0, 0, 8, 0, 0, 0, 12, 0, 0, 0, 8, 0, 0, 0, 12, 0, 0, 0,
								0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 8, 0, 0, 0, 12,
								0, 0, 0, 8, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0,
								0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0,
								0, 8, 0, 0, 0, 8, 0, 0, 0, 12, 0, 0, 0, 12, 0, 0, 0, 8, 0, 0, 0,
								8, 0, 0, 0, 12, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
								19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
								35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
								51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66,
								67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82,
								83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
								99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111,
								112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124,
								125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137,
								138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150,
								151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163,
								164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176,
								177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189,
								190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202,
								203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215,
								216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228,
								229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241,
								242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
								255, 255, 255, 255, 255, 255, 3, 0, 0, 0, 15, 0, 0, 0, 255, 0,
								0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0,
								0, 0, 3, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 255, 0,
								0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 15, 0,
								0, 0, 1, 0, 0, 0, 10, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0,
								0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 15, 0, 0, 0, 1, 0, 0, 0, 10, 0, 0,
								0, 0, 0, 0, 0, 5, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
								11, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0,
								255, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 11, 0, 0, 0, 4, 0, 0, 0,
								1, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0,
								1, 0, 0, 0, 11, 0, 0, 0, 1, 0, 0, 0, 14, 0, 0, 0, 255, 0, 0, 0,
								0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 11, 0, 0, 0,
								1, 0, 0, 0, 14, 0, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 4, 0, 0, 0, 4,
								0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255,
								0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0,
								0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 4, 0, 0, 0, 2, 0, 0,
								0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 7, 0, 0, 0, 4, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0,
								4, 0, 0, 0, 8, 0, 0, 0, 4, 0, 0, 0, 3, 0, 0, 0, 255, 0, 0, 0, 0,
								0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 4,
								0, 0, 0, 3, 0, 0, 0, 4, 0, 0, 0, 9, 0, 0, 0, 255, 0, 0, 0, 0, 0,
								0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 3, 0, 0, 0, 4, 0, 0,
								0, 6, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0,
								0, 4, 0, 0, 0, 3, 0, 0, 0, 4, 0, 0, 0, 6, 0, 0, 0, 4, 0, 0, 0,
								9, 0, 0, 0, 4, 0, 0, 0, 12, 0, 0, 0, 1, 0, 0, 0, 14, 0, 0, 0,
								255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0,
								0, 0, 0, 0, 0, 1, 0, 0, 0, 14, 0, 0, 0, 255, 0, 0, 0, 4, 0, 0,
								0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
								0, 11, 0, 0, 0, 1, 0, 0, 0, 14, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0,
								0, 255, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 11, 0, 0, 0, 1, 0, 0,
								0, 14, 0, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 255, 0, 0, 0, 4, 0, 0,
								0, 2, 0, 0, 0, 10, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0,
								0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 10, 0, 0,
								0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0,
								0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 15, 0, 0, 0, 2, 0, 0, 0, 10, 0, 0,
								0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
								0, 15, 0, 0, 0, 2, 0, 0, 0, 10, 0, 0, 0, 4, 0, 0, 0, 5, 0, 0, 0,
								255, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 6, 0, 0, 0, 255, 0, 0, 0,
								0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0,
								4, 0, 0, 0, 6, 0, 0, 0, 255, 0, 0, 0, 12, 0, 0, 0, 255, 0, 0, 0,
								0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 3, 0, 0, 0, 4,
								0, 0, 0, 6, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0,
								0, 0, 0, 4, 0, 0, 0, 3, 0, 0, 0, 4, 0, 0, 0, 6, 0, 0, 0, 4, 0,
								0, 0, 9, 0, 0, 0, 255, 0, 0, 0, 12, 0, 0, 0, 255, 0, 0, 0, 2, 0,
								0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255,
								0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 2, 0, 0, 0, 255, 0, 0, 0, 8,
								0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 4,
								0, 0, 0, 7, 0, 0, 0, 255, 0, 0, 0, 2, 0, 0, 0, 255, 0, 0, 0, 0,
								0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 7, 0, 0, 0, 255,
								0, 0, 0, 2, 0, 0, 0, 4, 0, 0, 0, 13, 0, 0, 0, 255, 0, 0, 0, 8,
								0, 0, 0, 1, 0, 0, 0, 10, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255,
								0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 10,
								0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255,
								0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 10, 0, 0, 0, 1, 0, 0, 0, 11, 0,
								0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 1, 0,
								0, 0, 10, 0, 0, 0, 1, 0, 0, 0, 11, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0,
								0, 4, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 14, 0, 0, 0, 255, 0, 0,
								0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0,
								0, 1, 0, 0, 0, 14, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 255, 0, 0,
								0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 14, 0, 0,
								0, 1, 0, 0, 0, 15, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0,
								0, 0, 0, 0, 0, 1, 0, 0, 0, 14, 0, 0, 0, 1, 0, 0, 0, 15, 0, 0, 0,
								4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 5, 0, 0, 0, 4, 0, 0, 0, 2,
								0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0,
								255, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0, 0, 8,
								0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 4,
								0, 0, 0, 2, 0, 0, 0, 4, 0, 0, 0, 3, 0, 0, 0, 255, 0, 0, 0, 0, 0,
								0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0,
								0, 3, 0, 0, 0, 4, 0, 0, 0, 8, 0, 0, 0, 4, 0, 0, 0, 9, 0, 0, 0,
								4, 0, 0, 0, 6, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0,
								0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 6, 0, 0, 0, 4,
								0, 0, 0, 12, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0,
								0, 0, 0, 4, 0, 0, 0, 6, 0, 0, 0, 4, 0, 0, 0, 7, 0, 0, 0, 255, 0,
								0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 6, 0, 0,
								0, 4, 0, 0, 0, 7, 0, 0, 0, 4, 0, 0, 0, 12, 0, 0, 0, 4, 0, 0, 0,
								13, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0,
								255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								5, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0,
								255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 4, 0, 0, 0, 0,
								0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 5, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0,
								0, 0, 4, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 255, 0, 0,
								0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0,
								0, 4, 0, 0, 0, 1, 0, 0, 0, 4, 0, 0, 0, 3, 0, 0, 0, 255, 0, 0, 0,
								0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 4,
								0, 0, 0, 4, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0,
								0, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0,
								0, 0, 3, 0, 0, 0, 4, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0,
								0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0,
								0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 13, 0, 0, 0, 4, 0, 0, 0, 8, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0,
								0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 4, 0, 0,
								0, 8, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 4, 0, 0, 0, 10, 0, 0, 0,
								4, 0, 0, 0, 9, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0,
								0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 9, 0, 0, 0, 4,
								0, 0, 0, 11, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0,
								0, 0, 0, 4, 0, 0, 0, 9, 0, 0, 0, 4, 0, 0, 0, 12, 0, 0, 0, 255,
								0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 9, 0,
								0, 0, 4, 0, 0, 0, 12, 0, 0, 0, 4, 0, 0, 0, 11, 0, 0, 0, 4, 0, 0,
								0, 14, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0,
								4, 0, 0, 0, 5, 0, 0, 0, 6, 0, 0, 0, 7, 0, 0, 0, 8, 0, 0, 0, 9,
								0, 0, 0, 10, 0, 0, 0, 11, 0, 0, 0, 12, 0, 0, 0, 13, 0, 0, 0, 14,
								0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 4, 4, 5, 6, 7, 8, 9, 10, 12, 13, 15, 17, 20, 22, 25, 28,
								32, 36, 40, 45, 50, 56, 63, 71, 80, 90, 101, 113, 127, 144, 162,
								182, 203, 226, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 6, 6, 7, 7,
								8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16,
								16, 17, 17, 18, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1,
								1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2,
								3, 1, 2, 3, 2, 2, 3, 2, 2, 4, 2, 3, 4, 2, 3, 4, 3, 3, 5, 3, 4,
								6, 3, 4, 6, 4, 5, 7, 4, 5, 8, 4, 6, 9, 5, 7, 10, 6, 8, 11, 6, 8,
								13, 7, 10, 14, 8, 11, 16, 9, 12, 18, 10, 13, 20, 11, 15, 23, 13,
								17, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 68, 69, 67, 79, 68, 69, 82, 32, 73, 78, 73, 84, 73, 65,
								76, 73, 90, 65, 84, 73, 79, 78, 32, 70, 65, 73, 76, 69, 68, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
								0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
							],
							"i8",
							Ba,
							z.Pc
						);
					var $a = z.ub(M(12, "i8", L), 8);
					w(0 == $a % 8);
					var U = {
							O: 1,
							Q: 2,
							Ef: 3,
							De: 4,
							ha: 5,
							Zb: 6,
							be: 7,
							$e: 8,
							V: 9,
							oe: 10,
							Ca: 11,
							Of: 11,
							Mc: 12,
							qb: 13,
							ye: 14,
							mf: 15,
							ga: 16,
							Xb: 17,
							Oc: 18,
							Qa: 19,
							Sa: 20,
							pa: 21,
							B: 22,
							Ve: 23,
							Lc: 24,
							Nc: 25,
							Lf: 26,
							ze: 27,
							hf: 28,
							Ua: 29,
							Bf: 30,
							Oe: 31,
							uf: 32,
							ve: 33,
							yf: 34,
							df: 42,
							Be: 43,
							pe: 44,
							Fe: 45,
							Ge: 46,
							He: 47,
							Ne: 48,
							Mf: 49,
							Ye: 50,
							Ee: 51,
							te: 35,
							af: 37,
							ge: 52,
							je: 53,
							Pf: 54,
							We: 55,
							ke: 56,
							le: 57,
							ue: 35,
							me: 59,
							kf: 60,
							Ze: 61,
							If: 62,
							jf: 63,
							ef: 64,
							ff: 65,
							Af: 66,
							bf: 67,
							ee: 68,
							Ff: 69,
							qe: 70,
							vf: 71,
							Qe: 72,
							we: 73,
							ie: 74,
							qf: 76,
							he: 77,
							zf: 78,
							Ie: 79,
							Je: 80,
							Me: 81,
							Le: 82,
							Ke: 83,
							lf: 38,
							sb: 39,
							Re: 36,
							rb: 40,
							Ta: 95,
							tf: 96,
							se: 104,
							Xe: 105,
							fe: 97,
							xf: 91,
							of: 88,
							gf: 92,
							Cf: 108,
							Wb: 111,
							ce: 98,
							re: 103,
							Ue: 101,
							Se: 100,
							Jf: 110,
							Ae: 112,
							Yb: 113,
							Jc: 115,
							Hc: 114,
							Ic: 89,
							Pe: 90,
							wf: 93,
							Df: 94,
							de: 99,
							Te: 102,
							Kc: 106,
							Ra: 107,
							Kf: 109,
							Nf: 87,
							xe: 122,
							Gf: 116,
							pf: 95,
							cf: 123,
							Ce: 84,
							rf: 75,
							ne: 125,
							nf: 131,
							sf: 130,
							Hf: 86,
						},
						ab = {
							0: "Success",
							1: "Not super-user",
							2: "No such file or directory",
							3: "No such process",
							4: "Interrupted system call",
							5: "I/O error",
							6: "No such device or address",
							7: "Arg list too long",
							8: "Exec format error",
							9: "Bad file number",
							10: "No children",
							11: "No more processes",
							12: "Not enough core",
							13: "Permission denied",
							14: "Bad address",
							15: "Block device required",
							16: "Mount device busy",
							17: "File exists",
							18: "Cross-device link",
							19: "No such device",
							20: "Not a directory",
							21: "Is a directory",
							22: "Invalid argument",
							23: "Too many open files in system",
							24: "Too many open files",
							25: "Not a typewriter",
							26: "Text file busy",
							27: "File too large",
							28: "No space left on device",
							29: "Illegal seek",
							30: "Read only file system",
							31: "Too many links",
							32: "Broken pipe",
							33: "Math arg out of domain of func",
							34: "Math result not representable",
							35: "File locking deadlock error",
							36: "File or path name too long",
							37: "No record locks available",
							38: "Function not implemented",
							39: "Directory not empty",
							40: "Too many symbolic links",
							42: "No message of desired type",
							43: "Identifier removed",
							44: "Channel number out of range",
							45: "Level 2 not synchronized",
							46: "Level 3 halted",
							47: "Level 3 reset",
							48: "Link number out of range",
							49: "Protocol driver not attached",
							50: "No CSI structure available",
							51: "Level 2 halted",
							52: "Invalid exchange",
							53: "Invalid request descriptor",
							54: "Exchange full",
							55: "No anode",
							56: "Invalid request code",
							57: "Invalid slot",
							59: "Bad font file fmt",
							60: "Device not a stream",
							61: "No data (for no delay io)",
							62: "Timer expired",
							63: "Out of streams resources",
							64: "Machine is not on the network",
							65: "Package not installed",
							66: "The object is remote",
							67: "The link has been severed",
							68: "Advertise error",
							69: "Srmount error",
							70: "Communication error on send",
							71: "Protocol error",
							72: "Multihop attempted",
							73: "Cross mount point (not really error)",
							74: "Trying to read unreadable message",
							75: "Value too large for defined data type",
							76: "Given log. name not unique",
							77: "f.d. invalid for this operation",
							78: "Remote address changed",
							79: "Can   access a needed shared lib",
							80: "Accessing a corrupted shared lib",
							81: ".lib section in a.out corrupted",
							82: "Attempting to link in too many libs",
							83: "Attempting to exec a shared library",
							84: "Illegal byte sequence",
							86: "Streams pipe error",
							87: "Too many users",
							88: "Socket operation on non-socket",
							89: "Destination address required",
							90: "Message too long",
							91: "Protocol wrong type for socket",
							92: "Protocol not available",
							93: "Unknown protocol",
							94: "Socket type not supported",
							95: "Not supported",
							96: "Protocol family not supported",
							97: "Address family not supported by protocol family",
							98: "Address already in use",
							99: "Address not available",
							100: "Network interface is not configured",
							101: "Network is unreachable",
							102: "Connection reset by network",
							103: "Connection aborted",
							104: "Connection reset by peer",
							105: "No buffer space available",
							106: "Socket is already connected",
							107: "Socket is not connected",
							108: "Can't send after socket shutdown",
							109: "Too many references",
							110: "Connection timed out",
							111: "Connection refused",
							112: "Host is down",
							113: "Host is unreachable",
							114: "Socket already connected",
							115: "Connection already in progress",
							116: "Stale file handle",
							122: "Quota exceeded",
							123: "No medium (in tape drive)",
							125: "Operation canceled",
							130: "Previous owner died",
							131: "State not recoverable",
						},
						bb = 0,
						ib = [],
						kb = {
							open: function (e) {
								var r = ib[e.g.ob];
								r || d(new B.e(U.Qa)), (e.N = r), (e.seekable = m);
							},
							close: function (e) {
								e.N.sa.flush(e.N);
							},
							flush: function (e) {
								e.N.sa.flush(e.N);
							},
							M: function (e, r, i, n) {
								(!e.N || !e.N.sa.rc) && d(new B.e(U.Zb));
								for (var t = 0, a = 0; a < n; a++) {
									var f;
									try {
										f = e.N.sa.rc(e.N);
									} catch (e) {
										d(new B.e(U.ha));
									}
									if (
										(f === g && 0 === t && d(new B.e(U.Ca)), f === k || f === g)
									)
										break;
									t++, (r[i + a] = f);
								}
								return t && (e.g.timestamp = Date.now()), t;
							},
							write: function (e, r, i, n) {
								(!e.N || !e.N.sa.Lb) && d(new B.e(U.Zb));
								for (var t = 0; t < n; t++)
									try {
										e.N.sa.Lb(e.N, r[i + t]);
									} catch (e) {
										d(new B.e(U.ha));
									}
								return n && (e.g.timestamp = Date.now()), t;
							},
						},
						mb = {
							rc: function (e) {
								if (!e.input.length) {
									var r = k;
									if (t) {
										if (((r = process.stdin.read()), !r)) {
											if (
												process.stdin._readableState &&
												process.stdin._readableState.ended
											)
												return k;
											return;
										}
									} else
										"undefined" != typeof window &&
										"function" == typeof window.prompt
											? ((r = window.prompt("Input: ")), r !== k && (r += "\n"))
											: "function" == typeof readline &&
											  ((r = readline()), r !== k && (r += "\n"));
									if (!r) return k;
									e.input = Va(r, i);
								}
								return e.input.shift();
							},
							flush: function (e) {
								e.K && 0 < e.K.length && (p.print(e.K.join("")), (e.K = []));
							},
							Lb: function (e, r) {
								r === k || 10 === r
									? (p.print(e.K.join("")), (e.K = []))
									: e.K.push(lb.nb(r));
							},
						},
						nb = {
							Lb: function (e, r) {
								r === k || 10 === r
									? (p.printErr(e.K.join("")), (e.K = []))
									: e.K.push(lb.nb(r));
							},
							flush: function (e) {
								e.K && 0 < e.K.length && (p.printErr(e.K.join("")), (e.K = []));
							},
						},
						Y = {
							U: k,
							F: function () {
								return Y.createNode(k, "/", 16895, 0);
							},
							createNode: function (e, r, i, n) {
								return (
									(B.Bd(i) || B.Cd(i)) && d(new B.e(U.O)),
									Y.U ||
										(Y.U = {
											dir: {
												g: {
													S: Y.n.S,
													I: Y.n.I,
													ra: Y.n.ra,
													ba: Y.n.ba,
													rename: Y.n.rename,
													za: Y.n.za,
													Oa: Y.n.Oa,
													Na: Y.n.Na,
													ca: Y.n.ca,
												},
												A: { $: Y.p.$ },
											},
											file: {
												g: { S: Y.n.S, I: Y.n.I },
												A: {
													$: Y.p.$,
													M: Y.p.M,
													write: Y.p.write,
													Ea: Y.p.Ea,
													Ja: Y.p.Ja,
												},
											},
											link: { g: { S: Y.n.S, I: Y.n.I, ta: Y.n.ta }, A: {} },
											ec: { g: { S: Y.n.S, I: Y.n.I }, A: B.bd },
										}),
									(i = B.createNode(e, r, i, n)),
									B.J(i.mode)
										? ((i.n = Y.U.dir.g), (i.p = Y.U.dir.A), (i.k = {}))
										: B.isFile(i.mode)
										? ((i.n = Y.U.file.g),
										  (i.p = Y.U.file.A),
										  (i.q = 0),
										  (i.k = k))
										: B.Ia(i.mode)
										? ((i.n = Y.U.link.g), (i.p = Y.U.link.A))
										: B.ib(i.mode) && ((i.n = Y.U.ec.g), (i.p = Y.U.ec.A)),
									(i.timestamp = Date.now()),
									e && (e.k[r] = i),
									i
								);
							},
							ud: function (e) {
								if (e.k && e.k.subarray) {
									for (var r = [], i = 0; i < e.q; ++i) r.push(e.k[i]);
									return r;
								}
								return e.k;
							},
							qg: function (e) {
								return e.k
									? e.k.subarray
										? e.k.subarray(0, e.q)
										: new Uint8Array(e.k)
									: new Uint8Array();
							},
							lc: function (e, r) {
								if (
									(e.k &&
										e.k.subarray &&
										r > e.k.length &&
										((e.k = Y.ud(e)), (e.q = e.k.length)),
									!e.k || e.k.subarray)
								) {
									var i = e.k ? e.k.buffer.byteLength : 0;
									i >= r ||
										((r = Math.max(r, (i * (1048576 > i ? 2 : 1.125)) | 0)),
										0 != i && (r = Math.max(r, 256)),
										(i = e.k),
										(e.k = new Uint8Array(r)),
										0 < e.q && e.k.set(i.subarray(0, e.q), 0));
								} else
									for (!e.k && 0 < r && (e.k = []); e.k.length < r; )
										e.k.push(0);
							},
							Ud: function (e, r) {
								if (e.q != r)
									if (0 == r) (e.k = k), (e.q = 0);
									else {
										if (!e.k || e.k.subarray) {
											var i = e.k;
											(e.k = new Uint8Array(new ArrayBuffer(r))),
												i && e.k.set(i.subarray(0, Math.min(r, e.q)));
										} else if ((e.k || (e.k = []), e.k.length > r))
											e.k.length = r;
										else for (; e.k.length < r; ) e.k.push(0);
										e.q = r;
									}
							},
							n: {
								S: function (e) {
									var r = {};
									return (
										(r.gg = B.ib(e.mode) ? e.id : 1),
										(r.wg = e.id),
										(r.mode = e.mode),
										(r.Ig = 1),
										(r.uid = 0),
										(r.ug = 0),
										(r.ob = e.ob),
										(r.size = B.J(e.mode)
											? 4096
											: B.isFile(e.mode)
											? e.q
											: B.Ia(e.mode)
											? e.link.length
											: 0),
										(r.Zf = new Date(e.timestamp)),
										(r.Hg = new Date(e.timestamp)),
										(r.eg = new Date(e.timestamp)),
										(r.Zc = 4096),
										(r.$f = Math.ceil(r.size / r.Zc)),
										r
									);
								},
								I: function (e, r) {
									r.mode !== g && (e.mode = r.mode),
										r.timestamp !== g && (e.timestamp = r.timestamp),
										r.size !== g && Y.Ud(e, r.size);
								},
								ra: function () {
									d(B.Db[U.Q]);
								},
								ba: function (e, r, i, n) {
									return Y.createNode(e, r, i, n);
								},
								rename: function (e, r, i) {
									if (B.J(e.mode)) {
										var n;
										try {
											n = B.aa(r, i);
										} catch (e) {}
										if (n) for (var t in n.k) d(new B.e(U.sb));
									}
									delete e.parent.k[e.name],
										(e.name = i),
										(r.k[i] = e),
										(e.parent = r);
								},
								za: function (e, r) {
									delete e.k[r];
								},
								Oa: function (e, r) {
									var i,
										n = B.aa(e, r);
									for (i in n.k) d(new B.e(U.sb));
									delete e.k[r];
								},
								Na: function (e) {
									var r,
										i = [".", ".."];
									for (r in e.k) e.k.hasOwnProperty(r) && i.push(r);
									return i;
								},
								ca: function (e, r, i) {
									return (e = Y.createNode(e, r, 41471, 0)), (e.link = i), e;
								},
								ta: function (e) {
									return B.Ia(e.mode) || d(new B.e(U.B)), e.link;
								},
							},
							p: {
								M: function (e, r, i, n, t) {
									var a = e.g.k;
									if (t >= e.g.q) return 0;
									if (
										((e = Math.min(e.g.q - t, n)),
										w(0 <= e),
										8 < e && a.subarray)
									)
										r.set(a.subarray(t, t + e), i);
									else for (n = 0; n < e; n++) r[i + n] = a[t + n];
									return e;
								},
								write: function (e, r, i, n, t, a) {
									if (!n) return 0;
									if (
										((e = e.g),
										(e.timestamp = Date.now()),
										r.subarray && (!e.k || e.k.subarray))
									) {
										if (a) return (e.k = r.subarray(i, i + n)), (e.q = n);
										if (0 === e.q && 0 === t)
											return (
												(e.k = new Uint8Array(r.subarray(i, i + n))), (e.q = n)
											);
										if (t + n <= e.q)
											return e.k.set(r.subarray(i, i + n), t), n;
									}
									if ((Y.lc(e, t + n), e.k.subarray && r.subarray))
										e.k.set(r.subarray(i, i + n), t);
									else for (a = 0; a < n; a++) e.k[t + a] = r[i + a];
									return (e.q = Math.max(e.q, t + n)), n;
								},
								$: function (e, r, i) {
									return (
										1 === i
											? (r += e.position)
											: 2 === i && B.isFile(e.g.mode) && (r += e.g.q),
										0 > r && d(new B.e(U.B)),
										r
									);
								},
								Ea: function (e, r, i) {
									Y.lc(e.g, r + i), (e.g.q = Math.max(e.g.q, r + i));
								},
								Ja: function (e, r, n, t, a, f, o) {
									return (
										B.isFile(e.g.mode) || d(new B.e(U.Qa)),
										(n = e.g.k),
										2 & o || (n.buffer !== r && n.buffer !== r.buffer)
											? ((0 < a || a + t < e.g.q) &&
													(n = n.subarray
														? n.subarray(a, a + t)
														: Array.prototype.slice.call(n, a, a + t)),
											  (e = i),
											  (t = Ca(t)) || d(new B.e(U.Mc)),
											  r.set(n, t))
											: ((e = m), (t = n.byteOffset)),
										{ Lg: t, Yf: e }
									);
								},
							},
						},
						ob = M(1, "i32*", L),
						pb = M(1, "i32*", L),
						qb = M(1, "i32*", L),
						B = {
							root: k,
							La: [],
							ic: [k],
							oa: [],
							Jd: 1,
							T: k,
							hc: "/",
							hb: m,
							vc: i,
							H: {},
							Gc: { yc: { Rc: 1, Sc: 2 } },
							e: k,
							Db: {},
							sc: function (e) {
								return e instanceof B.e || d(e + " : " + Fa()), V(e.cb);
							},
							u: function (e, r) {
								if (((e = gb(B.yb(), e)), (r = r || {}), !e))
									return { path: "", g: k };
								var n,
									t = { Bb: i, Nb: 0 };
								for (n in t) r[n] === g && (r[n] = t[n]);
								8 < r.Nb && d(new B.e(U.rb));
								var t = cb(
										e.split("/").filter(function (e) {
											return !!e;
										}),
										m
									),
									a = B.root;
								n = "/";
								for (var f = 0; f < t.length; f++) {
									var o = f === t.length - 1;
									if (o && r.parent) break;
									if (
										((a = B.aa(a, t[f])),
										(n = X(n, t[f])),
										B.ka(a) && (!o || (o && r.Bb)) && (a = a.Ka.root),
										!o || r.R)
									)
										for (o = 0; B.Ia(a.mode); )
											(a = B.ta(n)),
												(n = gb(eb(n), a)),
												(a = B.u(n, { Nb: r.Nb }).g),
												40 < o++ && d(new B.e(U.rb));
								}
								return { path: n, g: a };
							},
							da: function (e) {
								for (var r; ; ) {
									if (B.jb(e))
										return (
											(e = e.F.Id),
											r ? ("/" !== e[e.length - 1] ? e + "/" + r : e + r) : e
										);
									(r = r ? e.name + "/" + r : e.name), (e = e.parent);
								}
							},
							Fb: function (e, r) {
								for (var i = 0, n = 0; n < r.length; n++)
									i = ((i << 5) - i + r.charCodeAt(n)) | 0;
								return ((e + i) >>> 0) % B.T.length;
							},
							tc: function (e) {
								var r = B.Fb(e.parent.id, e.name);
								(e.ma = B.T[r]), (B.T[r] = e);
							},
							uc: function (e) {
								var r = B.Fb(e.parent.id, e.name);
								if (B.T[r] === e) B.T[r] = e.ma;
								else
									for (r = B.T[r]; r; ) {
										if (r.ma === e) {
											r.ma = e.ma;
											break;
										}
										r = r.ma;
									}
							},
							aa: function (e, r) {
								var i = B.Gd(e);
								for (
									i && d(new B.e(i, e)), i = B.T[B.Fb(e.id, r)];
									i;
									i = i.ma
								) {
									var n = i.name;
									if (i.parent.id === e.id && n === r) return i;
								}
								return B.ra(e, r);
							},
							createNode: function (e, r, i, n) {
								return (
									B.Va ||
										((B.Va = function (e, r, i, n) {
											e || (e = this),
												(this.parent = e),
												(this.F = e.F),
												(this.Ka = k),
												(this.id = B.Jd++),
												(this.name = r),
												(this.mode = i),
												(this.n = {}),
												(this.p = {}),
												(this.ob = n);
										}),
										(B.Va.prototype = {}),
										Object.defineProperties(B.Va.prototype, {
											M: {
												get: function () {
													return 365 === (365 & this.mode);
												},
												set: function (e) {
													e ? (this.mode |= 365) : (this.mode &= -366);
												},
											},
											write: {
												get: function () {
													return 146 === (146 & this.mode);
												},
												set: function (e) {
													e ? (this.mode |= 146) : (this.mode &= -147);
												},
											},
											Dd: {
												get: function () {
													return B.J(this.mode);
												},
											},
											Gb: {
												get: function () {
													return B.ib(this.mode);
												},
											},
										})),
									(e = new B.Va(e, r, i, n)),
									B.tc(e),
									e
								);
							},
							zb: function (e) {
								B.uc(e);
							},
							jb: function (e) {
								return e === e.parent;
							},
							ka: function (e) {
								return !!e.Ka;
							},
							isFile: function (e) {
								return 32768 === (61440 & e);
							},
							J: function (e) {
								return 16384 === (61440 & e);
							},
							Ia: function (e) {
								return 40960 === (61440 & e);
							},
							ib: function (e) {
								return 8192 === (61440 & e);
							},
							Bd: function (e) {
								return 24576 === (61440 & e);
							},
							Cd: function (e) {
								return 4096 === (61440 & e);
							},
							Ed: function (e) {
								return 49152 === (49152 & e);
							},
							rd: {
								r: 0,
								rs: 1052672,
								"r+": 2,
								w: 577,
								wx: 705,
								xw: 705,
								"w+": 578,
								"wx+": 706,
								"xw+": 706,
								a: 1089,
								ax: 1217,
								xa: 1217,
								"a+": 1090,
								"ax+": 1218,
								"xa+": 1218,
							},
							wc: function (e) {
								var r = B.rd[e];
								return (
									"undefined" == typeof r &&
										d(Error("Unknown file open mode: " + e)),
									r
								);
							},
							sd: function (e) {
								var r = ["r", "w", "rw"][2097155 & e];
								return 512 & e && (r += "w"), r;
							},
							na: function (e, r) {
								return B.vc
									? 0
									: (-1 === r.indexOf("r") || 292 & e.mode) &&
									  (-1 === r.indexOf("w") || 146 & e.mode) &&
									  (-1 === r.indexOf("x") || 73 & e.mode)
									? 0
									: U.qb;
							},
							Gd: function (e) {
								var r = B.na(e, "x");
								return r ? r : e.n.ra ? 0 : U.qb;
							},
							Jb: function (e, r) {
								try {
									return B.aa(e, r), U.Xb;
								} catch (e) {}
								return B.na(e, "wx");
							},
							kb: function (e, r, i) {
								var n;
								try {
									n = B.aa(e, r);
								} catch (e) {
									return e.cb;
								}
								if ((e = B.na(e, "wx"))) return e;
								if (i) {
									if (!B.J(n.mode)) return U.Sa;
									if (B.jb(n) || B.da(n) === B.yb()) return U.ga;
								} else if (B.J(n.mode)) return U.pa;
								return 0;
							},
							Hd: function (e, r) {
								return e
									? B.Ia(e.mode)
										? U.rb
										: B.J(e.mode) && (0 !== (2097155 & r) || 512 & r)
										? U.pa
										: B.na(e, B.sd(r))
									: U.Q;
							},
							Qc: 4096,
							Kd: function (e, r) {
								for (var r = r || B.Qc, i = e || 0; i <= r; i++)
									if (!B.oa[i]) return i;
								d(new B.e(U.Lc));
							},
							qa: function (e) {
								return B.oa[e];
							},
							fc: function (e, r, i) {
								B.Wa ||
									((B.Wa = n()),
									(B.Wa.prototype = {}),
									Object.defineProperties(B.Wa.prototype, {
										object: {
											get: function () {
												return this.g;
											},
											set: function (e) {
												this.g = e;
											},
										},
										yg: {
											get: function () {
												return 1 !== (2097155 & this.D);
											},
										},
										zg: {
											get: function () {
												return 0 !== (2097155 & this.D);
											},
										},
										xg: {
											get: function () {
												return 1024 & this.D;
											},
										},
									}));
								var t,
									a = new B.Wa();
								for (t in e) a[t] = e[t];
								return (e = a), (r = B.Kd(r, i)), (e.C = r), (B.oa[r] = e);
							},
							dd: function (e) {
								B.oa[e] = k;
							},
							pc: function (e) {
								return B.oa[e - 1];
							},
							Eb: function (e) {
								return e ? e.C + 1 : 0;
							},
							bd: {
								open: function (e) {
									(e.p = B.td(e.g.ob).p), e.p.open && e.p.open(e);
								},
								$: function () {
									d(new B.e(U.Ua));
								},
							},
							Ib: function (e) {
								return e >> 8;
							},
							Gg: function (e) {
								return 255 & e;
							},
							la: function (e, r) {
								return (e << 8) | r;
							},
							Ob: function (e, r) {
								B.ic[e] = { p: r };
							},
							td: function (e) {
								return B.ic[e];
							},
							nc: function (e) {
								for (var r = [], e = [e]; e.length; ) {
									var i = e.pop();
									r.push(i), e.push.apply(e, i.La);
								}
								return r;
							},
							Fc: function (e, r) {
								function n(e) {
									if (e) {
										if (!n.pd) return (n.pd = i), r(e);
									} else ++a >= t.length && r(k);
								}
								"function" == typeof e && ((r = e), (e = m));
								var t = B.nc(B.root.F),
									a = 0;
								t.forEach(function (r) {
									return r.type.Fc ? void r.type.Fc(r, e, n) : n(k);
								});
							},
							F: function (e, r, i) {
								var n,
									t = "/" === i,
									a = !i;
								return (
									t && B.root && d(new B.e(U.ga)),
									!t &&
										!a &&
										((n = B.u(i, { Bb: m })),
										(i = n.path),
										(n = n.g),
										B.ka(n) && d(new B.e(U.ga)),
										B.J(n.mode) || d(new B.e(U.Sa))),
									(r = { type: e, Kg: r, Id: i, La: [] }),
									(e = e.F(r)),
									(e.F = r),
									(r.root = e),
									t ? (B.root = e) : n && ((n.Ka = r), n.F && n.F.La.push(r)),
									e
								);
							},
							Qg: function (e) {
								(e = B.u(e, { Bb: m })), B.ka(e.g) || d(new B.e(U.B));
								var e = e.g,
									r = e.Ka,
									i = B.nc(r);
								Object.keys(B.T).forEach(function (e) {
									for (e = B.T[e]; e; ) {
										var r = e.ma;
										-1 !== i.indexOf(e.F) && B.zb(e), (e = r);
									}
								}),
									(e.Ka = k),
									(r = e.F.La.indexOf(r)),
									w(-1 !== r),
									e.F.La.splice(r, 1);
							},
							ra: function (e, r) {
								return e.n.ra(e, r);
							},
							ba: function (e, r, n) {
								var t = B.u(e, { parent: i }).g,
									e = W(e);
								(!e || "." === e || ".." === e) && d(new B.e(U.B));
								var a = B.Jb(t, e);
								return (
									a && d(new B.e(a)),
									t.n.ba || d(new B.e(U.O)),
									t.n.ba(t, e, r, n)
								);
							},
							create: function (e, r) {
								return (
									(r = 4095 & (r !== g ? r : 438)), (r |= 32768), B.ba(e, r, 0)
								);
							},
							ea: function (e, r) {
								return (
									(r = 1023 & (r !== g ? r : 511)), (r |= 16384), B.ba(e, r, 0)
								);
							},
							lb: function (e, r, i) {
								return (
									"undefined" == typeof i && ((i = r), (r = 438)),
									B.ba(e, 8192 | r, i)
								);
							},
							ca: function (e, r) {
								gb(e) || d(new B.e(U.Q));
								var n = B.u(r, { parent: i }).g;
								n || d(new B.e(U.Q));
								var t = W(r),
									a = B.Jb(n, t);
								return (
									a && d(new B.e(a)), n.n.ca || d(new B.e(U.O)), n.n.ca(n, t, e)
								);
							},
							rename: function (e, r) {
								var n,
									t,
									a,
									f = eb(e),
									o = eb(r),
									s = W(e),
									u = W(r);
								try {
									(n = B.u(e, { parent: i })),
										(t = n.g),
										(n = B.u(r, { parent: i })),
										(a = n.g);
								} catch (e) {
									d(new B.e(U.ga));
								}
								(!t || !a) && d(new B.e(U.Q)),
									t.F !== a.F && d(new B.e(U.Oc)),
									(n = B.aa(t, s)),
									(o = hb(e, o)),
									"." !== o.charAt(0) && d(new B.e(U.B)),
									(o = hb(r, f)),
									"." !== o.charAt(0) && d(new B.e(U.sb));
								var l;
								try {
									l = B.aa(a, u);
								} catch (e) {}
								if (n !== l) {
									(f = B.J(n.mode)),
										(s = B.kb(t, s, f)) && d(new B.e(s)),
										(s = l ? B.kb(a, u, f) : B.Jb(a, u)) && d(new B.e(s)),
										t.n.rename || d(new B.e(U.O)),
										(B.ka(n) || (l && B.ka(l))) && d(new B.e(U.ga)),
										a !== t && (s = B.na(t, "w")) && d(new B.e(s));
									try {
										B.H.willMovePath && B.H.willMovePath(e, r);
									} catch (i) {
										console.log(
											"FS.trackingDelegate['willMovePath']('" +
												e +
												"', '" +
												r +
												"') threw an exception: " +
												i.message
										);
									}
									B.uc(n);
									try {
										t.n.rename(n, a, u);
									} catch (e) {
										d(e);
									} finally {
										B.tc(n);
									}
									try {
										B.H.onMovePath && B.H.onMovePath(e, r);
									} catch (i) {
										console.log(
											"FS.trackingDelegate['onMovePath']('" +
												e +
												"', '" +
												r +
												"') threw an exception: " +
												i.message
										);
									}
								}
							},
							Oa: function (e) {
								var r = B.u(e, { parent: i }).g,
									n = W(e),
									t = B.aa(r, n),
									a = B.kb(r, n, i);
								a && d(new B.e(a)),
									r.n.Oa || d(new B.e(U.O)),
									B.ka(t) && d(new B.e(U.ga));
								try {
									B.H.willDeletePath && B.H.willDeletePath(e);
								} catch (r) {
									console.log(
										"FS.trackingDelegate['willDeletePath']('" +
											e +
											"') threw an exception: " +
											r.message
									);
								}
								r.n.Oa(r, n), B.zb(t);
								try {
									B.H.onDeletePath && B.H.onDeletePath(e);
								} catch (r) {
									console.log(
										"FS.trackingDelegate['onDeletePath']('" +
											e +
											"') threw an exception: " +
											r.message
									);
								}
							},
							Na: function (e) {
								return (
									(e = B.u(e, { R: i }).g),
									e.n.Na || d(new B.e(U.Sa)),
									e.n.Na(e)
								);
							},
							za: function (e) {
								var r = B.u(e, { parent: i }).g,
									n = W(e),
									t = B.aa(r, n),
									a = B.kb(r, n, m);
								a && (a === U.pa && (a = U.O), d(new B.e(a))),
									r.n.za || d(new B.e(U.O)),
									B.ka(t) && d(new B.e(U.ga));
								try {
									B.H.willDeletePath && B.H.willDeletePath(e);
								} catch (r) {
									console.log(
										"FS.trackingDelegate['willDeletePath']('" +
											e +
											"') threw an exception: " +
											r.message
									);
								}
								r.n.za(r, n), B.zb(t);
								try {
									B.H.onDeletePath && B.H.onDeletePath(e);
								} catch (r) {
									console.log(
										"FS.trackingDelegate['onDeletePath']('" +
											e +
											"') threw an exception: " +
											r.message
									);
								}
							},
							ta: function (e) {
								return (
									(e = B.u(e).g) || d(new B.e(U.Q)),
									e.n.ta || d(new B.e(U.B)),
									e.n.ta(e)
								);
							},
							Dc: function (e, r) {
								var i = B.u(e, { R: !r }).g;
								return i || d(new B.e(U.Q)), i.n.S || d(new B.e(U.O)), i.n.S(i);
							},
							Eg: function (e) {
								return B.Dc(e, i);
							},
							Ya: function (e, r, i) {
								(e = "string" == typeof e ? B.u(e, { R: !i }).g : e),
									e.n.I || d(new B.e(U.O)),
									e.n.I(e, {
										mode: (4095 & r) | (e.mode & -4096),
										timestamp: Date.now(),
									});
							},
							Bg: function (e, r) {
								B.Ya(e, r, i);
							},
							jg: function (e, r) {
								var i = B.qa(e);
								i || d(new B.e(U.V)), B.Ya(i.g, r);
							},
							dc: function (e, r, i, n) {
								(e = "string" == typeof e ? B.u(e, { R: !n }).g : e),
									e.n.I || d(new B.e(U.O)),
									e.n.I(e, { timestamp: Date.now() });
							},
							Cg: function (e, r, n) {
								B.dc(e, r, n, i);
							},
							kg: function (e, r, i) {
								(e = B.qa(e)) || d(new B.e(U.V)), B.dc(e.g, r, i);
							},
							truncate: function (e, r) {
								0 > r && d(new B.e(U.B));
								var n;
								(n = "string" == typeof e ? B.u(e, { R: i }).g : e),
									n.n.I || d(new B.e(U.O)),
									B.J(n.mode) && d(new B.e(U.pa)),
									B.isFile(n.mode) || d(new B.e(U.B));
								var t = B.na(n, "w");
								t && d(new B.e(t)),
									n.n.I(n, { size: r, timestamp: Date.now() });
							},
							mg: function (e, r) {
								var i = B.qa(e);
								i || d(new B.e(U.V)),
									0 === (2097155 & i.D) && d(new B.e(U.B)),
									B.truncate(i.g, r);
							},
							Rg: function (e, r, n) {
								(e = B.u(e, { R: i }).g),
									e.n.I(e, { timestamp: Math.max(r, n) });
							},
							open: function (e, r, n, t, a) {
								"" === e && d(new B.e(U.Q));
								var f,
									r = "string" == typeof r ? B.wc(r) : r,
									n =
										64 & r
											? (4095 & ("undefined" == typeof n ? 438 : n)) | 32768
											: 0;
								if ("object" == typeof e) f = e;
								else {
									e = db(e);
									try {
										f = B.u(e, { R: !(131072 & r) }).g;
									} catch (e) {}
								}
								var o = m;
								64 & r &&
									(f
										? 128 & r && d(new B.e(U.Xb))
										: ((f = B.ba(e, n, 0)), (o = i))),
									f || d(new B.e(U.Q)),
									B.ib(f.mode) && (r &= -513),
									o || ((n = B.Hd(f, r)) && d(new B.e(n))),
									512 & r && B.truncate(f, 0),
									(r &= -641),
									(t = B.fc(
										{
											g: f,
											path: B.da(f),
											D: r,
											seekable: i,
											position: 0,
											p: f.p,
											$d: [],
											error: m,
										},
										t,
										a
									)),
									t.p.open && t.p.open(t),
									p.logReadFiles &&
										!(1 & r) &&
										(B.Mb || (B.Mb = {}),
										e in B.Mb ||
											((B.Mb[e] = 1), p.printErr("read file: " + e)));
								try {
									B.H.onOpenFile &&
										((a = 0),
										1 !== (2097155 & r) && (a |= B.Gc.yc.Rc),
										0 !== (2097155 & r) && (a |= B.Gc.yc.Sc),
										B.H.onOpenFile(e, a));
								} catch (r) {
									console.log(
										"FS.trackingDelegate['onOpenFile']('" +
											e +
											"', flags) threw an exception: " +
											r.message
									);
								}
								return t;
							},
							close: function (e) {
								try {
									e.p.close && e.p.close(e);
								} catch (e) {
									d(e);
								} finally {
									B.dd(e.C);
								}
							},
							$: function (e, r, i) {
								return (
									(!e.seekable || !e.p.$) && d(new B.e(U.Ua)),
									(e.position = e.p.$(e, r, i)),
									(e.$d = []),
									e.position
								);
							},
							M: function (e, r, n, t, a) {
								(0 > t || 0 > a) && d(new B.e(U.B)),
									1 === (2097155 & e.D) && d(new B.e(U.V)),
									B.J(e.g.mode) && d(new B.e(U.pa)),
									e.p.M || d(new B.e(U.B));
								var f = i;
								return (
									"undefined" == typeof a
										? ((a = e.position), (f = m))
										: e.seekable || d(new B.e(U.Ua)),
									(r = e.p.M(e, r, n, t, a)),
									f || (e.position += r),
									r
								);
							},
							write: function (e, r, n, t, a, f) {
								(0 > t || 0 > a) && d(new B.e(U.B)),
									0 === (2097155 & e.D) && d(new B.e(U.V)),
									B.J(e.g.mode) && d(new B.e(U.pa)),
									e.p.write || d(new B.e(U.B)),
									1024 & e.D && B.$(e, 0, 2);
								var o = i;
								"undefined" == typeof a
									? ((a = e.position), (o = m))
									: e.seekable || d(new B.e(U.Ua)),
									(r = e.p.write(e, r, n, t, a, f)),
									o || (e.position += r);
								try {
									e.path && B.H.onWriteToFile && B.H.onWriteToFile(e.path);
								} catch (e) {
									console.log(
										"FS.trackingDelegate['onWriteToFile']('" +
											path +
											"') threw an exception: " +
											e.message
									);
								}
								return r;
							},
							Ea: function (e, r, i) {
								(0 > r || 0 >= i) && d(new B.e(U.B)),
									0 === (2097155 & e.D) && d(new B.e(U.V)),
									!B.isFile(e.g.mode) && !B.J(node.mode) && d(new B.e(U.Qa)),
									e.p.Ea || d(new B.e(U.Ta)),
									e.p.Ea(e, r, i);
							},
							Ja: function (e, r, i, n, t, a, f) {
								return (
									1 === (2097155 & e.D) && d(new B.e(U.qb)),
									e.p.Ja || d(new B.e(U.Qa)),
									e.p.Ja(e, r, i, n, t, a, f)
								);
							},
							Ha: function (e, r, i) {
								return e.p.Ha || d(new B.e(U.Nc)), e.p.Ha(e, r, i);
							},
							Mg: function (e, r) {
								(r = r || {}),
									(r.D = r.D || "r"),
									(r.encoding = r.encoding || "binary"),
									"utf8" !== r.encoding &&
										"binary" !== r.encoding &&
										d(Error('Invalid encoding type "' + r.encoding + '"'));
								var i,
									n = B.open(e, r.D),
									t = B.Dc(e).size,
									a = new Uint8Array(t);
								if ((B.M(n, a, 0, t, 0), "utf8" === r.encoding)) {
									i = "";
									for (var f = new z.Da(), o = 0; o < t; o++) i += f.nb(a[o]);
								} else "binary" === r.encoding && (i = a);
								return B.close(n), i;
							},
							Sg: function (e, r, i) {
								(i = i || {}),
									(i.D = i.D || "w"),
									(i.encoding = i.encoding || "utf8"),
									"utf8" !== i.encoding &&
										"binary" !== i.encoding &&
										d(Error('Invalid encoding type "' + i.encoding + '"')),
									(e = B.open(e, i.D, i.mode)),
									"utf8" === i.encoding
										? ((r = new Uint8Array(new z.Da().Ac(r))),
										  B.write(e, r, 0, r.length, 0, i.ad))
										: "binary" === i.encoding &&
										  B.write(e, r, 0, r.length, 0, i.ad),
									B.close(e);
							},
							yb: function () {
								return B.hc;
							},
							bg: function (e) {
								(e = B.u(e, { R: i })), B.J(e.g.mode) || d(new B.e(U.Sa));
								var r = B.na(e.g, "x");
								r && d(new B.e(r)), (B.hc = e.path);
							},
							fd: function () {
								B.ea("/tmp"), B.ea("/home"), B.ea("/home/web_user");
							},
							ed: function () {
								B.ea("/dev"),
									B.Ob(B.la(1, 3), {
										M: function () {
											return 0;
										},
										write: function () {
											return 0;
										},
									}),
									B.lb("/dev/null", B.la(1, 3)),
									jb(B.la(5, 0), mb),
									jb(B.la(6, 0), nb),
									B.lb("/dev/tty", B.la(5, 0)),
									B.lb("/dev/tty1", B.la(6, 0));
								var e;
								if ("undefined" != typeof crypto) {
									var r = new Uint8Array(1);
									e = function () {
										return crypto.getRandomValues(r), r[0];
									};
								} else
									e = t
										? function () {
												return null("crypto").randomBytes(1)[0];
										  }
										: function () {
												return (256 * Math.random()) | 0;
										  };
								B.X("/dev", "random", e),
									B.X("/dev", "urandom", e),
									B.ea("/dev/shm"),
									B.ea("/dev/shm/tmp");
							},
							od: function () {
								p.stdin
									? B.X("/dev", "stdin", p.stdin)
									: B.ca("/dev/tty", "/dev/stdin"),
									p.stdout
										? B.X("/dev", "stdout", k, p.stdout)
										: B.ca("/dev/tty", "/dev/stdout"),
									p.stderr
										? B.X("/dev", "stderr", k, p.stderr)
										: B.ca("/dev/tty1", "/dev/stderr");
								var e = B.open("/dev/stdin", "r");
								(K[ob >> 2] = B.Eb(e)),
									w(0 === e.C, "invalid handle for stdin (" + e.C + ")"),
									(e = B.open("/dev/stdout", "w")),
									(K[pb >> 2] = B.Eb(e)),
									w(1 === e.C, "invalid handle for stdout (" + e.C + ")"),
									(e = B.open("/dev/stderr", "w")),
									(K[qb >> 2] = B.Eb(e)),
									w(2 === e.C, "invalid handle for stderr (" + e.C + ")");
							},
							jc: function () {
								B.e ||
									((B.e = function (e, r) {
										(this.g = r),
											(this.Xd = function (e) {
												this.cb = e;
												for (var r in U)
													if (U[r] === e) {
														this.code = r;
														break;
													}
											}),
											this.Xd(e),
											(this.message = ab[e]);
									}),
									(B.e.prototype = Error()),
									[U.Q].forEach(function (e) {
										(B.Db[e] = new B.e(e)),
											(B.Db[e].stack = "<generic error, no stack>");
									}));
							},
							Zd: function () {
								B.jc(), (B.T = Array(4096)), B.F(Y, {}, "/"), B.fd(), B.ed();
							},
							Ga: function (e, r, n) {
								w(
									!B.Ga.hb,
									"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"
								),
									(B.Ga.hb = i),
									B.jc(),
									(p.stdin = e || p.stdin),
									(p.stdout = r || p.stdout),
									(p.stderr = n || p.stderr),
									B.od();
							},
							Qd: function () {
								B.Ga.hb = m;
								for (var e = 0; e < B.oa.length; e++) {
									var r = B.oa[e];
									r && B.close(r);
								}
							},
							fb: function (e, r) {
								var i = 0;
								return e && (i |= 365), r && (i |= 146), i;
							},
							Ag: function (e, r) {
								var i = fb.apply(k, e);
								return r && "/" == i[0] && (i = i.substr(1)), i;
							},
							Sf: function (e, r) {
								return gb(r, e);
							},
							Pg: function (e) {
								return db(e);
							},
							lg: function (e, r) {
								var i = B.vb(e, r);
								return i.Ab ? i.object : (V(i.error), k);
							},
							vb: function (e, r) {
								try {
									var n = B.u(e, { R: !r }),
										e = n.path;
								} catch (e) {}
								var t = {
									jb: m,
									Ab: m,
									error: 0,
									name: k,
									path: k,
									object: k,
									Md: m,
									Od: k,
									Nd: k,
								};
								try {
									(n = B.u(e, { parent: i })),
										(t.Md = i),
										(t.Od = n.path),
										(t.Nd = n.g),
										(t.name = W(e)),
										(n = B.u(e, { R: !r })),
										(t.Ab = i),
										(t.path = n.path),
										(t.object = n.g),
										(t.name = n.g.name),
										(t.jb = "/" === n.path);
								} catch (e) {
									t.error = e.cb;
								}
								return t;
							},
							hd: function (e, r, i, n) {
								return (
									(e = X("string" == typeof e ? e : B.da(e), r)),
									B.ea(e, B.fb(i, n))
								);
							},
							ld: function (e, r) {
								for (
									var e = "string" == typeof e ? e : B.da(e),
										i = r.split("/").reverse();
									i.length;

								) {
									var n = i.pop();
									if (n) {
										var t = X(e, n);
										try {
											B.ea(t);
										} catch (e) {}
										e = t;
									}
								}
								return t;
							},
							gd: function (e, r, i, n, t) {
								return (
									(e = X("string" == typeof e ? e : B.da(e), r)),
									B.create(e, B.fb(n, t))
								);
							},
							xb: function (e, r, i, n, t, a) {
								if (
									((e = r ? X("string" == typeof e ? e : B.da(e), r) : e),
									(n = B.fb(n, t)),
									(t = B.create(e, n)),
									i)
								) {
									if ("string" == typeof i) {
										for (
											var e = Array(i.length), r = 0, f = i.length;
											r < f;
											++r
										)
											e[r] = i.charCodeAt(r);
										i = e;
									}
									B.Ya(t, 146 | n),
										(e = B.open(t, "w")),
										B.write(e, i, 0, i.length, 0, a),
										B.close(e),
										B.Ya(t, n);
								}
								return t;
							},
							X: function (e, r, i, n) {
								(e = X("string" == typeof e ? e : B.da(e), r)),
									(r = B.fb(!!i, !!n)),
									B.X.Ib || (B.X.Ib = 64);
								var t = B.la(B.X.Ib++, 0);
								return (
									B.Ob(t, {
										open: function (e) {
											e.seekable = m;
										},
										close: function () {
											n && n.buffer && n.buffer.length && n(10);
										},
										M: function (e, r, n, t) {
											for (var a = 0, f = 0; f < t; f++) {
												var o;
												try {
													o = i();
												} catch (e) {
													d(new B.e(U.ha));
												}
												if (
													(o === g && 0 === a && d(new B.e(U.Ca)),
													o === k || o === g)
												)
													break;
												a++, (r[n + f] = o);
											}
											return a && (e.g.timestamp = Date.now()), a;
										},
										write: function (e, r, i, t) {
											for (var a = 0; a < t; a++)
												try {
													n(r[i + a]);
												} catch (e) {
													d(new B.e(U.ha));
												}
											return t && (e.g.timestamp = Date.now()), a;
										},
									}),
									B.lb(e, r, t)
								);
							},
							kd: function (e, r, i) {
								return (
									(e = X("string" == typeof e ? e : B.da(e), r)), B.ca(i, e)
								);
							},
							mc: function (e) {
								if (e.Gb || e.Dd || e.link || e.k) return i;
								var r = i;
								if (
									("undefined" != typeof XMLHttpRequest &&
										d(
											Error(
												"Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread."
											)
										),
									p.read)
								)
									try {
										(e.k = Va(p.read(e.url), i)), (e.q = e.k.length);
									} catch (e) {
										r = m;
									}
								else d(Error("Cannot load without read() or XMLHttpRequest."));
								return r || V(U.ha), r;
							},
							jd: function (e, r, n, t, a) {
								function f() {
									(this.Hb = m), (this.Za = []);
								}
								if (
									((f.prototype.get = function (e) {
										if (!(e > this.length - 1 || 0 > e)) {
											var r = e % this.cd;
											return this.yd((e / this.cd) | 0)[r];
										}
									}),
									(f.prototype.Wd = function (e) {
										this.yd = e;
									}),
									(f.prototype.bc = function () {
										var e = new XMLHttpRequest();
										e.open("HEAD", n, m),
											e.send(k),
											(200 <= e.status && 300 > e.status) ||
												304 === e.status ||
												d(
													Error("Couldn't load " + n + ". Status: " + e.status)
												);
										var r,
											t = Number(e.getResponseHeader("Content-length")),
											a = 1048576;
										((r = e.getResponseHeader("Accept-Ranges")) &&
											"bytes" === r) ||
											(a = t);
										var f = this;
										f.Wd(function (e) {
											var r = e * a,
												o = (e + 1) * a - 1,
												o = Math.min(o, t - 1);
											if ("undefined" == typeof f.Za[e]) {
												var s = f.Za;
												r > o &&
													d(
														Error(
															"invalid range (" +
																r +
																", " +
																o +
																") or no bytes requested!"
														)
													),
													o > t - 1 &&
														d(
															Error(
																"only " +
																	t +
																	" bytes available! programmer error!"
															)
														);
												var u = new XMLHttpRequest();
												u.open("GET", n, m),
													t !== a &&
														u.setRequestHeader("Range", "bytes=" + r + "-" + o),
													"undefined" != typeof Uint8Array &&
														(u.responseType = "arraybuffer"),
													u.overrideMimeType &&
														u.overrideMimeType(
															"text/plain; charset=x-user-defined"
														),
													u.send(k),
													(200 <= u.status && 300 > u.status) ||
														304 === u.status ||
														d(
															Error(
																"Couldn't load " + n + ". Status: " + u.status
															)
														),
													(r =
														u.response !== g
															? new Uint8Array(u.response || [])
															: Va(u.responseText || "", i)),
													(s[e] = r);
											}
											return (
												"undefined" == typeof f.Za[e] &&
													d(Error("doXHR failed!")),
												f.Za[e]
											);
										}),
											(this.Uc = t),
											(this.Tc = a),
											(this.Hb = i);
									}),
									"undefined" != typeof XMLHttpRequest)
								) {
									ca ||
										d(
											"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc"
										);
									var o = new f();
									Object.defineProperty(o, "length", {
										get: function () {
											return this.Hb || this.bc(), this.Uc;
										},
									}),
										Object.defineProperty(o, "chunkSize", {
											get: function () {
												return this.Hb || this.bc(), this.Tc;
											},
										}),
										(o = { Gb: m, k: o });
								} else o = { Gb: m, url: n };
								var s = B.gd(e, r, o, t, a);
								o.k ? (s.k = o.k) : o.url && ((s.k = k), (s.url = o.url)),
									Object.defineProperty(s, "usedBytes", {
										get: function () {
											return this.k.length;
										},
									});
								var u = {};
								return (
									Object.keys(s.p).forEach(function (e) {
										var r = s.p[e];
										u[e] = function () {
											return B.mc(s) || d(new B.e(U.ha)), r.apply(k, arguments);
										};
									}),
									(u.M = function (e, r, i, n, t) {
										if (
											(B.mc(s) || d(new B.e(U.ha)), (e = e.g.k), t >= e.length)
										)
											return 0;
										if (((n = Math.min(e.length - t, n)), w(0 <= n), e.slice))
											for (var a = 0; a < n; a++) r[i + a] = e[t + a];
										else for (a = 0; a < n; a++) r[i + a] = e.get(t + a);
										return n;
									}),
									(s.p = u),
									s
								);
							},
							md: function (e, r, t, a, f, o, s, u, l) {
								function c() {
									rb =
										document.pointerLockElement === d ||
										document.mozPointerLockElement === d ||
										document.webkitPointerLockElement === d ||
										document.msPointerLockElement === d;
								}
								function b(n) {
									function t(i) {
										u || B.xb(e, r, i, a, f, l), o && o(), Za();
									}
									var c = m;
									p.preloadPlugins.forEach(function (e) {
										!c &&
											e.canHandle(h) &&
											(e.handle(n, h, t, function () {
												s && s(), Za();
											}),
											(c = i));
									}),
										c || t(n);
								}
								if ((p.preloadPlugins || (p.preloadPlugins = []), !tb)) {
									tb = i;
									try {
										new Blob(), (ub = i);
									} catch (e) {
										(ub = m),
											console.log(
												"warning: no blob constructor, cannot create blobs with mimetypes"
											);
									}
									(vb =
										"undefined" != typeof MozBlobBuilder
											? MozBlobBuilder
											: "undefined" != typeof WebKitBlobBuilder
											? WebKitBlobBuilder
											: ub
											? k
											: console.log("warning: no BlobBuilder")),
										(wb =
											"undefined" != typeof window
												? window.URL
													? window.URL
													: window.webkitURL
												: g),
										!p.xc &&
											"undefined" == typeof wb &&
											(console.log(
												"warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."
											),
											(p.xc = i)),
										p.preloadPlugins.push({
											canHandle: function (e) {
												return !p.xc && /\.(jpg|jpeg|png|bmp)$/i.test(e);
											},
											handle: function (e, r, i, n) {
												var t = k;
												if (ub)
													try {
														(t = new Blob([e], { type: xb(r) })),
															t.size !== e.length &&
																(t = new Blob([new Uint8Array(e).buffer], {
																	type: xb(r),
																}));
													} catch (e) {
														z.Aa(
															"Blob constructor present but fails: " +
																e +
																"; falling back to blob builder"
														);
													}
												t ||
													((t = new vb()),
													t.append(new Uint8Array(e).buffer),
													(t = t.getBlob()));
												var a = wb.createObjectURL(t),
													f = new Image();
												(f.onload = function () {
													w(f.complete, "Image " + r + " could not be decoded");
													var n = document.createElement("canvas");
													(n.width = f.width),
														(n.height = f.height),
														n.getContext("2d").drawImage(f, 0, 0),
														(p.preloadedImages[r] = n),
														wb.revokeObjectURL(a),
														i && i(e);
												}),
													(f.onerror = function () {
														console.log("Image " + a + " could not be decoded"),
															n && n();
													}),
													(f.src = a);
											},
										}),
										p.preloadPlugins.push({
											canHandle: function (e) {
												return (
													!p.Jg &&
													e.substr(-4) in { ".ogg": 1, ".wav": 1, ".mp3": 1 }
												);
											},
											handle: function (e, r, n, t) {
												function a(t) {
													o || ((o = i), (p.preloadedAudios[r] = t), n && n(e));
												}
												function f() {
													o ||
														((o = i),
														(p.preloadedAudios[r] = new Audio()),
														t && t());
												}
												var o = m;
												if (!ub) return f();
												try {
													var s = new Blob([e], { type: xb(r) });
												} catch (e) {
													return f();
												}
												var s = wb.createObjectURL(s),
													u = new Audio();
												u.addEventListener(
													"canplaythrough",
													function () {
														a(u);
													},
													m
												),
													(u.onerror = function () {
														if (!o) {
															console.log(
																"warning: browser could not fully decode audio " +
																	r +
																	", trying slower base64 approach"
															);
															for (
																var i = "", n = 0, t = 0, f = 0;
																f < e.length;
																f++
															)
																for (n = (n << 8) | e[f], t += 8; 6 <= t; )
																	var s = (n >> (t - 6)) & 63,
																		t = t - 6,
																		i =
																			i +
																			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
																				s
																			];
															2 == t
																? ((i +=
																		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
																			(3 & n) << 4
																		]),
																  (i += "=="))
																: 4 == t &&
																  ((i +=
																		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
																			(15 & n) << 2
																		]),
																  (i += "=")),
																(u.src =
																	"data:audio/x-" +
																	r.substr(-3) +
																	";base64," +
																	i),
																a(u);
														}
													}),
													(u.src = s),
													(p.noExitRuntime = i),
													setTimeout(function () {
														H || a(u);
													}, 1e4);
											},
										});
									var d = p.canvas;
									d &&
										((d.Pb =
											d.requestPointerLock ||
											d.mozRequestPointerLock ||
											d.webkitRequestPointerLock ||
											d.msRequestPointerLock ||
											n()),
										(d.kc =
											document.exitPointerLock ||
											document.mozExitPointerLock ||
											document.webkitExitPointerLock ||
											document.msExitPointerLock ||
											n()),
										(d.kc = d.kc.bind(document)),
										document.addEventListener("pointerlockchange", c, m),
										document.addEventListener("mozpointerlockchange", c, m),
										document.addEventListener("webkitpointerlockchange", c, m),
										document.addEventListener("mspointerlockchange", c, m),
										p.elementPointerLock &&
											d.addEventListener(
												"click",
												function (e) {
													!rb && d.Pb && (d.Pb(), e.preventDefault());
												},
												m
											));
								}
								var h = r ? gb(X(e, r)) : e;
								Ya(),
									"string" == typeof t
										? yb(
												t,
												function (e) {
													b(e);
												},
												s
										  )
										: b(t);
							},
							indexedDB: function () {
								return (
									window.indexedDB ||
									window.mozIndexedDB ||
									window.webkitIndexedDB ||
									window.msIndexedDB
								);
							},
							Ub: function () {
								return "EM_FS_" + window.location.pathname;
							},
							Vb: 20,
							Ba: "FILE_DATA",
							Og: function (e, r, i) {
								var r = r || n(),
									i = i || n(),
									t = B.indexedDB();
								try {
									var a = t.open(B.Ub(), B.Vb);
								} catch (e) {
									return i(e);
								}
								(a.Ld = function () {
									console.log("creating db"), a.result.createObjectStore(B.Ba);
								}),
									(a.onsuccess = function () {
										var n = a.result.transaction([B.Ba], "readwrite"),
											t = n.objectStore(B.Ba),
											f = 0,
											o = 0,
											s = e.length;
										e.forEach(function (e) {
											(e = t.put(B.vb(e).object.k, e)),
												(e.onsuccess = function () {
													f++, f + o == s && (0 == o ? r() : i());
												}),
												(e.onerror = function () {
													o++, f + o == s && (0 == o ? r() : i());
												});
										}),
											(n.onerror = i);
									}),
									(a.onerror = i);
							},
							Dg: function (e, r, t) {
								var r = r || n(),
									t = t || n(),
									a = B.indexedDB();
								try {
									var f = a.open(B.Ub(), B.Vb);
								} catch (e) {
									return t(e);
								}
								(f.Ld = t),
									(f.onsuccess = function () {
										var n = f.result;
										try {
											var a = n.transaction([B.Ba], "readonly");
										} catch (e) {
											return void t(e);
										}
										var o = a.objectStore(B.Ba),
											s = 0,
											u = 0,
											l = e.length;
										e.forEach(function (e) {
											var n = o.get(e);
											(n.onsuccess = function () {
												B.vb(e).Ab && B.za(e),
													B.xb(eb(e), W(e), n.result, i, i, i),
													s++,
													s + u == l && (0 == u ? r() : t());
											}),
												(n.onerror = function () {
													u++, s + u == l && (0 == u ? r() : t());
												});
										}),
											(a.onerror = t);
									}),
									(f.onerror = t);
							},
						},
						Z = {
							F: function () {
								return (
									(p.websocket =
										p.websocket && "object" == typeof p.websocket
											? p.websocket
											: {}),
									(p.websocket.tb = {}),
									(p.websocket.on = function (e, r) {
										return "function" == typeof r && (this.tb[e] = r), this;
									}),
									(p.websocket.P = function (e, r) {
										"function" == typeof this.tb[e] && this.tb[e].call(this, r);
									}),
									B.createNode(k, "/", 16895, 0)
								);
							},
							nd: function (e, r, i) {
								return (
									i && w((1 == r) == (6 == i)),
									(e = {
										qd: e,
										type: r,
										protocol: i,
										G: k,
										error: k,
										Ma: {},
										Kb: [],
										ua: [],
										wa: Z.L,
									}),
									(r = Z.mb()),
									(i = B.createNode(Z.root, r, 49152, 0)),
									(i.va = e),
									(r = B.fc({
										path: r,
										g: i,
										D: B.wc("r+"),
										seekable: m,
										p: Z.p,
									})),
									(e.A = r),
									e
								);
							},
							wd: function (e) {
								return (e = B.qa(e)), e && B.Ed(e.g.mode) ? e.g.va : k;
							},
							p: {
								zc: function (e) {
									return (e = e.g.va), e.wa.zc(e);
								},
								Ha: function (e, r, i) {
									return (e = e.g.va), e.wa.Ha(e, r, i);
								},
								M: function (e, r, i, n) {
									return (
										(e = e.g.va),
										(n = e.wa.Rd(e, n))
											? (r.set(n.buffer, i), n.buffer.length)
											: 0
									);
								},
								write: function (e, r, i, n) {
									return (e = e.g.va), e.wa.Vd(e, r, i, n);
								},
								close: function (e) {
									(e = e.g.va), e.wa.close(e);
								},
							},
							mb: function () {
								return Z.mb.gc || (Z.mb.gc = 0), "socket[" + Z.mb.gc++ + "]";
							},
							L: {
								$a: function (e, r, i) {
									var n;
									if (("object" == typeof r && ((n = r), (i = r = k)), n))
										n._socket
											? ((r = n._socket.remoteAddress),
											  (i = n._socket.remotePort))
											: ((i = /ws[s]?:\/\/([^:]+):(\d+)/.exec(n.url)) ||
													d(
														Error(
															"WebSocket URL must be in the format ws(s)://address:port"
														)
													),
											  (r = i[1]),
											  (i = parseInt(i[2], 10)));
									else
										try {
											var a = p.websocket && "object" == typeof p.websocket,
												f = "ws:#".replace("#", "//");
											if (
												(a &&
													"string" == typeof p.websocket.url &&
													(f = p.websocket.url),
												"ws://" === f || "wss://" === f)
											)
												var o = r.split("/"),
													f = f + o[0] + ":" + i + "/" + o.slice(1).join("/");
											(o = "binary"),
												a &&
													"string" == typeof p.websocket.subprotocol &&
													(o = p.websocket.subprotocol);
											var o = o.replace(/^ +| +$/g, "").split(/ *, */),
												s = t ? { protocol: o.toString() } : o;
											(n = new (t ? null("ws") : window.WebSocket)(f, s)),
												(n.binaryType = "arraybuffer");
										} catch (e) {
											d(new B.e(U.Yb));
										}
									return (
										(r = { W: r, port: i, o: n, ab: [] }),
										Z.L.$b(e, r),
										Z.L.zd(e, r),
										2 === e.type &&
											"undefined" != typeof e.ya &&
											r.ab.push(
												new Uint8Array([
													255,
													255,
													255,
													255,
													112,
													111,
													114,
													116,
													(65280 & e.ya) >> 8,
													255 & e.ya,
												])
											),
										r
									);
								},
								gb: function (e, r, i) {
									return e.Ma[r + ":" + i];
								},
								$b: function (e, r) {
									e.Ma[r.W + ":" + r.port] = r;
								},
								Bc: function (e, r) {
									delete e.Ma[r.W + ":" + r.port];
								},
								zd: function (e, r) {
									function n() {
										p.websocket.P("open", e.A.C);
										try {
											for (var i = r.ab.shift(); i; )
												r.o.send(i), (i = r.ab.shift());
										} catch (e) {
											r.o.close();
										}
									}
									function a(i) {
										w("string" != typeof i && i.byteLength !== g);
										var i = new Uint8Array(i),
											n = f;
										(f = m),
											n &&
											10 === i.length &&
											255 === i[0] &&
											255 === i[1] &&
											255 === i[2] &&
											255 === i[3] &&
											112 === i[4] &&
											111 === i[5] &&
											114 === i[6] &&
											116 === i[7]
												? ((i = (i[8] << 8) | i[9]),
												  Z.L.Bc(e, r),
												  (r.port = i),
												  Z.L.$b(e, r))
												: (e.ua.push({ W: r.W, port: r.port, data: i }),
												  p.websocket.P("message", e.A.C));
									}
									var f = i;
									t
										? (r.o.on("open", n),
										  r.o.on("message", function (e, r) {
												r.binary && a(new Uint8Array(e).buffer);
										  }),
										  r.o.on("close", function () {
												p.websocket.P("close", e.A.C);
										  }),
										  r.o.on("error", function () {
												(e.error = U.Wb),
													p.websocket.P("error", [
														e.A.C,
														e.error,
														"ECONNREFUSED: Connection refused",
													]);
										  }))
										: ((r.o.onopen = n),
										  (r.o.onclose = function () {
												p.websocket.P("close", e.A.C);
										  }),
										  (r.o.onmessage = function (e) {
												a(e.data);
										  }),
										  (r.o.onerror = function () {
												(e.error = U.Wb),
													p.websocket.P("error", [
														e.A.C,
														e.error,
														"ECONNREFUSED: Connection refused",
													]);
										  }));
								},
								zc: function (e) {
									if (1 === e.type && e.G) return e.Kb.length ? 65 : 0;
									var r = 0,
										i = 1 === e.type ? Z.L.gb(e, e.Y, e.Z) : k;
									return (
										(e.ua.length ||
											!i ||
											(i && i.o.readyState === i.o.Pa) ||
											(i && i.o.readyState === i.o.CLOSED)) &&
											(r |= 65),
										(!i || (i && i.o.readyState === i.o.OPEN)) && (r |= 4),
										((i && i.o.readyState === i.o.Pa) ||
											(i && i.o.readyState === i.o.CLOSED)) &&
											(r |= 16),
										r
									);
								},
								Ha: function (e, r, i) {
									switch (r) {
										case 21531:
											return (
												(r = 0),
												e.ua.length && (r = e.ua[0].data.length),
												(K[i >> 2] = r),
												0
											);
										default:
											return U.B;
									}
								},
								close: function (e) {
									if (e.G) {
										try {
											e.G.close();
										} catch (e) {}
										e.G = k;
									}
									for (var r = Object.keys(e.Ma), i = 0; i < r.length; i++) {
										var n = e.Ma[r[i]];
										try {
											n.o.close();
										} catch (e) {}
										Z.L.Bc(e, n);
									}
									return 0;
								},
								bind: function (e, r, i) {
									if (
										(("undefined" != typeof e.Qb ||
											"undefined" != typeof e.ya) &&
											d(new B.e(U.B)),
										(e.Qb = r),
										(e.ya = i || zb()),
										2 === e.type)
									) {
										e.G && (e.G.close(), (e.G = k));
										try {
											e.wa.Fd(e, 0);
										} catch (e) {
											e instanceof B.e || d(e), e.cb !== U.Ta && d(e);
										}
									}
								},
								cg: function (e, r, i) {
									if (
										(e.G && d(new B.e(U.Ta)),
										"undefined" != typeof e.Y && "undefined" != typeof e.Z)
									) {
										var n = Z.L.gb(e, e.Y, e.Z);
										n &&
											(n.o.readyState === n.o.CONNECTING && d(new B.e(U.Hc)),
											d(new B.e(U.Kc)));
									}
									(r = Z.L.$a(e, r, i)),
										(e.Y = r.W),
										(e.Z = r.port),
										d(new B.e(U.Jc));
								},
								Fd: function (e) {
									t || d(new B.e(U.Ta)), e.G && d(new B.e(U.B));
									var r = null("ws").Server;
									(e.G = new r({ host: e.Qb, port: e.ya })),
										p.websocket.P("listen", e.A.C),
										e.G.on("connection", function (r) {
											if (1 === e.type) {
												var i = Z.nd(e.qd, e.type, e.protocol),
													r = Z.L.$a(i, r);
												(i.Y = r.W),
													(i.Z = r.port),
													e.Kb.push(i),
													p.websocket.P("connection", i.A.C);
											} else Z.L.$a(e, r), p.websocket.P("connection", e.A.C);
										}),
										e.G.on("closed", function () {
											p.websocket.P("close", e.A.C), (e.G = k);
										}),
										e.G.on("error", function () {
											(e.error = U.Yb),
												p.websocket.P("error", [
													e.A.C,
													e.error,
													"EHOSTUNREACH: Host is unreachable",
												]);
										});
								},
								accept: function (e) {
									e.G || d(new B.e(U.B));
									var r = e.Kb.shift();
									return (r.A.D = e.A.D), r;
								},
								tg: function (e, r) {
									var i, n;
									return (
										r
											? ((e.Y === g || e.Z === g) && d(new B.e(U.Ra)),
											  (i = e.Y),
											  (n = e.Z))
											: ((i = e.Qb || 0), (n = e.ya || 0)),
										{ W: i, port: n }
									);
								},
								Vd: function (e, r, i, n, t, a) {
									2 === e.type
										? ((t !== g && a !== g) || ((t = e.Y), (a = e.Z)),
										  (t === g || a === g) && d(new B.e(U.Ic)))
										: ((t = e.Y), (a = e.Z));
									var f = Z.L.gb(e, t, a);
									if (
										(1 === e.type &&
											((!f ||
												f.o.readyState === f.o.Pa ||
												f.o.readyState === f.o.CLOSED) &&
												d(new B.e(U.Ra)),
											f.o.readyState === f.o.CONNECTING && d(new B.e(U.Ca))),
										(r =
											r instanceof Array || r instanceof ArrayBuffer
												? r.slice(i, i + n)
												: r.buffer.slice(
														r.byteOffset + i,
														r.byteOffset + i + n
												  )),
										2 === e.type && (!f || f.o.readyState !== f.o.OPEN))
									)
										return (
											(f &&
												f.o.readyState !== f.o.Pa &&
												f.o.readyState !== f.o.CLOSED) ||
												(f = Z.L.$a(e, t, a)),
											f.ab.push(r),
											n
										);
									try {
										return f.o.send(r), n;
									} catch (e) {
										d(new B.e(U.B));
									}
								},
								Rd: function (e, r) {
									1 === e.type && e.G && d(new B.e(U.Ra));
									var i = e.ua.shift();
									if (!i) {
										if (1 === e.type) {
											var n = Z.L.gb(e, e.Y, e.Z);
											if (n) {
												if (
													n.o.readyState === n.o.Pa ||
													n.o.readyState === n.o.CLOSED
												)
													return k;
												d(new B.e(U.Ca));
											}
											d(new B.e(U.Ra));
										}
										d(new B.e(U.Ca));
									}
									var n = i.data.byteLength || i.data.length,
										t = i.data.byteOffset || 0,
										a = i.data.buffer || i.data,
										f = Math.min(r, n),
										o = {
											buffer: new Uint8Array(a, t, f),
											W: i.W,
											port: i.port,
										};
									return (
										1 === e.type &&
											f < n &&
											((i.data = new Uint8Array(a, t + f, n - f)),
											e.ua.unshift(i)),
										o
									);
								},
							},
						};
					(p._strlen = Bb),
						(p._memset = Gb),
						(p._broadwayOnPictureDecoded = Hb),
						(p._broadwayOnHeadersDecoded = Ib);
					var Nb = k,
						Pb = "",
						Tb = 0,
						Mb = k,
						Sb = 0,
						Kb = 0,
						Lb = 0,
						Xb = 0,
						Ub = [],
						Wb = {},
						Ob,
						Vb,
						Yb = m,
						rb = m,
						Zb = m,
						$b = g,
						ac = g,
						bc = 0,
						dc = [],
						tb,
						ub,
						vb,
						wb;
					(p._memcpy = gc),
						B.Zd(),
						R.unshift({
							ja: function () {
								!p.noFSInit && !B.Ga.hb && B.Ga();
							},
						}),
						Pa.push({
							ja: function () {
								B.vc = m;
							},
						}),
						Qa.push({
							ja: function () {
								B.Qd();
							},
						}),
						(p.FS_createFolder = B.hd),
						(p.FS_createPath = B.ld),
						(p.FS_createDataFile = B.xb),
						(p.FS_createPreloadedFile = B.md),
						(p.FS_createLazyFile = B.jd),
						(p.FS_createLink = B.kd),
						(p.FS_createDevice = B.X),
						(bb = z.Ec(4)),
						(K[bb >> 2] = 0),
						R.unshift({ ja: n() }),
						Qa.push({ ja: n() });
					var lb = new z.Da();
					t && (null("fs"), process.platform.match(/^win/)),
						R.push({
							ja: function () {
								Z.root = B.F(Z, {}, k);
							},
						}),
						(Eb.Cc = M([0], "i8", L)),
						(p.requestFullScreen = function (e, r) {
							function t() {
								Yb = m;
								var e = a.parentNode;
								(document.webkitFullScreenElement ||
									document.webkitFullscreenElement ||
									document.mozFullScreenElement ||
									document.mozFullscreenElement ||
									document.fullScreenElement ||
									document.fullscreenElement ||
									document.msFullScreenElement ||
									document.msFullscreenElement ||
									document.webkitCurrentFullScreenElement) === e
									? ((a.cc =
											document.cancelFullScreen ||
											document.mozCancelFullScreen ||
											document.webkitCancelFullScreen ||
											document.msExitFullscreen ||
											document.exitFullscreen ||
											n()),
									  (a.cc = a.cc.bind(document)),
									  $b && a.Pb(),
									  (Yb = i),
									  ac &&
											("undefined" != typeof SDL &&
												((e = Ha[(SDL.screen + 0 * z.ia) >> 2]),
												(K[(SDL.screen + 0 * z.ia) >> 2] = 8388608 | e)),
											ec()))
									: (e.parentNode.insertBefore(a, e),
									  e.parentNode.removeChild(e),
									  ac &&
											("undefined" != typeof SDL &&
												((e = Ha[(SDL.screen + 0 * z.ia) >> 2]),
												(K[(SDL.screen + 0 * z.ia) >> 2] = e & -8388609)),
											ec())),
									p.onFullScreen && p.onFullScreen(Yb),
									fc(a);
							}
							($b = e),
								(ac = r),
								"undefined" == typeof $b && ($b = i),
								"undefined" == typeof ac && (ac = m);
							var a = p.canvas;
							Zb ||
								((Zb = i),
								document.addEventListener("fullscreenchange", t, m),
								document.addEventListener("mozfullscreenchange", t, m),
								document.addEventListener("webkitfullscreenchange", t, m),
								document.addEventListener("MSFullscreenChange", t, m));
							var f = document.createElement("div");
							a.parentNode.insertBefore(f, a),
								f.appendChild(a),
								(f.Td =
									f.requestFullScreen ||
									f.mozRequestFullScreen ||
									f.msRequestFullscreen ||
									(f.webkitRequestFullScreen
										? function () {
												f.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
										  }
										: k)),
								f.Td();
						}),
						(p.requestAnimationFrame = function (e) {
							Qb(e);
						}),
						(p.setCanvasSize = function (e, r, i) {
							fc(p.canvas, e, r), i || ec();
						}),
						(p.pauseMainLoop = function () {
							(Nb = k), Tb++;
						}),
						(p.resumeMainLoop = function () {
							Tb++;
							var e = Kb,
								r = Lb,
								i = Mb;
							(Mb = k), Rb(i, 0, m, Sb), Jb(e, r);
						}),
						(p.getUserMedia = function () {
							window.qc ||
								(window.qc =
									navigator.getUserMedia || navigator.mozGetUserMedia),
								window.qc(g);
						}),
						(Ja = y = z.ub(D)),
						(Ka = Ja + Ma),
						(La = E = z.ub(Ka)),
						w(La < F, "TOTAL_MEMORY not big enough for stack"),
						(p.Xc = {
							Math: Math,
							Int8Array: Int8Array,
							Int16Array: Int16Array,
							Int32Array: Int32Array,
							Uint8Array: Uint8Array,
							Uint16Array: Uint16Array,
							Uint32Array: Uint32Array,
							Float32Array: Float32Array,
							Float64Array: Float64Array,
						}),
						(p.Yc = {
							abort: A,
							assert: w,
							min: va,
							invoke_viiiii: function (e, r, i, n, t, a) {
								try {
									p.dynCall_viiiii(e, r, i, n, t, a);
								} catch (e) {
									"number" != typeof e && "longjmp" !== e && d(e),
										$.setThrew(1, 0);
								}
							},
							_broadwayOnPictureDecoded: Hb,
							_puts: function (e) {
								var r = K[pb >> 2],
									e = Db(e, r);
								return 0 > e ? e : 0 > Eb(10, r) ? -1 : e + 1;
							},
							_fflush: n(),
							_fputc: Eb,
							_send: function (e, r, i) {
								return Z.wd(e) ? Ab(e, r, i) : (V(U.V), -1);
							},
							_pwrite: function (e, r, i, n) {
								if (((e = B.qa(e)), !e)) return V(U.V), -1;
								try {
									return B.write(e, I, r, i, n);
								} catch (e) {
									return B.sc(e), -1;
								}
							},
							_fputs: Db,
							_emscripten_set_main_loop: Rb,
							_abort: function () {
								p.abort();
							},
							___setErrNo: V,
							_sbrk: Fb,
							_mkport: zb,
							_emscripten_set_main_loop_timing: Jb,
							_emscripten_memcpy_big: function (e, r, i) {
								return N.set(N.subarray(r, r + i), e), e;
							},
							_fileno: Cb,
							_broadwayOnHeadersDecoded: Ib,
							_write: Ab,
							_time: function (e) {
								var r = (Date.now() / 1e3) | 0;
								return e && (K[e >> 2] = r), r;
							},
							_sysconf: function (e) {
								switch (e) {
									case 30:
										return 4096;
									case 132:
									case 133:
									case 12:
									case 137:
									case 138:
									case 15:
									case 235:
									case 16:
									case 17:
									case 18:
									case 19:
									case 20:
									case 149:
									case 13:
									case 10:
									case 236:
									case 153:
									case 9:
									case 21:
									case 22:
									case 159:
									case 154:
									case 14:
									case 77:
									case 78:
									case 139:
									case 80:
									case 81:
									case 79:
									case 82:
									case 68:
									case 67:
									case 164:
									case 11:
									case 29:
									case 47:
									case 48:
									case 95:
									case 52:
									case 51:
									case 46:
										return 200809;
									case 27:
									case 246:
									case 127:
									case 128:
									case 23:
									case 24:
									case 160:
									case 161:
									case 181:
									case 182:
									case 242:
									case 183:
									case 184:
									case 243:
									case 244:
									case 245:
									case 165:
									case 178:
									case 179:
									case 49:
									case 50:
									case 168:
									case 169:
									case 175:
									case 170:
									case 171:
									case 172:
									case 97:
									case 76:
									case 32:
									case 173:
									case 35:
										return -1;
									case 176:
									case 177:
									case 7:
									case 155:
									case 8:
									case 157:
									case 125:
									case 126:
									case 92:
									case 93:
									case 129:
									case 130:
									case 131:
									case 94:
									case 91:
										return 1;
									case 74:
									case 60:
									case 69:
									case 70:
									case 4:
										return 1024;
									case 31:
									case 42:
									case 72:
										return 32;
									case 87:
									case 26:
									case 33:
										return 2147483647;
									case 34:
									case 1:
										return 47839;
									case 38:
									case 36:
										return 99;
									case 43:
									case 37:
										return 2048;
									case 0:
										return 2097152;
									case 3:
										return 65536;
									case 28:
										return 32768;
									case 44:
										return 32767;
									case 75:
										return 16384;
									case 39:
										return 1e3;
									case 89:
										return 700;
									case 71:
										return 256;
									case 40:
										return 255;
									case 2:
										return 100;
									case 180:
										return 64;
									case 25:
										return 20;
									case 5:
										return 16;
									case 6:
										return 6;
									case 73:
										return 4;
									case 84:
										return "object" == typeof navigator
											? navigator.hardwareConcurrency || 1
											: 1;
								}
								return V(U.B), -1;
							},
							___errno_location: function () {
								return bb;
							},
							STACKTOP: y,
							STACK_MAX: Ka,
							tempDoublePtr: $a,
							ABORT: H,
							NaN: NaN,
							Infinity: 1 / 0,
						});
					var $ = (function (e, r, i) {
							"use asm";
							var n = new e.Int8Array(i);
							var t = new e.Int16Array(i);
							var a = new e.Int32Array(i);
							var f = new e.Uint8Array(i);
							var o = new e.Uint16Array(i);
							var s = new e.Uint32Array(i);
							var u = new e.Float32Array(i);
							var l = new e.Float64Array(i);
							var c = r.STACKTOP | 0;
							var b = r.STACK_MAX | 0;
							var d = r.tempDoublePtr | 0;
							var h = r.ABORT | 0;
							var p = 0;
							var k = 0;
							var w = 0;
							var m = 0;
							var v = +r.NaN,
								g = +r.Infinity;
							var y = 0,
								B = 0,
								A = 0,
								U = 0,
								S = 0,
								_ = 0,
								M = 0,
								E = 0,
								F = 0;
							var L = 0;
							var C = 0;
							var D = 0;
							var P = 0;
							var R = 0;
							var O = 0;
							var I = 0;
							var T = 0;
							var z = 0;
							var N = 0;
							var x = e.Math.floor;
							var j = e.Math.abs;
							var H = e.Math.sqrt;
							var q = e.Math.pow;
							var Y = e.Math.cos;
							var K = e.Math.sin;
							var V = e.Math.tan;
							var G = e.Math.acos;
							var Z = e.Math.asin;
							var $ = e.Math.atan;
							var X = e.Math.atan2;
							var W = e.Math.exp;
							var J = e.Math.log;
							var Q = e.Math.ceil;
							var ee = e.Math.imul;
							var re = r.abort;
							var ie = r.assert;
							var ne = r.min;
							var te = r.invoke_viiiii;
							var ae = r._broadwayOnPictureDecoded;
							var fe = r._puts;
							var oe = r._fflush;
							var se = r._fputc;
							var ue = r._send;
							var le = r._pwrite;
							var ce = r._fputs;
							var be = r._emscripten_set_main_loop;
							var de = r._abort;
							var he = r.___setErrNo;
							var pe = r._sbrk;
							var ke = r._mkport;
							var we = r._emscripten_set_main_loop_timing;
							var me = r._emscripten_memcpy_big;
							var ve = r._fileno;
							var ge = r._broadwayOnHeadersDecoded;
							var ye = r._write;
							var Be = r._time;
							var Ae = r._sysconf;
							var Ue = r.___errno_location;
							var Se = 0;
							function _e(e, r, i, n, s, u) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								n = n | 0;
								s = s | 0;
								u = u | 0;
								var l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0,
									g = 0,
									y = 0,
									B = 0,
									A = 0,
									U = 0,
									S = 0,
									_ = 0,
									M = 0,
									E = 0,
									F = 0,
									L = 0,
									C = 0,
									D = 0,
									P = 0,
									R = 0,
									O = 0,
									I = 0,
									T = 0,
									z = 0,
									N = 0,
									x = 0,
									j = 0,
									H = 0,
									q = 0,
									Y = 0,
									K = 0,
									V = 0,
									G = 0,
									Z = 0,
									$ = 0;
								$ = c;
								c = (c + 32) | 0;
								Z = $;
								p = a[(s + 4) >> 2] | 0;
								G = ((n >>> 0) / (p >>> 0)) | 0;
								V = G << 4;
								G = (n - (ee(G, p) | 0)) << 4;
								a[(Z + 4) >> 2] = p;
								a[(Z + 8) >> 2] = a[(s + 8) >> 2];
								p = a[e >> 2] | 0;
								do
									if (((p | 0) == 1) | ((p | 0) == 0)) {
										_ = a[(r + 144) >> 2] | 0;
										l = (e + 4) | 0;
										d = a[(e + 200) >> 2] | 0;
										if (
											(d | 0) != 0
												? (a[(d + 4) >> 2] | 0) == (a[l >> 2] | 0)
												: 0
										)
											if ((a[d >> 2] | 0) >>> 0 < 6) {
												h = (d + 152) | 0;
												h = o[h >> 1] | (o[(h + 2) >> 1] << 16);
												b = 1;
												y = h & 65535;
												h = (h >>> 16) & 65535;
												m = a[(d + 104) >> 2] | 0;
											} else {
												b = 1;
												y = 0;
												h = 0;
												m = -1;
											}
										else {
											b = 0;
											y = 0;
											h = 0;
											m = -1;
										}
										d = a[(e + 204) >> 2] | 0;
										if (
											(d | 0) != 0
												? (a[(d + 4) >> 2] | 0) == (a[l >> 2] | 0)
												: 0
										)
											if ((a[d >> 2] | 0) >>> 0 < 6) {
												B = (d + 172) | 0;
												B = o[B >> 1] | (o[(B + 2) >> 1] << 16);
												g = B & 65535;
												k = 1;
												w = a[(d + 108) >> 2] | 0;
												B = (B >>> 16) & 65535;
											} else {
												g = 0;
												k = 1;
												w = -1;
												B = 0;
											}
										else {
											g = 0;
											k = 0;
											w = -1;
											B = 0;
										}
										do
											if (!p)
												if (!(((b | 0) == 0) | ((k | 0) == 0))) {
													if (
														(m | 0) == 0
															? (((h & 65535) << 16) | (y & 65535) | 0) == 0
															: 0
													) {
														d = 0;
														h = 0;
														break;
													}
													if (
														(w | 0) == 0
															? (((B & 65535) << 16) | (g & 65535) | 0) == 0
															: 0
													) {
														d = 0;
														h = 0;
													} else K = 16;
												} else {
													d = 0;
													h = 0;
												}
											else K = 16;
										while (0);
										if ((K | 0) == 16) {
											U = t[(r + 160) >> 1] | 0;
											S = t[(r + 162) >> 1] | 0;
											d = a[(e + 208) >> 2] | 0;
											if (
												(d | 0) != 0
													? (a[(d + 4) >> 2] | 0) == (a[l >> 2] | 0)
													: 0
											)
												if ((a[d >> 2] | 0) >>> 0 < 6) {
													v = (d + 172) | 0;
													p = a[(d + 108) >> 2] | 0;
													v = o[v >> 1] | (o[(v + 2) >> 1] << 16);
													K = 25;
												} else {
													p = -1;
													v = 0;
													K = 25;
												}
											else K = 20;
											do
												if ((K | 0) == 20) {
													p = a[(e + 212) >> 2] | 0;
													if (
														(p | 0) != 0
															? (a[(p + 4) >> 2] | 0) == (a[l >> 2] | 0)
															: 0
													) {
														if ((a[p >> 2] | 0) >>> 0 >= 6) {
															p = -1;
															v = 0;
															K = 25;
															break;
														}
														v = (p + 192) | 0;
														p = a[(p + 112) >> 2] | 0;
														v = o[v >> 1] | (o[(v + 2) >> 1] << 16);
														K = 25;
														break;
													}
													if (((b | 0) == 0) | ((k | 0) != 0)) {
														p = -1;
														v = 0;
														K = 25;
													} else d = y;
												}
											while (0);
											do
												if ((K | 0) == 25) {
													b = (m | 0) == (_ | 0);
													d = (w | 0) == (_ | 0);
													if (
														(((d & 1) + (b & 1) + (((p | 0) == (_ | 0)) & 1)) |
															0) ==
														1
													) {
														if (b | d) {
															d = b ? y : g;
															h = b ? h : B;
															break;
														}
														d = v & 65535;
														h = (v >>> 16) & 65535;
														break;
													}
													d = (y << 16) >> 16;
													l = (g << 16) >> 16;
													p = (v << 16) >> 16;
													if ((g << 16) >> 16 > (y << 16) >> 16) b = l;
													else {
														b = d;
														d = (l | 0) < (d | 0) ? l : d;
													}
													if ((b | 0) < (p | 0)) p = b;
													else p = (d | 0) > (p | 0) ? d : p;
													d = (h << 16) >> 16;
													b = (B << 16) >> 16;
													l = v >> 16;
													if ((B << 16) >> 16 > (h << 16) >> 16) h = b;
													else {
														h = d;
														d = (b | 0) < (d | 0) ? b : d;
													}
													if ((h | 0) >= (l | 0)) h = (d | 0) > (l | 0) ? d : l;
													d = p & 65535;
													h = h & 65535;
												}
											while (0);
											d = ((d & 65535) + (U & 65535)) | 0;
											h = ((h & 65535) + (S & 65535)) | 0;
											if (((((d << 16) >> 16) + 8192) | 0) >>> 0 > 16383) {
												D = 1;
												c = $;
												return D | 0;
											}
											if (((((h << 16) >> 16) + 2048) | 0) >>> 0 > 4095) {
												D = 1;
												c = $;
												return D | 0;
											} else {
												d = d & 65535;
												h = h & 65535;
											}
										}
										l = Ye(i, _) | 0;
										if (!l) {
											D = 1;
											c = $;
											return D | 0;
										} else {
											D = (e + 132) | 0;
											L = (e + 136) | 0;
											F = (e + 140) | 0;
											E = (e + 144) | 0;
											M = (e + 148) | 0;
											S = (e + 152) | 0;
											U = (e + 156) | 0;
											A = (e + 160) | 0;
											B = (e + 164) | 0;
											y = (e + 168) | 0;
											b = (e + 172) | 0;
											p = (e + 176) | 0;
											k = (e + 180) | 0;
											w = (e + 184) | 0;
											m = (e + 188) | 0;
											C = (e + 192) | 0;
											t[(e + 192) >> 1] = d;
											t[(e + 194) >> 1] = h;
											C = o[C >> 1] | (o[(C + 2) >> 1] << 16);
											t[m >> 1] = C;
											t[(m + 2) >> 1] = C >>> 16;
											t[w >> 1] = C;
											t[(w + 2) >> 1] = C >>> 16;
											t[k >> 1] = C;
											t[(k + 2) >> 1] = C >>> 16;
											t[p >> 1] = C;
											t[(p + 2) >> 1] = C >>> 16;
											t[b >> 1] = C;
											t[(b + 2) >> 1] = C >>> 16;
											t[y >> 1] = C;
											t[(y + 2) >> 1] = C >>> 16;
											t[B >> 1] = C;
											t[(B + 2) >> 1] = C >>> 16;
											t[A >> 1] = C;
											t[(A + 2) >> 1] = C >>> 16;
											t[U >> 1] = C;
											t[(U + 2) >> 1] = C >>> 16;
											t[S >> 1] = C;
											t[(S + 2) >> 1] = C >>> 16;
											t[M >> 1] = C;
											t[(M + 2) >> 1] = C >>> 16;
											t[E >> 1] = C;
											t[(E + 2) >> 1] = C >>> 16;
											t[F >> 1] = C;
											t[(F + 2) >> 1] = C >>> 16;
											t[L >> 1] = C;
											t[(L + 2) >> 1] = C >>> 16;
											t[D >> 1] = C;
											t[(D + 2) >> 1] = C >>> 16;
											a[(e + 100) >> 2] = _;
											a[(e + 104) >> 2] = _;
											a[(e + 108) >> 2] = _;
											a[(e + 112) >> 2] = _;
											a[(e + 116) >> 2] = l;
											a[(e + 120) >> 2] = l;
											a[(e + 124) >> 2] = l;
											a[(e + 128) >> 2] = l;
											a[Z >> 2] = l;
											Ne(u, (e + 132) | 0, Z, G, V, 0, 0, 16, 16);
											break;
										}
									} else if ((p | 0) == 3) {
										A = t[(r + 160) >> 1] | 0;
										U = t[(r + 162) >> 1] | 0;
										E = a[(r + 144) >> 2] | 0;
										g = (e + 4) | 0;
										h = a[(e + 200) >> 2] | 0;
										if (
											(h | 0) != 0
												? (a[(h + 4) >> 2] | 0) == (a[g >> 2] | 0)
												: 0
										)
											if ((a[h >> 2] | 0) >>> 0 < 6) {
												B = (h + 152) | 0;
												B = o[B >> 1] | (o[(B + 2) >> 1] << 16);
												d = 1;
												m = B & 65535;
												B = (B >>> 16) & 65535;
												h = a[(h + 104) >> 2] | 0;
											} else {
												d = 1;
												m = 0;
												B = 0;
												h = -1;
											}
										else {
											d = 0;
											m = 0;
											B = 0;
											h = -1;
										}
										e: do
											if ((h | 0) == (E | 0)) {
												d = m;
												h = B;
											} else {
												h = a[(e + 204) >> 2] | 0;
												if (
													(h | 0) != 0
														? (a[(h + 4) >> 2] | 0) == (a[g >> 2] | 0)
														: 0
												)
													if ((a[h >> 2] | 0) >>> 0 < 6) {
														D = (h + 172) | 0;
														D = o[D >> 1] | (o[(D + 2) >> 1] << 16);
														v = (h + 188) | 0;
														p = a[(h + 108) >> 2] | 0;
														l = a[(h + 112) >> 2] | 0;
														d = D & 65535;
														h = (D >>> 16) & 65535;
														v = o[v >> 1] | (o[(v + 2) >> 1] << 16);
													} else {
														p = -1;
														l = -1;
														d = 0;
														h = 0;
														v = 0;
													}
												else K = 107;
												do
													if ((K | 0) == 107) {
														h = a[(e + 212) >> 2] | 0;
														if (
															(h | 0) != 0
																? (a[(h + 4) >> 2] | 0) == (a[g >> 2] | 0)
																: 0
														) {
															if ((a[h >> 2] | 0) >>> 0 >= 6) {
																p = -1;
																l = -1;
																d = 0;
																h = 0;
																v = 0;
																break;
															}
															v = (h + 192) | 0;
															p = -1;
															l = a[(h + 112) >> 2] | 0;
															d = 0;
															h = 0;
															v = o[v >> 1] | (o[(v + 2) >> 1] << 16);
															break;
														}
														if (!d) {
															p = -1;
															l = -1;
															d = 0;
															h = 0;
															v = 0;
														} else {
															d = m;
															h = B;
															break e;
														}
													}
												while (0);
												b = (p | 0) == (E | 0);
												if ((((b & 1) + (((l | 0) == (E | 0)) & 1)) | 0) == 1) {
													if (b) break;
													d = v & 65535;
													h = (v >>> 16) & 65535;
													break;
												}
												l = (m << 16) >> 16;
												p = (d << 16) >> 16;
												k = (v << 16) >> 16;
												if ((d << 16) >> 16 > (m << 16) >> 16) {
													b = p;
													d = l;
												} else {
													b = l;
													d = (p | 0) < (l | 0) ? p : l;
												}
												if ((b | 0) < (k | 0)) k = b;
												else k = (d | 0) > (k | 0) ? d : k;
												d = (B << 16) >> 16;
												b = (h << 16) >> 16;
												l = v >> 16;
												if ((h << 16) >> 16 > (B << 16) >> 16) h = b;
												else {
													h = d;
													d = (b | 0) < (d | 0) ? b : d;
												}
												if ((h | 0) >= (l | 0)) h = (d | 0) > (l | 0) ? d : l;
												d = k & 65535;
												h = h & 65535;
											}
										while (0);
										d = ((d & 65535) + (A & 65535)) | 0;
										h = ((h & 65535) + (U & 65535)) | 0;
										if (((((d << 16) >> 16) + 8192) | 0) >>> 0 > 16383) {
											D = 1;
											c = $;
											return D | 0;
										}
										if (((((h << 16) >> 16) + 2048) | 0) >>> 0 > 4095) {
											D = 1;
											c = $;
											return D | 0;
										}
										b = Ye(i, E) | 0;
										if (!b) {
											D = 1;
											c = $;
											return D | 0;
										}
										A = (e + 132) | 0;
										S = (e + 136) | 0;
										_ = (e + 140) | 0;
										U = (e + 144) | 0;
										D = (e + 164) | 0;
										C = (e + 168) | 0;
										L = (e + 172) | 0;
										B = (e + 176) | 0;
										t[(e + 176) >> 1] = d;
										t[(e + 178) >> 1] = h;
										B = o[B >> 1] | (o[(B + 2) >> 1] << 16);
										t[L >> 1] = B;
										t[(L + 2) >> 1] = B >>> 16;
										t[C >> 1] = B;
										t[(C + 2) >> 1] = B >>> 16;
										t[D >> 1] = B;
										t[(D + 2) >> 1] = B >>> 16;
										t[U >> 1] = B;
										t[(U + 2) >> 1] = B >>> 16;
										t[_ >> 1] = B;
										t[(_ + 2) >> 1] = B >>> 16;
										t[S >> 1] = B;
										t[(S + 2) >> 1] = B >>> 16;
										t[A >> 1] = B;
										t[(A + 2) >> 1] = B >>> 16;
										a[(e + 100) >> 2] = E;
										a[(e + 108) >> 2] = E;
										A = (e + 116) | 0;
										a[A >> 2] = b;
										a[(e + 124) >> 2] = b;
										S = t[(r + 164) >> 1] | 0;
										_ = t[(r + 166) >> 1] | 0;
										U = a[(r + 148) >> 2] | 0;
										h = a[(e + 208) >> 2] | 0;
										if (
											(h | 0) != 0
												? (a[(h + 4) >> 2] | 0) == (a[g >> 2] | 0)
												: 0
										)
											if ((a[h >> 2] | 0) >>> 0 < 6) {
												w = (h + 172) | 0;
												h = a[(h + 108) >> 2] | 0;
												p = 1;
												w = o[w >> 1] | (o[(w + 2) >> 1] << 16);
											} else {
												h = -1;
												p = 1;
												w = 0;
											}
										else {
											h = a[(e + 204) >> 2] | 0;
											if (
												(h | 0) != 0
													? (a[(h + 4) >> 2] | 0) == (a[g >> 2] | 0)
													: 0
											)
												if ((a[h >> 2] | 0) >>> 0 < 6) {
													w = (h + 176) | 0;
													h = a[(h + 108) >> 2] | 0;
													p = 1;
													w = o[w >> 1] | (o[(w + 2) >> 1] << 16);
												} else {
													h = -1;
													p = 1;
													w = 0;
												}
											else {
												h = -1;
												p = 0;
												w = 0;
											}
										}
										do
											if ((h | 0) != (U | 0)) {
												m = B & 65535;
												h = B >>> 16;
												y = h & 65535;
												d = a[(e + 204) >> 2] | 0;
												if (
													(d | 0) != 0
														? (a[(d + 4) >> 2] | 0) == (a[g >> 2] | 0)
														: 0
												)
													if ((a[d >> 2] | 0) >>> 0 < 6) {
														g = (d + 188) | 0;
														g = o[g >> 1] | (o[(g + 2) >> 1] << 16);
														p = a[(d + 112) >> 2] | 0;
														l = g & 65535;
														g = (g >>> 16) & 65535;
													} else {
														p = -1;
														l = 0;
														g = 0;
													}
												else if (!p) {
													b = B;
													break;
												} else {
													p = -1;
													l = 0;
													g = 0;
												}
												b = (E | 0) == (U | 0);
												d = (p | 0) == (U | 0);
												if ((((d & 1) + (b & 1)) | 0) == 1) {
													if (b) {
														b = B;
														break;
													}
													if (d) {
														h = g & 65535;
														b = (h << 16) | (l & 65535);
														break;
													} else {
														b = w;
														h = w >>> 16;
														break;
													}
												}
												h = (B << 16) >> 16;
												p = (l << 16) >> 16;
												k = (w << 16) >> 16;
												if ((l << 16) >> 16 > (m << 16) >> 16) b = p;
												else {
													b = h;
													h = (p | 0) < (h | 0) ? p : h;
												}
												if ((b | 0) >= (k | 0)) b = (h | 0) > (k | 0) ? h : k;
												d = B >> 16;
												l = (g << 16) >> 16;
												p = w >> 16;
												if ((g << 16) >> 16 > (y << 16) >> 16) h = l;
												else {
													h = d;
													d = (l | 0) < (d | 0) ? l : d;
												}
												if ((h | 0) >= (p | 0)) h = (d | 0) > (p | 0) ? d : p;
											} else {
												b = w;
												h = w >>> 16;
											}
										while (0);
										b = ((b & 65535) + (S & 65535)) | 0;
										d = ((h & 65535) + (_ & 65535)) | 0;
										if (((((b << 16) >> 16) + 8192) | 0) >>> 0 > 16383) {
											D = 1;
											c = $;
											return D | 0;
										}
										if (((((d << 16) >> 16) + 2048) | 0) >>> 0 > 4095) {
											D = 1;
											c = $;
											return D | 0;
										}
										h = Ye(i, U) | 0;
										if (!h) {
											D = 1;
											c = $;
											return D | 0;
										} else {
											D = (e + 148) | 0;
											L = (e + 152) | 0;
											F = (e + 156) | 0;
											E = (e + 160) | 0;
											M = (e + 180) | 0;
											_ = (e + 184) | 0;
											S = (e + 188) | 0;
											C = (e + 192) | 0;
											t[(e + 192) >> 1] = b;
											t[(e + 194) >> 1] = d;
											C = o[C >> 1] | (o[(C + 2) >> 1] << 16);
											t[S >> 1] = C;
											t[(S + 2) >> 1] = C >>> 16;
											t[_ >> 1] = C;
											t[(_ + 2) >> 1] = C >>> 16;
											t[M >> 1] = C;
											t[(M + 2) >> 1] = C >>> 16;
											t[E >> 1] = C;
											t[(E + 2) >> 1] = C >>> 16;
											t[F >> 1] = C;
											t[(F + 2) >> 1] = C >>> 16;
											t[L >> 1] = C;
											t[(L + 2) >> 1] = C >>> 16;
											t[D >> 1] = C;
											t[(D + 2) >> 1] = C >>> 16;
											a[(e + 104) >> 2] = U;
											a[(e + 112) >> 2] = U;
											C = (e + 120) | 0;
											a[C >> 2] = h;
											a[(e + 128) >> 2] = h;
											a[Z >> 2] = a[A >> 2];
											Ne(u, (e + 132) | 0, Z, G, V, 0, 0, 8, 16);
											a[Z >> 2] = a[C >> 2];
											Ne(u, D, Z, G, V, 8, 0, 8, 16);
											break;
										}
									} else if ((p | 0) == 2) {
										S = t[(r + 160) >> 1] | 0;
										_ = t[(r + 162) >> 1] | 0;
										E = a[(r + 144) >> 2] | 0;
										M = (e + 4) | 0;
										h = a[(e + 204) >> 2] | 0;
										if (
											(h | 0) != 0
												? (a[(h + 4) >> 2] | 0) == (a[M >> 2] | 0)
												: 0
										)
											if ((a[h >> 2] | 0) >>> 0 < 6) {
												B = (h + 172) | 0;
												B = o[B >> 1] | (o[(B + 2) >> 1] << 16);
												b = 1;
												h = a[(h + 108) >> 2] | 0;
												w = B & 65535;
												B = (B >>> 16) & 65535;
											} else {
												b = 1;
												h = -1;
												w = 0;
												B = 0;
											}
										else {
											b = 0;
											h = -1;
											w = 0;
											B = 0;
										}
										e: do
											if ((h | 0) == (E | 0)) {
												d = w;
												h = B;
											} else {
												d = a[(e + 200) >> 2] | 0;
												if (
													(d | 0) != 0
														? (a[(d + 4) >> 2] | 0) == (a[M >> 2] | 0)
														: 0
												)
													if ((a[d >> 2] | 0) >>> 0 < 6) {
														h = (d + 152) | 0;
														h = o[h >> 1] | (o[(h + 2) >> 1] << 16);
														k = 1;
														m = h & 65535;
														h = (h >>> 16) & 65535;
														p = a[(d + 104) >> 2] | 0;
													} else {
														k = 1;
														m = 0;
														h = 0;
														p = -1;
													}
												else {
													k = 0;
													m = 0;
													h = 0;
													p = -1;
												}
												d = a[(e + 208) >> 2] | 0;
												if (
													(d | 0) != 0
														? (a[(d + 4) >> 2] | 0) == (a[M >> 2] | 0)
														: 0
												)
													if ((a[d >> 2] | 0) >>> 0 < 6) {
														v = (d + 172) | 0;
														d = a[(d + 108) >> 2] | 0;
														v = o[v >> 1] | (o[(v + 2) >> 1] << 16);
													} else {
														d = -1;
														v = 0;
													}
												else K = 54;
												do
													if ((K | 0) == 54) {
														d = a[(e + 212) >> 2] | 0;
														if (
															(d | 0) != 0
																? (a[(d + 4) >> 2] | 0) == (a[M >> 2] | 0)
																: 0
														) {
															if ((a[d >> 2] | 0) >>> 0 >= 6) {
																d = -1;
																v = 0;
																break;
															}
															v = (d + 192) | 0;
															d = a[(d + 112) >> 2] | 0;
															v = o[v >> 1] | (o[(v + 2) >> 1] << 16);
															break;
														}
														if (((k | 0) == 0) | ((b | 0) != 0)) {
															d = -1;
															v = 0;
														} else {
															d = m;
															break e;
														}
													}
												while (0);
												b = (p | 0) == (E | 0);
												if ((((((d | 0) == (E | 0)) & 1) + (b & 1)) | 0) == 1) {
													if (b) {
														d = b ? m : w;
														h = b ? h : B;
														break;
													}
													d = v & 65535;
													h = (v >>> 16) & 65535;
													break;
												}
												d = (m << 16) >> 16;
												l = (w << 16) >> 16;
												p = (v << 16) >> 16;
												if ((w << 16) >> 16 > (m << 16) >> 16) b = l;
												else {
													b = d;
													d = (l | 0) < (d | 0) ? l : d;
												}
												if ((b | 0) < (p | 0)) k = b;
												else k = (d | 0) > (p | 0) ? d : p;
												d = (h << 16) >> 16;
												b = (B << 16) >> 16;
												l = v >> 16;
												if ((B << 16) >> 16 > (h << 16) >> 16) h = b;
												else {
													h = d;
													d = (b | 0) < (d | 0) ? b : d;
												}
												if ((h | 0) >= (l | 0)) h = (d | 0) > (l | 0) ? d : l;
												d = k & 65535;
												h = h & 65535;
											}
										while (0);
										d = ((d & 65535) + (S & 65535)) | 0;
										h = ((h & 65535) + (_ & 65535)) | 0;
										if (((((d << 16) >> 16) + 8192) | 0) >>> 0 > 16383) {
											D = 1;
											c = $;
											return D | 0;
										}
										if (((((h << 16) >> 16) + 2048) | 0) >>> 0 > 4095) {
											D = 1;
											c = $;
											return D | 0;
										}
										b = Ye(i, E) | 0;
										if (!b) {
											D = 1;
											c = $;
											return D | 0;
										}
										_ = (e + 132) | 0;
										A = (e + 136) | 0;
										U = (e + 140) | 0;
										S = (e + 144) | 0;
										k = (e + 148) | 0;
										p = (e + 152) | 0;
										D = (e + 156) | 0;
										y = (e + 160) | 0;
										t[(e + 160) >> 1] = d;
										t[(e + 162) >> 1] = h;
										y = o[y >> 1] | (o[(y + 2) >> 1] << 16);
										t[D >> 1] = y;
										t[(D + 2) >> 1] = y >>> 16;
										t[p >> 1] = y;
										t[(p + 2) >> 1] = y >>> 16;
										t[k >> 1] = y;
										t[(k + 2) >> 1] = y >>> 16;
										t[S >> 1] = y;
										t[(S + 2) >> 1] = y >>> 16;
										t[U >> 1] = y;
										t[(U + 2) >> 1] = y >>> 16;
										t[A >> 1] = y;
										t[(A + 2) >> 1] = y >>> 16;
										t[_ >> 1] = y;
										t[(_ + 2) >> 1] = y >>> 16;
										a[(e + 100) >> 2] = E;
										a[(e + 104) >> 2] = E;
										_ = (e + 116) | 0;
										a[_ >> 2] = b;
										a[(e + 120) >> 2] = b;
										A = t[(r + 164) >> 1] | 0;
										U = t[(r + 166) >> 1] | 0;
										S = a[(r + 148) >> 2] | 0;
										k = a[(e + 200) >> 2] | 0;
										p = (k | 0) == 0;
										if (
											(!p ? (a[(k + 4) >> 2] | 0) == (a[M >> 2] | 0) : 0)
												? (a[k >> 2] | 0) >>> 0 < 6
												: 0
										) {
											B = (k + 184) | 0;
											B = o[B >> 1] | (o[(B + 2) >> 1] << 16);
											w = B & 65535;
											B = (B >>> 16) & 65535;
											h = a[(k + 112) >> 2] | 0;
										} else {
											w = 0;
											B = 0;
											h = -1;
										}
										do
											if ((h | 0) != (S | 0)) {
												m = y & 65535;
												d = y >>> 16;
												g = d & 65535;
												if (
													(!p ? (a[(k + 4) >> 2] | 0) == (a[M >> 2] | 0) : 0)
														? (a[k >> 2] | 0) >>> 0 < 6
														: 0
												) {
													v = (k + 160) | 0;
													p = a[(k + 104) >> 2] | 0;
													v = o[v >> 1] | (o[(v + 2) >> 1] << 16);
												} else {
													p = -1;
													v = 0;
												}
												h = (E | 0) == (S | 0);
												if ((((((p | 0) == (S | 0)) & 1) + (h & 1)) | 0) == 1) {
													b = h ? y : v;
													h = h ? d : v >>> 16;
													break;
												}
												h = (w << 16) >> 16;
												p = (y << 16) >> 16;
												k = (v << 16) >> 16;
												if ((m << 16) >> 16 > (w << 16) >> 16) b = p;
												else {
													b = h;
													h = (p | 0) < (h | 0) ? p : h;
												}
												if ((b | 0) >= (k | 0)) b = (h | 0) > (k | 0) ? h : k;
												d = (B << 16) >> 16;
												l = y >> 16;
												p = v >> 16;
												if ((g << 16) >> 16 > (B << 16) >> 16) h = l;
												else {
													h = d;
													d = (l | 0) < (d | 0) ? l : d;
												}
												if ((h | 0) >= (p | 0)) h = (d | 0) > (p | 0) ? d : p;
											} else {
												h = B & 65535;
												b = (h << 16) | (w & 65535);
											}
										while (0);
										b = ((b & 65535) + (A & 65535)) | 0;
										d = ((h & 65535) + (U & 65535)) | 0;
										if (((((b << 16) >> 16) + 8192) | 0) >>> 0 > 16383) {
											D = 1;
											c = $;
											return D | 0;
										}
										if (((((d << 16) >> 16) + 2048) | 0) >>> 0 > 4095) {
											D = 1;
											c = $;
											return D | 0;
										}
										h = Ye(i, S) | 0;
										if (!h) {
											D = 1;
											c = $;
											return D | 0;
										} else {
											D = (e + 164) | 0;
											L = (e + 168) | 0;
											F = (e + 172) | 0;
											E = (e + 176) | 0;
											M = (e + 180) | 0;
											U = (e + 184) | 0;
											A = (e + 188) | 0;
											C = (e + 192) | 0;
											t[(e + 192) >> 1] = b;
											t[(e + 194) >> 1] = d;
											C = o[C >> 1] | (o[(C + 2) >> 1] << 16);
											t[A >> 1] = C;
											t[(A + 2) >> 1] = C >>> 16;
											t[U >> 1] = C;
											t[(U + 2) >> 1] = C >>> 16;
											t[M >> 1] = C;
											t[(M + 2) >> 1] = C >>> 16;
											t[E >> 1] = C;
											t[(E + 2) >> 1] = C >>> 16;
											t[F >> 1] = C;
											t[(F + 2) >> 1] = C >>> 16;
											t[L >> 1] = C;
											t[(L + 2) >> 1] = C >>> 16;
											t[D >> 1] = C;
											t[(D + 2) >> 1] = C >>> 16;
											a[(e + 108) >> 2] = S;
											a[(e + 112) >> 2] = S;
											C = (e + 124) | 0;
											a[C >> 2] = h;
											a[(e + 128) >> 2] = h;
											a[Z >> 2] = a[_ >> 2];
											Ne(u, (e + 132) | 0, Z, G, V, 0, 0, 16, 8);
											a[Z >> 2] = a[C >> 2];
											Ne(u, D, Z, G, V, 0, 8, 16, 8);
											break;
										}
									} else {
										Y = (e + 4) | 0;
										P = 0;
										e: while (1) {
											F = (r + (P << 2) + 176) | 0;
											D = xr(a[F >> 2] | 0) | 0;
											L = (r + (P << 2) + 192) | 0;
											a[(e + (P << 2) + 100) >> 2] = a[L >> 2];
											C = Ye(i, a[L >> 2] | 0) | 0;
											a[(e + (P << 2) + 116) >> 2] = C;
											if (!C) {
												l = 1;
												K = 212;
												break;
											}
											if (D) {
												O = P << 2;
												I = (e + (O << 2) + 132) | 0;
												x = (e + (O << 2) + 134) | 0;
												j = O | 1;
												T = (e + (j << 2) + 132) | 0;
												j = (e + (j << 2) + 134) | 0;
												H = O | 2;
												z = (e + (H << 2) + 132) | 0;
												H = (e + (H << 2) + 134) | 0;
												q = O | 3;
												N = (e + (q << 2) + 132) | 0;
												q = (e + (q << 2) + 134) | 0;
												R = 0;
												do {
													E = t[(r + (P << 4) + (R << 2) + 208) >> 1] | 0;
													M = t[(r + (P << 4) + (R << 2) + 210) >> 1] | 0;
													C = qr(a[F >> 2] | 0) | 0;
													d = a[L >> 2] | 0;
													m =
														ii(
															e,
															a[(6288 + (P << 7) + (C << 5) + (R << 3)) >> 2] |
																0
														) | 0;
													w =
														f[
															(6288 + (P << 7) + (C << 5) + (R << 3) + 4) >> 0
														] | 0;
													if (
														(m | 0) != 0
															? (a[(m + 4) >> 2] | 0) == (a[Y >> 2] | 0)
															: 0
													)
														if ((a[m >> 2] | 0) >>> 0 < 6) {
															k = (m + (w << 2) + 132) | 0;
															k = o[k >> 1] | (o[(k + 2) >> 1] << 16);
															_ = a[(m + ((w >>> 2) << 2) + 100) >> 2] | 0;
															h = k & 65535;
															S = 1;
															k = (k >>> 16) & 65535;
														} else {
															_ = -1;
															h = 0;
															S = 1;
															k = 0;
														}
													else {
														_ = -1;
														h = 0;
														S = 0;
														k = 0;
													}
													y =
														ii(
															e,
															a[(5776 + (P << 7) + (C << 5) + (R << 3)) >> 2] |
																0
														) | 0;
													l =
														f[
															(5776 + (P << 7) + (C << 5) + (R << 3) + 4) >> 0
														] | 0;
													if (
														(y | 0) != 0
															? (a[(y + 4) >> 2] | 0) == (a[Y >> 2] | 0)
															: 0
													)
														if ((a[y >> 2] | 0) >>> 0 < 6) {
															p = (y + (l << 2) + 132) | 0;
															p = o[p >> 1] | (o[(p + 2) >> 1] << 16);
															U = 1;
															A = a[(y + ((l >>> 2) << 2) + 100) >> 2] | 0;
															b = p & 65535;
															p = (p >>> 16) & 65535;
														} else {
															U = 1;
															A = -1;
															b = 0;
															p = 0;
														}
													else {
														U = 0;
														A = -1;
														b = 0;
														p = 0;
													}
													B =
														ii(
															e,
															a[(5264 + (P << 7) + (C << 5) + (R << 3)) >> 2] |
																0
														) | 0;
													y =
														f[
															(5264 + (P << 7) + (C << 5) + (R << 3) + 4) >> 0
														] | 0;
													if (
														(B | 0) != 0
															? (a[(B + 4) >> 2] | 0) == (a[Y >> 2] | 0)
															: 0
													)
														if ((a[B >> 2] | 0) >>> 0 < 6) {
															S = (B + (y << 2) + 132) | 0;
															S = o[S >> 1] | (o[(S + 2) >> 1] << 16);
															y = a[(B + ((y >>> 2) << 2) + 100) >> 2] | 0;
															K = 180;
														} else {
															S = 0;
															y = -1;
															K = 180;
														}
													else K = 175;
													do
														if ((K | 0) == 175) {
															K = 0;
															B =
																ii(
																	e,
																	a[
																		(4752 + (P << 7) + (C << 5) + (R << 3)) >> 2
																	] | 0
																) | 0;
															y =
																f[
																	(4752 + (P << 7) + (C << 5) + (R << 3) + 4) >>
																		0
																] | 0;
															if (
																(B | 0) != 0
																	? (a[(B + 4) >> 2] | 0) == (a[Y >> 2] | 0)
																	: 0
															) {
																if ((a[B >> 2] | 0) >>> 0 >= 6) {
																	S = 0;
																	y = -1;
																	K = 180;
																	break;
																}
																S = (B + (y << 2) + 132) | 0;
																S = o[S >> 1] | (o[(S + 2) >> 1] << 16);
																y = a[(B + ((y >>> 2) << 2) + 100) >> 2] | 0;
																K = 180;
																break;
															}
															if (((S | 0) == 0) | ((U | 0) != 0)) {
																S = 0;
																y = -1;
																K = 180;
															} else {
																y = h;
																v = k;
															}
														}
													while (0);
													do
														if ((K | 0) == 180) {
															l = (_ | 0) == (d | 0);
															B = (A | 0) == (d | 0);
															if (
																(((B & 1) +
																	(l & 1) +
																	(((y | 0) == (d | 0)) & 1)) |
																	0) ==
																1
															) {
																if (l | B) {
																	y = l ? h : b;
																	v = l ? k : p;
																	break;
																}
																y = S & 65535;
																v = (S >>> 16) & 65535;
																break;
															}
															g = (h << 16) >> 16;
															B = (b << 16) >> 16;
															l = (S << 16) >> 16;
															if ((b << 16) >> 16 > (h << 16) >> 16) y = B;
															else {
																y = g;
																g = (B | 0) < (g | 0) ? B : g;
															}
															if ((y | 0) < (l | 0)) B = y;
															else B = (g | 0) > (l | 0) ? g : l;
															v = (k << 16) >> 16;
															y = (p << 16) >> 16;
															l = S >> 16;
															if ((p << 16) >> 16 > (k << 16) >> 16) m = y;
															else {
																m = v;
																v = (y | 0) < (v | 0) ? y : v;
															}
															if ((m | 0) >= (l | 0))
																m = (v | 0) > (l | 0) ? v : l;
															y = B & 65535;
															v = m & 65535;
														}
													while (0);
													E = ((y & 65535) + (E & 65535)) | 0;
													k = E & 65535;
													m = ((v & 65535) + (M & 65535)) | 0;
													w = m & 65535;
													if (((((E << 16) >> 16) + 8192) | 0) >>> 0 > 16383) {
														l = 1;
														K = 212;
														break e;
													}
													if (((((m << 16) >> 16) + 2048) | 0) >>> 0 > 4095) {
														l = 1;
														K = 212;
														break e;
													}
													if (!C) {
														t[I >> 1] = k;
														t[x >> 1] = w;
														t[T >> 1] = k;
														t[j >> 1] = w;
														t[z >> 1] = k;
														t[H >> 1] = w;
														t[N >> 1] = k;
														t[q >> 1] = w;
													} else if ((C | 0) == 1) {
														C = ((R << 1) + O) | 0;
														t[(e + (C << 2) + 132) >> 1] = k;
														t[(e + (C << 2) + 134) >> 1] = w;
														C = C | 1;
														t[(e + (C << 2) + 132) >> 1] = k;
														t[(e + (C << 2) + 134) >> 1] = w;
													} else if ((C | 0) == 2) {
														C = (R + O) | 0;
														t[(e + (C << 2) + 132) >> 1] = k;
														t[(e + (C << 2) + 134) >> 1] = w;
														C = (C + 2) | 0;
														t[(e + (C << 2) + 132) >> 1] = k;
														t[(e + (C << 2) + 134) >> 1] = w;
													} else if ((C | 0) == 3) {
														C = (R + O) | 0;
														t[(e + (C << 2) + 132) >> 1] = k;
														t[(e + (C << 2) + 134) >> 1] = w;
													}
													R = (R + 1) | 0;
												} while (R >>> 0 < D >>> 0);
											}
											P = (P + 1) | 0;
											if (P >>> 0 >= 4) {
												K = 201;
												break;
											}
										}
										if ((K | 0) == 201) {
											h = 0;
											do {
												a[Z >> 2] = a[(e + (h << 2) + 116) >> 2];
												b = qr(a[(r + (h << 2) + 176) >> 2] | 0) | 0;
												l = (h << 3) & 8;
												d = h >>> 0 < 2 ? 0 : 8;
												if (!b)
													Ne(
														u,
														(e + ((h << 2) << 2) + 132) | 0,
														Z,
														G,
														V,
														l,
														d,
														8,
														8
													);
												else if ((b | 0) == 1) {
													D = h << 2;
													Ne(u, (e + (D << 2) + 132) | 0, Z, G, V, l, d, 8, 4);
													Ne(
														u,
														(e + ((D | 2) << 2) + 132) | 0,
														Z,
														G,
														V,
														l,
														d | 4,
														8,
														4
													);
												} else if ((b | 0) == 2) {
													D = h << 2;
													Ne(u, (e + (D << 2) + 132) | 0, Z, G, V, l, d, 4, 8);
													Ne(
														u,
														(e + ((D | 1) << 2) + 132) | 0,
														Z,
														G,
														V,
														l | 4,
														d,
														4,
														8
													);
												} else {
													L = h << 2;
													Ne(u, (e + (L << 2) + 132) | 0, Z, G, V, l, d, 4, 4);
													C = l | 4;
													Ne(
														u,
														(e + ((L | 1) << 2) + 132) | 0,
														Z,
														G,
														V,
														C,
														d,
														4,
														4
													);
													D = d | 4;
													Ne(
														u,
														(e + ((L | 2) << 2) + 132) | 0,
														Z,
														G,
														V,
														l,
														D,
														4,
														4
													);
													Ne(
														u,
														(e + ((L | 3) << 2) + 132) | 0,
														Z,
														G,
														V,
														C,
														D,
														4,
														4
													);
												}
												h = (h + 1) | 0;
											} while ((h | 0) != 4);
										} else if ((K | 0) == 212) {
											c = $;
											return l | 0;
										}
									}
								while (0);
								if ((a[(e + 196) >> 2] | 0) >>> 0 > 1) {
									D = 0;
									c = $;
									return D | 0;
								}
								if (!(a[e >> 2] | 0)) {
									er(s, u);
									D = 0;
									c = $;
									return D | 0;
								} else {
									rr(s, n, u, (r + 328) | 0);
									D = 0;
									c = $;
									return D | 0;
								}
								return 0;
							}
							function Me(e, r, i, t, a, o, s, u, l) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								t = t | 0;
								a = a | 0;
								o = o | 0;
								s = s | 0;
								u = u | 0;
								l = l | 0;
								var b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0,
									g = 0,
									y = 0,
									B = 0,
									A = 0,
									U = 0,
									S = 0,
									_ = 0,
									M = 0,
									E = 0,
									F = 0,
									L = 0,
									C = 0;
								M = c;
								c = (c + 144) | 0;
								b = M;
								if (
									(i | 0) >= 0
										? !(
												(((i + 1 + u) | 0) >>> 0 > a >>> 0) |
												((t | 0) < 0) |
												(((l + t) | 0) >>> 0 > o >>> 0)
										  )
										: 0
								)
									b = e;
								else {
									_ = (u + 1) | 0;
									Ee(e, b, i, t, a, o, _, l, _);
									Ee(
										(e + (ee(o, a) | 0)) | 0,
										(b + (ee(_, l) | 0)) | 0,
										i,
										t,
										a,
										o,
										_,
										l,
										_
									);
									o = l;
									a = _;
									i = 0;
									t = 0;
								}
								_ = (8 - s) | 0;
								y = l >>> 1;
								S = (y | 0) == 0;
								B = u >>> 1;
								U = (B | 0) == 0;
								A = (16 - u) | 0;
								g = ((a << 1) - u) | 0;
								m = (a + 1) | 0;
								v = (a + 2) | 0;
								p = B << 1;
								w = 0;
								do {
									l = (b + ((ee(((ee(w, o) | 0) + t) | 0, a) | 0) + i)) | 0;
									if (!(S | U)) {
										k = (r + (w << 6)) | 0;
										h = y;
										while (1) {
											u = k;
											e = l;
											d = B;
											while (1) {
												F = f[e >> 0] | 0;
												L = f[(e + m) >> 0] | 0;
												C = e;
												e = (e + 2) | 0;
												E = f[(C + 1) >> 0] | 0;
												n[(u + 8) >> 0] =
													(((((ee(L, s) | 0) +
														(ee(f[(C + a) >> 0] | 0, _) | 0)) <<
														3) +
														32) |
														0) >>>
													6;
												n[u >> 0] =
													(((((ee(E, s) | 0) + (ee(F, _) | 0)) << 3) + 32) |
														0) >>>
													6;
												F = f[e >> 0] | 0;
												n[(u + 9) >> 0] =
													(((((ee(f[(C + v) >> 0] | 0, s) | 0) +
														(ee(L, _) | 0)) <<
														3) +
														32) |
														0) >>>
													6;
												n[(u + 1) >> 0] =
													(((((ee(F, s) | 0) + (ee(E, _) | 0)) << 3) + 32) |
														0) >>>
													6;
												d = (d + -1) | 0;
												if (!d) break;
												else u = (u + 2) | 0;
											}
											h = (h + -1) | 0;
											if (!h) break;
											else {
												k = (k + (p + A)) | 0;
												l = (l + (p + g)) | 0;
											}
										}
									}
									w = (w + 1) | 0;
								} while ((w | 0) != 2);
								c = M;
								return;
							}
							function Ee(e, r, i, n, t, a, f, o, s) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								n = n | 0;
								t = t | 0;
								a = a | 0;
								f = f | 0;
								o = o | 0;
								s = s | 0;
								var u = 0,
									l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0;
								v = c;
								u = (f + i) | 0;
								h = (o + n) | 0;
								m = ((i | 0) < 0) | ((u | 0) > (t | 0)) ? 2 : 1;
								b = (h | 0) < 0 ? (0 - o) | 0 : n;
								n = (u | 0) < 0 ? (0 - f) | 0 : i;
								b = (b | 0) > (a | 0) ? a : b;
								n = (n | 0) > (t | 0) ? t : n;
								u = (n + f) | 0;
								l = (b + o) | 0;
								if ((n | 0) > 0) e = (e + n) | 0;
								if ((b | 0) > 0) e = (e + (ee(b, t) | 0)) | 0;
								w = (n | 0) < 0 ? (0 - n) | 0 : 0;
								k = (u | 0) > (t | 0) ? (u - t) | 0 : 0;
								p = (f - w - k) | 0;
								f = (0 - b) | 0;
								b = (b | 0) < 0 ? f : 0;
								i = (l - a) | 0;
								d = (l | 0) > (a | 0) ? i : 0;
								u = (o - b) | 0;
								n = (u - d) | 0;
								if (b) {
									b = (o + -1 - ((h | 0) > 0 ? h : 0)) | 0;
									l = ~a;
									l = (b | 0) > (l | 0) ? b : l;
									b = ~l;
									b = ee((l + ((b | 0) > 0 ? b : 0) + 1) | 0, s) | 0;
									l = r;
									while (1) {
										gn[m & 3](e, l, w, p, k);
										f = (f + -1) | 0;
										if (!f) break;
										else l = (l + s) | 0;
									}
									r = (r + b) | 0;
								}
								if ((u | 0) != (d | 0)) {
									l = (o + -1) | 0;
									f = (l - ((h | 0) > 0 ? h : 0)) | 0;
									u = ~a;
									u = (f | 0) > (u | 0) ? f : u;
									l = (l - u) | 0;
									f = ~u;
									f =
										(o +
											a +
											-1 -
											((l | 0) < (a | 0) ? a : l) -
											u -
											((f | 0) > 0 ? f : 0)) |
										0;
									u = ee(f, s) | 0;
									f = ee(f, t) | 0;
									l = r;
									b = e;
									while (1) {
										gn[m & 3](b, l, w, p, k);
										n = (n + -1) | 0;
										if (!n) break;
										else {
											l = (l + s) | 0;
											b = (b + t) | 0;
										}
									}
									r = (r + u) | 0;
									e = (e + f) | 0;
								}
								e = (e + (0 - t)) | 0;
								if (!d) {
									c = v;
									return;
								}
								while (1) {
									gn[m & 3](e, r, w, p, k);
									i = (i + -1) | 0;
									if (!i) break;
									else r = (r + s) | 0;
								}
								c = v;
								return;
							}
							function Fe(e, r, i, t, a, o, s, u, l) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								t = t | 0;
								a = a | 0;
								o = o | 0;
								s = s | 0;
								u = u | 0;
								l = l | 0;
								var b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0,
									g = 0,
									y = 0,
									B = 0,
									A = 0,
									U = 0,
									S = 0,
									_ = 0,
									M = 0,
									E = 0,
									F = 0,
									L = 0;
								E = c;
								c = (c + 144) | 0;
								b = E;
								if (
									(
										(i | 0) >= 0
											? !((((u + i) | 0) >>> 0 > a >>> 0) | ((t | 0) < 0))
											: 0
									)
										? ((t + 1 + l) | 0) >>> 0 <= o >>> 0
										: 0
								)
									b = e;
								else {
									_ = (l + 1) | 0;
									Ee(e, b, i, t, a, o, u, _, u);
									Ee(
										(e + (ee(o, a) | 0)) | 0,
										(b + (ee(_, u) | 0)) | 0,
										i,
										t,
										a,
										o,
										u,
										_,
										u
									);
									o = _;
									a = u;
									i = 0;
									t = 0;
								}
								M = (8 - s) | 0;
								B = l >>> 1;
								_ = (B | 0) == 0;
								A = u >>> 1;
								S = (A | 0) == 0;
								U = (16 - u) | 0;
								y = a << 1;
								g = (y - u) | 0;
								v = y | 1;
								m = (a + 1) | 0;
								p = A << 1;
								w = 0;
								do {
									l = (b + ((ee(((ee(w, o) | 0) + t) | 0, a) | 0) + i)) | 0;
									if (!(_ | S)) {
										k = (r + (w << 6)) | 0;
										h = B;
										while (1) {
											u = k;
											e = l;
											d = A;
											while (1) {
												F = f[(e + a) >> 0] | 0;
												L = f[e >> 0] | 0;
												n[(u + 8) >> 0] =
													(((((ee(F, M) | 0) +
														(ee(f[(e + y) >> 0] | 0, s) | 0)) <<
														3) +
														32) |
														0) >>>
													6;
												n[u >> 0] =
													(((((ee(L, M) | 0) + (ee(F, s) | 0)) << 3) + 32) |
														0) >>>
													6;
												F = f[(e + m) >> 0] | 0;
												L = f[(e + 1) >> 0] | 0;
												n[(u + 9) >> 0] =
													(((((ee(F, M) | 0) +
														(ee(f[(e + v) >> 0] | 0, s) | 0)) <<
														3) +
														32) |
														0) >>>
													6;
												n[(u + 1) >> 0] =
													(((((ee(L, M) | 0) + (ee(F, s) | 0)) << 3) + 32) |
														0) >>>
													6;
												d = (d + -1) | 0;
												if (!d) break;
												else {
													u = (u + 2) | 0;
													e = (e + 2) | 0;
												}
											}
											h = (h + -1) | 0;
											if (!h) break;
											else {
												k = (k + (p + U)) | 0;
												l = (l + (p + g)) | 0;
											}
										}
									}
									w = (w + 1) | 0;
								} while ((w | 0) != 2);
								c = E;
								return;
							}
							function Le(e, r, i, t, a, o, s, u, l, b) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								t = t | 0;
								a = a | 0;
								o = o | 0;
								s = s | 0;
								u = u | 0;
								l = l | 0;
								b = b | 0;
								var d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0,
									g = 0,
									y = 0,
									B = 0,
									A = 0,
									U = 0,
									S = 0,
									_ = 0,
									M = 0,
									E = 0,
									F = 0,
									L = 0,
									C = 0,
									D = 0,
									P = 0,
									R = 0,
									O = 0,
									I = 0,
									T = 0,
									z = 0;
								R = c;
								c = (c + 176) | 0;
								d = R;
								if (
									(
										(i | 0) >= 0
											? !((((i + 1 + l) | 0) >>> 0 > a >>> 0) | ((t | 0) < 0))
											: 0
									)
										? ((t + 1 + b) | 0) >>> 0 <= o >>> 0
										: 0
								)
									d = e;
								else {
									M = (l + 1) | 0;
									_ = (b + 1) | 0;
									Ee(e, d, i, t, a, o, M, _, M);
									Ee(
										(e + (ee(o, a) | 0)) | 0,
										(d + (ee(_, M) | 0)) | 0,
										i,
										t,
										a,
										o,
										M,
										_,
										M
									);
									o = _;
									a = M;
									i = 0;
									t = 0;
								}
								D = (8 - s) | 0;
								P = (8 - u) | 0;
								M = b >>> 1;
								L = (M | 0) == 0;
								_ = a << 1;
								E = l >>> 1;
								C = (E | 0) == 0;
								F = (16 - l) | 0;
								S = (_ - l) | 0;
								y = (a + 1) | 0;
								B = _ | 1;
								A = (a + 2) | 0;
								U = (_ + 2) | 0;
								m = E << 1;
								g = 0;
								do {
									l = (d + ((ee(((ee(g, o) | 0) + t) | 0, a) | 0) + i)) | 0;
									if (!(L | C)) {
										v = (r + (g << 6)) | 0;
										w = M;
										while (1) {
											p = f[(l + a) >> 0] | 0;
											b = v;
											e = l;
											h = ((ee(p, u) | 0) + (ee(f[l >> 0] | 0, P) | 0)) | 0;
											p =
												((ee(f[(l + _) >> 0] | 0, u) | 0) + (ee(p, P) | 0)) | 0;
											k = E;
											while (1) {
												I = f[(e + y) >> 0] | 0;
												O =
													((ee(I, u) | 0) + (ee(f[(e + 1) >> 0] | 0, P) | 0)) |
													0;
												I =
													((ee(f[(e + B) >> 0] | 0, u) | 0) + (ee(I, P) | 0)) |
													0;
												z = (((ee(h, D) | 0) + 32 + (ee(O, s) | 0)) | 0) >>> 6;
												n[(b + 8) >> 0] =
													(((ee(p, D) | 0) + 32 + (ee(I, s) | 0)) | 0) >>> 6;
												n[b >> 0] = z;
												z = e;
												e = (e + 2) | 0;
												T = f[(z + A) >> 0] | 0;
												h = ((ee(T, u) | 0) + (ee(f[e >> 0] | 0, P) | 0)) | 0;
												p =
													((ee(f[(z + U) >> 0] | 0, u) | 0) + (ee(T, P) | 0)) |
													0;
												O = (((ee(O, D) | 0) + 32 + (ee(h, s) | 0)) | 0) >>> 6;
												n[(b + 9) >> 0] =
													(((ee(I, D) | 0) + 32 + (ee(p, s) | 0)) | 0) >>> 6;
												n[(b + 1) >> 0] = O;
												k = (k + -1) | 0;
												if (!k) break;
												else b = (b + 2) | 0;
											}
											w = (w + -1) | 0;
											if (!w) break;
											else {
												v = (v + (m + F)) | 0;
												l = (l + (m + S)) | 0;
											}
										}
									}
									g = (g + 1) | 0;
								} while ((g | 0) != 2);
								c = R;
								return;
							}
							function Ce(e, r, i, t, a, o, s, u) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								t = t | 0;
								a = a | 0;
								o = o | 0;
								s = s | 0;
								u = u | 0;
								var l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0,
									g = 0,
									y = 0,
									B = 0,
									A = 0,
									U = 0;
								w = c;
								c = (c + 448) | 0;
								l = w;
								if (
									(
										(i | 0) >= 0
											? !((((s + i) | 0) >>> 0 > a >>> 0) | ((t | 0) < 0))
											: 0
									)
										? ((t + 5 + u) | 0) >>> 0 <= o >>> 0
										: 0
								)
									l = e;
								else {
									Ee(e, l, i, t, a, o, s, (u + 5) | 0, s);
									a = s;
									i = 0;
									t = 0;
								}
								o = (i + a + (ee(t, a) | 0)) | 0;
								e = u >>> 2;
								if (!e) {
									c = w;
									return;
								}
								d = a << 2;
								k = (0 - a) | 0;
								h = k << 1;
								p = a << 1;
								if (!s) {
									c = w;
									return;
								} else {
									b = (l + o) | 0;
									i = (l + (o + ((a * 5) | 0))) | 0;
								}
								while (1) {
									l = s;
									o = r;
									u = b;
									t = i;
									while (1) {
										g = f[(t + h) >> 0] | 0;
										y = f[(t + k) >> 0] | 0;
										B = f[(t + a) >> 0] | 0;
										U = f[t >> 0] | 0;
										A = (B + g) | 0;
										m = f[(u + p) >> 0] | 0;
										n[(o + 48) >> 0] =
											n[
												((((f[(t + p) >> 0] | 0) +
													16 -
													A -
													(A << 2) +
													m +
													((((U + y) | 0) * 20) | 0)) >>
													5) +
													3984) >>
													0
											] | 0;
										A = (m + U) | 0;
										v = f[(u + a) >> 0] | 0;
										n[(o + 32) >> 0] =
											n[
												(((B +
													16 -
													A -
													(A << 2) +
													v +
													((((y + g) | 0) * 20) | 0)) >>
													5) +
													3984) >>
													0
											] | 0;
										A = (v + y) | 0;
										B = f[u >> 0] | 0;
										n[(o + 16) >> 0] =
											n[
												(((U +
													16 -
													A -
													(A << 2) +
													B +
													((((m + g) | 0) * 20) | 0)) >>
													5) +
													3984) >>
													0
											] | 0;
										g = (B + g) | 0;
										n[o >> 0] =
											n[
												(((y +
													16 -
													g -
													(g << 2) +
													(f[(u + k) >> 0] | 0) +
													((((v + m) | 0) * 20) | 0)) >>
													5) +
													3984) >>
													0
											] | 0;
										l = (l + -1) | 0;
										if (!l) break;
										else {
											o = (o + 1) | 0;
											u = (u + 1) | 0;
											t = (t + 1) | 0;
										}
									}
									e = (e + -1) | 0;
									if (!e) break;
									else {
										r = (r + 64) | 0;
										b = (b + d) | 0;
										i = (i + d) | 0;
									}
								}
								c = w;
								return;
							}
							function De(e, r, i, t, a, o, s, u, l) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								t = t | 0;
								a = a | 0;
								o = o | 0;
								s = s | 0;
								u = u | 0;
								l = l | 0;
								var b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0,
									g = 0,
									y = 0,
									B = 0,
									A = 0,
									U = 0,
									S = 0,
									_ = 0,
									M = 0,
									E = 0;
								y = c;
								c = (c + 448) | 0;
								b = y;
								if (
									(
										(i | 0) >= 0
											? !((((s + i) | 0) >>> 0 > a >>> 0) | ((t | 0) < 0))
											: 0
									)
										? ((t + 5 + u) | 0) >>> 0 <= o >>> 0
										: 0
								)
									b = e;
								else {
									Ee(e, b, i, t, a, o, s, (u + 5) | 0, s);
									a = s;
									i = 0;
									t = 0;
								}
								o = (i + a + (ee(t, a) | 0)) | 0;
								e = u >>> 2;
								if (!e) {
									c = y;
									return;
								}
								g = (s | 0) == 0;
								m = ((a << 2) - s) | 0;
								v = (64 - s) | 0;
								w = (0 - a) | 0;
								p = w << 1;
								k = a << 1;
								i = (b + o) | 0;
								t = (b + (o + (ee(a, (l + 2) | 0) | 0))) | 0;
								b = (b + (o + ((a * 5) | 0))) | 0;
								while (1) {
									if (g) {
										o = r;
										u = t;
									} else {
										u = (t + s) | 0;
										o = (r + s) | 0;
										l = s;
										h = i;
										d = b;
										while (1) {
											U = f[(d + p) >> 0] | 0;
											S = f[(d + w) >> 0] | 0;
											_ = f[(d + a) >> 0] | 0;
											E = f[d >> 0] | 0;
											M = (_ + U) | 0;
											B = f[(h + k) >> 0] | 0;
											n[(r + 48) >> 0] =
												(((f[
													((((f[(d + k) >> 0] | 0) +
														16 -
														M -
														(M << 2) +
														B +
														((((E + S) | 0) * 20) | 0)) >>
														5) +
														3984) >>
														0
												] |
													0) +
													1 +
													(f[(t + k) >> 0] | 0)) |
													0) >>>
												1;
											M = (B + E) | 0;
											A = f[(h + a) >> 0] | 0;
											n[(r + 32) >> 0] =
												(((f[
													(((_ +
														16 -
														M -
														(M << 2) +
														A +
														((((S + U) | 0) * 20) | 0)) >>
														5) +
														3984) >>
														0
												] |
													0) +
													1 +
													(f[(t + a) >> 0] | 0)) |
													0) >>>
												1;
											M = (A + S) | 0;
											_ = f[h >> 0] | 0;
											n[(r + 16) >> 0] =
												(((f[
													(((E +
														16 -
														M -
														(M << 2) +
														_ +
														((((B + U) | 0) * 20) | 0)) >>
														5) +
														3984) >>
														0
												] |
													0) +
													1 +
													(f[t >> 0] | 0)) |
													0) >>>
												1;
											U = (_ + U) | 0;
											n[r >> 0] =
												(((f[
													(((S +
														16 -
														U -
														(U << 2) +
														(f[(h + w) >> 0] | 0) +
														((((A + B) | 0) * 20) | 0)) >>
														5) +
														3984) >>
														0
												] |
													0) +
													1 +
													(f[(t + w) >> 0] | 0)) |
													0) >>>
												1;
											l = (l + -1) | 0;
											if (!l) break;
											else {
												r = (r + 1) | 0;
												h = (h + 1) | 0;
												t = (t + 1) | 0;
												d = (d + 1) | 0;
											}
										}
										i = (i + s) | 0;
										b = (b + s) | 0;
									}
									e = (e + -1) | 0;
									if (!e) break;
									else {
										r = (o + v) | 0;
										i = (i + m) | 0;
										t = (u + m) | 0;
										b = (b + m) | 0;
									}
								}
								c = y;
								return;
							}
							function Pe(e, r, i, t, a, o, s, u) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								t = t | 0;
								a = a | 0;
								o = o | 0;
								s = s | 0;
								u = u | 0;
								var l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0,
									g = 0,
									y = 0;
								g = c;
								c = (c + 448) | 0;
								l = g;
								if (
									(i | 0) >= 0
										? !(
												(((i + 5 + s) | 0) >>> 0 > a >>> 0) |
												((t | 0) < 0) |
												(((u + t) | 0) >>> 0 > o >>> 0)
										  )
										: 0
								)
									l = e;
								else {
									d = (s + 5) | 0;
									Ee(e, l, i, t, a, o, d, u, d);
									a = d;
									i = 0;
									t = 0;
								}
								if (!u) {
									c = g;
									return;
								}
								w = s >>> 2;
								v = (w | 0) == 0;
								m = (a - s) | 0;
								k = (16 - s) | 0;
								p = w << 2;
								e = r;
								l = (l + (i + 5 + (ee(t, a) | 0))) | 0;
								h = u;
								while (1) {
									if (v) o = e;
									else {
										o = (e + p) | 0;
										i = l;
										a = f[(l + -1) >> 0] | 0;
										u = f[(l + -2) >> 0] | 0;
										b = f[(l + -3) >> 0] | 0;
										d = f[(l + -4) >> 0] | 0;
										s = f[(l + -5) >> 0] | 0;
										r = w;
										while (1) {
											t = (d + a) | 0;
											y = d;
											d = f[i >> 0] | 0;
											n[e >> 0] =
												n[
													(((s +
														16 -
														t -
														(t << 2) +
														d +
														((((b + u) | 0) * 20) | 0)) >>
														5) +
														3984) >>
														0
												] | 0;
											s = (d + b) | 0;
											t = b;
											b = f[(i + 1) >> 0] | 0;
											n[(e + 1) >> 0] =
												n[
													(((y +
														16 -
														s -
														(s << 2) +
														b +
														((((u + a) | 0) * 20) | 0)) >>
														5) +
														3984) >>
														0
												] | 0;
											s = (b + u) | 0;
											y = u;
											u = f[(i + 2) >> 0] | 0;
											n[(e + 2) >> 0] =
												n[
													(((t +
														16 -
														s -
														(s << 2) +
														u +
														((((d + a) | 0) * 20) | 0)) >>
														5) +
														3984) >>
														0
												] | 0;
											s = (u + a) | 0;
											t = f[(i + 3) >> 0] | 0;
											n[(e + 3) >> 0] =
												n[
													(((y +
														16 -
														s -
														(s << 2) +
														t +
														((((b + d) | 0) * 20) | 0)) >>
														5) +
														3984) >>
														0
												] | 0;
											r = (r + -1) | 0;
											if (!r) break;
											else {
												s = a;
												e = (e + 4) | 0;
												i = (i + 4) | 0;
												a = t;
											}
										}
										l = (l + p) | 0;
									}
									h = (h + -1) | 0;
									if (!h) break;
									else {
										e = (o + k) | 0;
										l = (l + m) | 0;
									}
								}
								c = g;
								return;
							}
							function Re(e, r, i, t, a, o, s, u, l) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								t = t | 0;
								a = a | 0;
								o = o | 0;
								s = s | 0;
								u = u | 0;
								l = l | 0;
								var b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0,
									g = 0,
									y = 0,
									B = 0;
								y = c;
								c = (c + 448) | 0;
								b = y;
								if (
									(i | 0) >= 0
										? !(
												(((i + 5 + s) | 0) >>> 0 > a >>> 0) |
												((t | 0) < 0) |
												(((u + t) | 0) >>> 0 > o >>> 0)
										  )
										: 0
								)
									b = e;
								else {
									h = (s + 5) | 0;
									Ee(e, b, i, t, a, o, h, u, h);
									a = h;
									i = 0;
									t = 0;
								}
								if (!u) {
									c = y;
									return;
								}
								m = s >>> 2;
								g = (m | 0) == 0;
								v = (a - s) | 0;
								w = (16 - s) | 0;
								k = (l | 0) != 0;
								p = m << 2;
								e = r;
								b = (b + (i + 5 + (ee(t, a) | 0))) | 0;
								while (1) {
									if (g) o = e;
									else {
										o = (e + p) | 0;
										l = b;
										i = f[(b + -1) >> 0] | 0;
										a = f[(b + -2) >> 0] | 0;
										d = f[(b + -3) >> 0] | 0;
										h = f[(b + -4) >> 0] | 0;
										s = f[(b + -5) >> 0] | 0;
										r = m;
										while (1) {
											t = (h + i) | 0;
											B = h;
											h = f[l >> 0] | 0;
											n[e >> 0] =
												(((k ? a : d) +
													1 +
													(f[
														(((s +
															16 -
															t -
															(t << 2) +
															h +
															((((d + a) | 0) * 20) | 0)) >>
															5) +
															3984) >>
															0
													] |
														0)) |
													0) >>>
												1;
											s = (h + d) | 0;
											t = d;
											d = f[(l + 1) >> 0] | 0;
											n[(e + 1) >> 0] =
												(((k ? i : a) +
													1 +
													(f[
														(((B +
															16 -
															s -
															(s << 2) +
															d +
															((((a + i) | 0) * 20) | 0)) >>
															5) +
															3984) >>
															0
													] |
														0)) |
													0) >>>
												1;
											s = (d + a) | 0;
											B = a;
											a = f[(l + 2) >> 0] | 0;
											n[(e + 2) >> 0] =
												(((k ? h : i) +
													1 +
													(f[
														(((t +
															16 -
															s -
															(s << 2) +
															a +
															((((h + i) | 0) * 20) | 0)) >>
															5) +
															3984) >>
															0
													] |
														0)) |
													0) >>>
												1;
											s = (a + i) | 0;
											t = f[(l + 3) >> 0] | 0;
											n[(e + 3) >> 0] =
												(((k ? d : h) +
													1 +
													(f[
														(((B +
															16 -
															s -
															(s << 2) +
															t +
															((((d + h) | 0) * 20) | 0)) >>
															5) +
															3984) >>
															0
													] |
														0)) |
													0) >>>
												1;
											r = (r + -1) | 0;
											if (!r) break;
											else {
												s = i;
												e = (e + 4) | 0;
												l = (l + 4) | 0;
												i = t;
											}
										}
										b = (b + p) | 0;
									}
									u = (u + -1) | 0;
									if (!u) break;
									else {
										e = (o + w) | 0;
										b = (b + v) | 0;
									}
								}
								c = y;
								return;
							}
							function Oe(e, r, i, t, a, o, s, u, l) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								t = t | 0;
								a = a | 0;
								o = o | 0;
								s = s | 0;
								u = u | 0;
								l = l | 0;
								var b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0,
									g = 0,
									y = 0,
									B = 0,
									A = 0,
									U = 0,
									S = 0,
									_ = 0,
									M = 0;
								S = c;
								c = (c + 448) | 0;
								b = S;
								if (
									(
										(i | 0) >= 0
											? !((((i + 5 + s) | 0) >>> 0 > a >>> 0) | ((t | 0) < 0))
											: 0
									)
										? ((t + 5 + u) | 0) >>> 0 <= o >>> 0
										: 0
								)
									b = e;
								else {
									U = (s + 5) | 0;
									Ee(e, b, i, t, a, o, U, (u + 5) | 0, U);
									a = U;
									i = 0;
									t = 0;
								}
								e = ((ee(t, a) | 0) + i) | 0;
								U = (((l & 1) | 2) + a + e) | 0;
								d = (b + U) | 0;
								if (!u) {
									c = S;
									return;
								}
								g = s >>> 2;
								B = (g | 0) == 0;
								y = (a - s) | 0;
								A = (16 - s) | 0;
								v = g << 2;
								e = (b + ((ee(a, ((l >>> 1) & 1) | 2) | 0) + 5 + e)) | 0;
								m = u;
								while (1) {
									if (!B) {
										w = (r + v) | 0;
										o = e;
										i = f[(e + -1) >> 0] | 0;
										t = f[(e + -2) >> 0] | 0;
										h = f[(e + -3) >> 0] | 0;
										p = f[(e + -4) >> 0] | 0;
										l = f[(e + -5) >> 0] | 0;
										k = g;
										while (1) {
											_ = (p + i) | 0;
											M = p;
											p = f[o >> 0] | 0;
											n[r >> 0] =
												n[
													(((l +
														16 -
														_ -
														(_ << 2) +
														p +
														((((h + t) | 0) * 20) | 0)) >>
														5) +
														3984) >>
														0
												] | 0;
											_ = (p + h) | 0;
											l = h;
											h = f[(o + 1) >> 0] | 0;
											n[(r + 1) >> 0] =
												n[
													(((M +
														16 -
														_ -
														(_ << 2) +
														h +
														((((t + i) | 0) * 20) | 0)) >>
														5) +
														3984) >>
														0
												] | 0;
											_ = (h + t) | 0;
											M = t;
											t = f[(o + 2) >> 0] | 0;
											n[(r + 2) >> 0] =
												n[
													(((l +
														16 -
														_ -
														(_ << 2) +
														t +
														((((p + i) | 0) * 20) | 0)) >>
														5) +
														3984) >>
														0
												] | 0;
											_ = (t + i) | 0;
											l = f[(o + 3) >> 0] | 0;
											n[(r + 3) >> 0] =
												n[
													(((M +
														16 -
														_ -
														(_ << 2) +
														l +
														((((h + p) | 0) * 20) | 0)) >>
														5) +
														3984) >>
														0
												] | 0;
											k = (k + -1) | 0;
											if (!k) break;
											else {
												_ = i;
												r = (r + 4) | 0;
												o = (o + 4) | 0;
												i = l;
												l = _;
											}
										}
										r = w;
										e = (e + v) | 0;
									}
									m = (m + -1) | 0;
									if (!m) break;
									else {
										r = (r + A) | 0;
										e = (e + y) | 0;
									}
								}
								e = u >>> 2;
								if (!e) {
									c = S;
									return;
								}
								v = (s | 0) == 0;
								p = ((a << 2) - s) | 0;
								h = (64 - s) | 0;
								k = (0 - a) | 0;
								m = k << 1;
								w = a << 1;
								r = (r + (A - (u << 4))) | 0;
								o = (b + (U + ((a * 5) | 0))) | 0;
								l = e;
								while (1) {
									if (v) {
										e = r;
										b = d;
									} else {
										e = (r + s) | 0;
										b = r;
										i = d;
										t = o;
										r = s;
										while (1) {
											A = f[(t + m) >> 0] | 0;
											B = f[(t + k) >> 0] | 0;
											g = f[(t + a) >> 0] | 0;
											M = f[t >> 0] | 0;
											U = (g + A) | 0;
											u = f[(i + w) >> 0] | 0;
											_ = (b + 48) | 0;
											n[_ >> 0] =
												(((f[
													((((f[(t + w) >> 0] | 0) +
														16 -
														U -
														(U << 2) +
														u +
														((((M + B) | 0) * 20) | 0)) >>
														5) +
														3984) >>
														0
												] |
													0) +
													1 +
													(f[_ >> 0] | 0)) |
													0) >>>
												1;
											_ = (u + M) | 0;
											U = f[(i + a) >> 0] | 0;
											y = (b + 32) | 0;
											n[y >> 0] =
												(((f[
													(((g +
														16 -
														_ -
														(_ << 2) +
														U +
														((((B + A) | 0) * 20) | 0)) >>
														5) +
														3984) >>
														0
												] |
													0) +
													1 +
													(f[y >> 0] | 0)) |
													0) >>>
												1;
											y = f[i >> 0] | 0;
											_ = (U + B) | 0;
											g = (b + 16) | 0;
											n[g >> 0] =
												(((f[
													(((M +
														16 -
														_ -
														(_ << 2) +
														y +
														((((u + A) | 0) * 20) | 0)) >>
														5) +
														3984) >>
														0
												] |
													0) +
													1 +
													(f[g >> 0] | 0)) |
													0) >>>
												1;
											A = (y + A) | 0;
											n[b >> 0] =
												(((f[
													(((B +
														16 -
														A -
														(A << 2) +
														(f[(i + k) >> 0] | 0) +
														((((U + u) | 0) * 20) | 0)) >>
														5) +
														3984) >>
														0
												] |
													0) +
													1 +
													(f[b >> 0] | 0)) |
													0) >>>
												1;
											r = (r + -1) | 0;
											if (!r) break;
											else {
												b = (b + 1) | 0;
												i = (i + 1) | 0;
												t = (t + 1) | 0;
											}
										}
										b = (d + s) | 0;
										o = (o + s) | 0;
									}
									l = (l + -1) | 0;
									if (!l) break;
									else {
										r = (e + h) | 0;
										d = (b + p) | 0;
										o = (o + p) | 0;
									}
								}
								c = S;
								return;
							}
							function Ie(e, r, i, t, o, s, u, l) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								t = t | 0;
								o = o | 0;
								s = s | 0;
								u = u | 0;
								l = l | 0;
								var b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0,
									g = 0,
									y = 0,
									B = 0,
									A = 0,
									U = 0,
									S = 0,
									_ = 0;
								A = c;
								c = (c + 1792) | 0;
								b = (A + 1344) | 0;
								B = A;
								if (
									(
										(i | 0) >= 0
											? !((((i + 5 + u) | 0) >>> 0 > o >>> 0) | ((t | 0) < 0))
											: 0
									)
										? ((t + 5 + l) | 0) >>> 0 <= s >>> 0
										: 0
								) {
									h = (l + 5) | 0;
									b = e;
									d = (i + 5) | 0;
								} else {
									d = (u + 5) | 0;
									h = (l + 5) | 0;
									Ee(e, b, i, t, o, s, d, h, d);
									o = d;
									d = 5;
									t = 0;
								}
								if (h) {
									v = u >>> 2;
									y = (v | 0) == 0;
									m = (o - u) | 0;
									g = v << 2;
									i = B;
									b = (b + (d + (ee(t, o) | 0))) | 0;
									while (1) {
										if (y) e = i;
										else {
											e = (i + (g << 2)) | 0;
											t = b;
											o = f[(b + -1) >> 0] | 0;
											s = f[(b + -2) >> 0] | 0;
											p = f[(b + -3) >> 0] | 0;
											k = f[(b + -4) >> 0] | 0;
											d = f[(b + -5) >> 0] | 0;
											w = v;
											while (1) {
												U = (k + o) | 0;
												S = k;
												k = f[t >> 0] | 0;
												a[i >> 2] =
													d - U - (U << 2) + k + ((((p + s) | 0) * 20) | 0);
												U = (k + p) | 0;
												d = p;
												p = f[(t + 1) >> 0] | 0;
												a[(i + 4) >> 2] =
													S - U + p - (U << 2) + ((((s + o) | 0) * 20) | 0);
												U = (p + s) | 0;
												S = s;
												s = f[(t + 2) >> 0] | 0;
												a[(i + 8) >> 2] =
													d - U + s - (U << 2) + ((((k + o) | 0) * 20) | 0);
												U = (s + o) | 0;
												d = f[(t + 3) >> 0] | 0;
												a[(i + 12) >> 2] =
													S - U + d - (U << 2) + ((((p + k) | 0) * 20) | 0);
												w = (w + -1) | 0;
												if (!w) break;
												else {
													U = o;
													i = (i + 16) | 0;
													t = (t + 4) | 0;
													o = d;
													d = U;
												}
											}
											b = (b + g) | 0;
										}
										h = (h + -1) | 0;
										if (!h) break;
										else {
											i = e;
											b = (b + m) | 0;
										}
									}
								}
								o = l >>> 2;
								if (!o) {
									c = A;
									return;
								}
								g = (u | 0) == 0;
								m = (64 - u) | 0;
								p = (u * 3) | 0;
								v = (0 - u) | 0;
								k = v << 1;
								w = u << 1;
								t = r;
								e = (B + (u << 2)) | 0;
								b = (B + ((u * 6) << 2)) | 0;
								h = o;
								while (1) {
									if (g) o = t;
									else {
										o = (t + u) | 0;
										i = e;
										s = b;
										d = u;
										while (1) {
											r = a[(s + (k << 2)) >> 2] | 0;
											B = a[(s + (v << 2)) >> 2] | 0;
											S = a[(s + (u << 2)) >> 2] | 0;
											_ = a[s >> 2] | 0;
											U = (S + r) | 0;
											y = a[(i + (w << 2)) >> 2] | 0;
											n[(t + 48) >> 0] =
												n[
													((((a[(s + (w << 2)) >> 2] | 0) +
														512 -
														U -
														(U << 2) +
														y +
														((((_ + B) | 0) * 20) | 0)) >>
														10) +
														3984) >>
														0
												] | 0;
											U = (y + _) | 0;
											l = a[(i + (u << 2)) >> 2] | 0;
											n[(t + 32) >> 0] =
												n[
													(((S +
														512 -
														U -
														(U << 2) +
														l +
														((((B + r) | 0) * 20) | 0)) >>
														10) +
														3984) >>
														0
												] | 0;
											U = a[i >> 2] | 0;
											S = (l + B) | 0;
											n[(t + 16) >> 0] =
												n[
													(((_ +
														512 -
														S -
														(S << 2) +
														U +
														((((y + r) | 0) * 20) | 0)) >>
														10) +
														3984) >>
														0
												] | 0;
											r = (U + r) | 0;
											n[t >> 0] =
												n[
													(((B +
														512 -
														r -
														(r << 2) +
														(a[(i + (v << 2)) >> 2] | 0) +
														((((l + y) | 0) * 20) | 0)) >>
														10) +
														3984) >>
														0
												] | 0;
											d = (d + -1) | 0;
											if (!d) break;
											else {
												t = (t + 1) | 0;
												i = (i + 4) | 0;
												s = (s + 4) | 0;
											}
										}
										e = (e + (u << 2)) | 0;
										b = (b + (u << 2)) | 0;
									}
									h = (h + -1) | 0;
									if (!h) break;
									else {
										t = (o + m) | 0;
										e = (e + (p << 2)) | 0;
										b = (b + (p << 2)) | 0;
									}
								}
								c = A;
								return;
							}
							function Te(e, r, i, t, o, s, u, l, b) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								t = t | 0;
								o = o | 0;
								s = s | 0;
								u = u | 0;
								l = l | 0;
								b = b | 0;
								var d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0,
									g = 0,
									y = 0,
									B = 0,
									A = 0,
									U = 0,
									S = 0,
									_ = 0,
									M = 0,
									E = 0;
								U = c;
								c = (c + 1792) | 0;
								d = (U + 1344) | 0;
								A = U;
								if (
									(
										(i | 0) >= 0
											? !((((i + 5 + u) | 0) >>> 0 > o >>> 0) | ((t | 0) < 0))
											: 0
									)
										? ((t + 5 + l) | 0) >>> 0 <= s >>> 0
										: 0
								) {
									h = (l + 5) | 0;
									d = e;
									i = (i + 5) | 0;
								} else {
									k = (u + 5) | 0;
									h = (l + 5) | 0;
									Ee(e, d, i, t, o, s, k, h, k);
									o = k;
									i = 5;
									t = 0;
								}
								if (h) {
									y = u >>> 2;
									v = (y | 0) == 0;
									g = (o - u) | 0;
									B = y << 2;
									p = A;
									d = (d + (i + (ee(t, o) | 0))) | 0;
									m = h;
									while (1) {
										if (v) e = p;
										else {
											e = (p + (B << 2)) | 0;
											t = d;
											i = f[(d + -1) >> 0] | 0;
											o = f[(d + -2) >> 0] | 0;
											s = f[(d + -3) >> 0] | 0;
											k = f[(d + -4) >> 0] | 0;
											h = f[(d + -5) >> 0] | 0;
											w = y;
											while (1) {
												S = (k + i) | 0;
												_ = k;
												k = f[t >> 0] | 0;
												a[p >> 2] =
													h - S - (S << 2) + k + ((((s + o) | 0) * 20) | 0);
												S = (k + s) | 0;
												h = s;
												s = f[(t + 1) >> 0] | 0;
												a[(p + 4) >> 2] =
													_ - S + s - (S << 2) + ((((o + i) | 0) * 20) | 0);
												S = (s + o) | 0;
												_ = o;
												o = f[(t + 2) >> 0] | 0;
												a[(p + 8) >> 2] =
													h - S + o - (S << 2) + ((((k + i) | 0) * 20) | 0);
												S = (o + i) | 0;
												h = f[(t + 3) >> 0] | 0;
												a[(p + 12) >> 2] =
													_ - S + h - (S << 2) + ((((s + k) | 0) * 20) | 0);
												w = (w + -1) | 0;
												if (!w) break;
												else {
													S = i;
													p = (p + 16) | 0;
													t = (t + 4) | 0;
													i = h;
													h = S;
												}
											}
											d = (d + B) | 0;
										}
										m = (m + -1) | 0;
										if (!m) break;
										else {
											p = e;
											d = (d + g) | 0;
										}
									}
								}
								i = l >>> 2;
								if (!i) {
									c = U;
									return;
								}
								B = (u | 0) == 0;
								g = (64 - u) | 0;
								k = (u * 3) | 0;
								y = (0 - u) | 0;
								v = y << 1;
								m = u << 1;
								e = (A + (u << 2)) | 0;
								d = (A + (((ee((b + 2) | 0, u) | 0) + u) << 2)) | 0;
								o = (A + ((u * 6) << 2)) | 0;
								w = i;
								while (1) {
									if (B) {
										t = r;
										i = d;
									} else {
										i = (d + (u << 2)) | 0;
										t = (r + u) | 0;
										p = e;
										s = o;
										h = u;
										while (1) {
											b = a[(s + (v << 2)) >> 2] | 0;
											l = a[(s + (y << 2)) >> 2] | 0;
											M = a[(s + (u << 2)) >> 2] | 0;
											E = a[s >> 2] | 0;
											_ = (M + b) | 0;
											S = a[(p + (m << 2)) >> 2] | 0;
											n[(r + 48) >> 0] =
												(((f[
													((((a[(s + (m << 2)) >> 2] | 0) +
														512 -
														_ -
														(_ << 2) +
														S +
														((((E + l) | 0) * 20) | 0)) >>
														10) +
														3984) >>
														0
												] |
													0) +
													1 +
													(f[
														((((a[(d + (m << 2)) >> 2] | 0) + 16) >> 5) +
															3984) >>
															0
													] |
														0)) |
													0) >>>
												1;
											_ = (S + E) | 0;
											A = a[(p + (u << 2)) >> 2] | 0;
											n[(r + 32) >> 0] =
												(((f[
													(((M +
														512 -
														_ -
														(_ << 2) +
														A +
														((((l + b) | 0) * 20) | 0)) >>
														10) +
														3984) >>
														0
												] |
													0) +
													1 +
													(f[
														((((a[(d + (u << 2)) >> 2] | 0) + 16) >> 5) +
															3984) >>
															0
													] |
														0)) |
													0) >>>
												1;
											_ = a[p >> 2] | 0;
											M = (A + l) | 0;
											n[(r + 16) >> 0] =
												(((f[
													(((E +
														512 -
														M -
														(M << 2) +
														_ +
														((((S + b) | 0) * 20) | 0)) >>
														10) +
														3984) >>
														0
												] |
													0) +
													1 +
													(f[((((a[d >> 2] | 0) + 16) >> 5) + 3984) >> 0] |
														0)) |
													0) >>>
												1;
											b = (_ + b) | 0;
											n[r >> 0] =
												(((f[
													(((l +
														512 -
														b -
														(b << 2) +
														(a[(p + (y << 2)) >> 2] | 0) +
														((((A + S) | 0) * 20) | 0)) >>
														10) +
														3984) >>
														0
												] |
													0) +
													1 +
													(f[
														((((a[(d + (y << 2)) >> 2] | 0) + 16) >> 5) +
															3984) >>
															0
													] |
														0)) |
													0) >>>
												1;
											h = (h + -1) | 0;
											if (!h) break;
											else {
												r = (r + 1) | 0;
												p = (p + 4) | 0;
												d = (d + 4) | 0;
												s = (s + 4) | 0;
											}
										}
										e = (e + (u << 2)) | 0;
										o = (o + (u << 2)) | 0;
									}
									w = (w + -1) | 0;
									if (!w) break;
									else {
										r = (t + g) | 0;
										e = (e + (k << 2)) | 0;
										d = (i + (k << 2)) | 0;
										o = (o + (k << 2)) | 0;
									}
								}
								c = U;
								return;
							}
							function ze(e, r, i, t, o, s, u, l, b) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								t = t | 0;
								o = o | 0;
								s = s | 0;
								u = u | 0;
								l = l | 0;
								b = b | 0;
								var d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0,
									g = 0,
									y = 0,
									B = 0,
									A = 0,
									U = 0,
									S = 0,
									_ = 0,
									M = 0,
									E = 0,
									F = 0,
									L = 0,
									C = 0,
									D = 0,
									P = 0,
									R = 0;
								M = c;
								c = (c + 1792) | 0;
								d = (M + 1344) | 0;
								_ = M;
								S = (u + 5) | 0;
								if (
									(
										(i | 0) >= 0
											? !((((i + 5 + u) | 0) >>> 0 > o >>> 0) | ((t | 0) < 0))
											: 0
									)
										? ((t + 5 + l) | 0) >>> 0 <= s >>> 0
										: 0
								)
									d = e;
								else {
									Ee(e, d, i, t, o, s, S, (l + 5) | 0, S);
									o = S;
									i = 0;
									t = 0;
								}
								m = (i + o + (ee(t, o) | 0)) | 0;
								t = l >>> 2;
								if (t) {
									U = (S | 0) == 0;
									A = ((o << 2) - u + -5) | 0;
									v = (S * 3) | 0;
									p = (0 - o) | 0;
									B = p << 1;
									y = o << 1;
									g = S << 1;
									k = (-5 - u) | 0;
									s = (_ + (S << 2)) | 0;
									w = (d + m) | 0;
									i = (d + (m + ((o * 5) | 0))) | 0;
									while (1) {
										if (U) m = s;
										else {
											m = (s + (S << 2)) | 0;
											d = w;
											e = i;
											h = S;
											while (1) {
												L = f[(e + B) >> 0] | 0;
												C = f[(e + p) >> 0] | 0;
												P = f[(e + o) >> 0] | 0;
												R = f[e >> 0] | 0;
												D = (P + L) | 0;
												E = f[(d + y) >> 0] | 0;
												a[(s + (g << 2)) >> 2] =
													(f[(e + y) >> 0] | 0) -
													D -
													(D << 2) +
													E +
													((((R + C) | 0) * 20) | 0);
												D = (E + R) | 0;
												F = f[(d + o) >> 0] | 0;
												a[(s + (S << 2)) >> 2] =
													P - D + F - (D << 2) + ((((C + L) | 0) * 20) | 0);
												D = f[d >> 0] | 0;
												P = (F + C) | 0;
												a[s >> 2] =
													R - P + D - (P << 2) + ((((E + L) | 0) * 20) | 0);
												L = (D + L) | 0;
												a[(s + (k << 2)) >> 2] =
													C -
													L +
													(f[(d + p) >> 0] | 0) -
													(L << 2) +
													((((F + E) | 0) * 20) | 0);
												h = (h + -1) | 0;
												if (!h) break;
												else {
													s = (s + 4) | 0;
													d = (d + 1) | 0;
													e = (e + 1) | 0;
												}
											}
											w = (w + S) | 0;
											i = (i + S) | 0;
										}
										t = (t + -1) | 0;
										if (!t) break;
										else {
											s = (m + (v << 2)) | 0;
											w = (w + A) | 0;
											i = (i + A) | 0;
										}
									}
								}
								if (!l) {
									c = M;
									return;
								}
								y = u >>> 2;
								B = (y | 0) == 0;
								g = (16 - u) | 0;
								v = y << 2;
								o = (_ + ((b + 2) << 2)) | 0;
								t = (_ + 20) | 0;
								while (1) {
									if (B) i = o;
									else {
										i = (o + (v << 2)) | 0;
										m = r;
										d = t;
										s = a[(t + -4) >> 2] | 0;
										h = a[(t + -8) >> 2] | 0;
										p = a[(t + -12) >> 2] | 0;
										k = a[(t + -16) >> 2] | 0;
										e = a[(t + -20) >> 2] | 0;
										w = y;
										while (1) {
											b = (k + s) | 0;
											u = k;
											k = a[d >> 2] | 0;
											n[m >> 0] =
												(((f[
													(((e +
														512 -
														b -
														(b << 2) +
														k +
														((((p + h) | 0) * 20) | 0)) >>
														10) +
														3984) >>
														0
												] |
													0) +
													1 +
													(f[((((a[o >> 2] | 0) + 16) >> 5) + 3984) >> 0] |
														0)) |
													0) >>>
												1;
											b = (k + p) | 0;
											e = p;
											p = a[(d + 4) >> 2] | 0;
											n[(m + 1) >> 0] =
												(((f[
													(((u +
														512 -
														b -
														(b << 2) +
														p +
														((((h + s) | 0) * 20) | 0)) >>
														10) +
														3984) >>
														0
												] |
													0) +
													1 +
													(f[
														((((a[(o + 4) >> 2] | 0) + 16) >> 5) + 3984) >> 0
													] |
														0)) |
													0) >>>
												1;
											b = (p + h) | 0;
											u = h;
											h = a[(d + 8) >> 2] | 0;
											n[(m + 2) >> 0] =
												(((f[
													(((e +
														512 -
														b -
														(b << 2) +
														h +
														((((k + s) | 0) * 20) | 0)) >>
														10) +
														3984) >>
														0
												] |
													0) +
													1 +
													(f[
														((((a[(o + 8) >> 2] | 0) + 16) >> 5) + 3984) >> 0
													] |
														0)) |
													0) >>>
												1;
											b = (h + s) | 0;
											e = a[(d + 12) >> 2] | 0;
											n[(m + 3) >> 0] =
												(((f[
													(((u +
														512 -
														b -
														(b << 2) +
														e +
														((((p + k) | 0) * 20) | 0)) >>
														10) +
														3984) >>
														0
												] |
													0) +
													1 +
													(f[
														((((a[(o + 12) >> 2] | 0) + 16) >> 5) + 3984) >> 0
													] |
														0)) |
													0) >>>
												1;
											w = (w + -1) | 0;
											if (!w) break;
											else {
												b = s;
												m = (m + 4) | 0;
												o = (o + 16) | 0;
												d = (d + 16) | 0;
												s = e;
												e = b;
											}
										}
										r = (r + v) | 0;
										t = (t + (v << 2)) | 0;
									}
									l = (l + -1) | 0;
									if (!l) break;
									else {
										r = (r + g) | 0;
										o = (i + 20) | 0;
										t = (t + 20) | 0;
									}
								}
								c = M;
								return;
							}
							function Ne(e, r, i, n, f, o, s, u, l) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								n = n | 0;
								f = f | 0;
								o = o | 0;
								s = s | 0;
								u = u | 0;
								l = l | 0;
								var b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0,
									g = 0,
									y = 0,
									B = 0,
									A = 0;
								A = c;
								k = (e + ((s << 4) + o)) | 0;
								g = t[r >> 1] | 0;
								B = (r + 2) | 0;
								v = t[B >> 1] | 0;
								m = (i + 4) | 0;
								p = a[m >> 2] << 4;
								w = (i + 8) | 0;
								h = a[w >> 2] << 4;
								n = (o + n) | 0;
								b = (n + (g >> 2)) | 0;
								f = (s + f) | 0;
								d = (f + (v >> 2)) | 0;
								do
									switch (
										a[(6800 + ((g & 3) << 4) + ((v & 3) << 2)) >> 2] | 0
									) {
										case 10: {
											Ie(
												a[i >> 2] | 0,
												k,
												(b + -2) | 0,
												(d + -2) | 0,
												p,
												h,
												u,
												l
											);
											break;
										}
										case 6: {
											ze(
												a[i >> 2] | 0,
												k,
												(b + -2) | 0,
												(d + -2) | 0,
												p,
												h,
												u,
												l,
												0
											);
											break;
										}
										case 4: {
											Re(a[i >> 2] | 0, k, (b + -2) | 0, d, p, h, u, l, 0);
											break;
										}
										case 1: {
											De(a[i >> 2] | 0, k, b, (d + -2) | 0, p, h, u, l, 0);
											break;
										}
										case 2: {
											Ce(a[i >> 2] | 0, k, b, (d + -2) | 0, p, h, u, l);
											break;
										}
										case 12: {
											Re(a[i >> 2] | 0, k, (b + -2) | 0, d, p, h, u, l, 1);
											break;
										}
										case 14: {
											ze(
												a[i >> 2] | 0,
												k,
												(b + -2) | 0,
												(d + -2) | 0,
												p,
												h,
												u,
												l,
												1
											);
											break;
										}
										case 7: {
											Oe(
												a[i >> 2] | 0,
												k,
												(b + -2) | 0,
												(d + -2) | 0,
												p,
												h,
												u,
												l,
												2
											);
											break;
										}
										case 13: {
											Oe(
												a[i >> 2] | 0,
												k,
												(b + -2) | 0,
												(d + -2) | 0,
												p,
												h,
												u,
												l,
												1
											);
											break;
										}
										case 5: {
											Oe(
												a[i >> 2] | 0,
												k,
												(b + -2) | 0,
												(d + -2) | 0,
												p,
												h,
												u,
												l,
												0
											);
											break;
										}
										case 0: {
											Ee(a[i >> 2] | 0, k, b, d, p, h, u, l, 16);
											break;
										}
										case 9: {
											Te(
												a[i >> 2] | 0,
												k,
												(b + -2) | 0,
												(d + -2) | 0,
												p,
												h,
												u,
												l,
												0
											);
											break;
										}
										case 8: {
											Pe(a[i >> 2] | 0, k, (b + -2) | 0, d, p, h, u, l);
											break;
										}
										case 3: {
											De(a[i >> 2] | 0, k, b, (d + -2) | 0, p, h, u, l, 1);
											break;
										}
										case 11: {
											Te(
												a[i >> 2] | 0,
												k,
												(b + -2) | 0,
												(d + -2) | 0,
												p,
												h,
												u,
												l,
												1
											);
											break;
										}
										default:
											Oe(
												a[i >> 2] | 0,
												k,
												(b + -2) | 0,
												(d + -2) | 0,
												p,
												h,
												u,
												l,
												3
											);
									}
								while (0);
								g = ((o >>> 1) + 256 + ((s >>> 1) << 3)) | 0;
								y = (e + g) | 0;
								v = a[i >> 2] | 0;
								b = a[m >> 2] | 0;
								s = a[w >> 2] | 0;
								w = b << 3;
								m = s << 3;
								p = t[r >> 1] | 0;
								i = ((p >> 3) + (n >>> 1)) | 0;
								k = t[B >> 1] | 0;
								h = ((k >> 3) + (f >>> 1)) | 0;
								p = p & 7;
								k = k & 7;
								f = u >>> 1;
								o = l >>> 1;
								s = ee(b << 8, s) | 0;
								n = (v + s) | 0;
								b = (p | 0) != 0;
								d = (k | 0) != 0;
								if (b & d) {
									Le(n, y, i, h, w, m, p, k, f, o);
									c = A;
									return;
								}
								if (b) {
									Me(n, y, i, h, w, m, p, f, o);
									c = A;
									return;
								}
								if (d) {
									Fe(n, y, i, h, w, m, k, f, o);
									c = A;
									return;
								} else {
									Ee(n, y, i, h, w, m, f, o, 8);
									Ee(
										(v + ((ee(m, w) | 0) + s)) | 0,
										(e + (g + 64)) | 0,
										i,
										h,
										w,
										m,
										f,
										o,
										8
									);
									c = A;
									return;
								}
							}
							function xe(e, r, i, t, a) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								t = t | 0;
								a = a | 0;
								var f = 0,
									o = 0,
									s = 0;
								s = c;
								if (i) {
									kn(r | 0, n[e >> 0] | 0, i | 0) | 0;
									r = (r + i) | 0;
								}
								if (t) {
									o = (r + t) | 0;
									f = t;
									i = e;
									while (1) {
										n[r >> 0] = n[i >> 0] | 0;
										f = (f + -1) | 0;
										if (!f) break;
										else {
											r = (r + 1) | 0;
											i = (i + 1) | 0;
										}
									}
									r = o;
									e = (e + t) | 0;
								}
								if (!a) {
									c = s;
									return;
								}
								kn(r | 0, n[(e + -1) >> 0] | 0, a | 0) | 0;
								c = s;
								return;
							}
							function je(e, r, i, n, t) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								n = n | 0;
								t = t | 0;
								i = c;
								ln(r, e, n);
								c = i;
								return;
							}
							function He(e, r, i, n) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								n = n | 0;
								var t = 0,
									f = 0,
									o = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0;
								k = c;
								t = a[(e + 40) >> 2] | 0;
								if (t) {
									o = a[e >> 2] | 0;
									u = (e + 32) | 0;
									s = 0;
									do {
										if (
											(((a[(o + ((s * 40) | 0) + 20) >> 2] | 0) + -1) | 0) >>>
												0 <
											2
										) {
											f = a[(o + ((s * 40) | 0) + 12) >> 2] | 0;
											if (f >>> 0 > i >>> 0) f = (f - (a[u >> 2] | 0)) | 0;
											a[(o + ((s * 40) | 0) + 8) >> 2] = f;
										}
										s = (s + 1) | 0;
									} while ((s | 0) != (t | 0));
								}
								if (!(a[r >> 2] | 0)) {
									p = 0;
									c = k;
									return p | 0;
								}
								f = a[(r + 4) >> 2] | 0;
								if (f >>> 0 >= 3) {
									p = 0;
									c = k;
									return p | 0;
								}
								h = (e + 32) | 0;
								p = (e + 24) | 0;
								d = (e + 4) | 0;
								t = i;
								b = 0;
								e: while (1) {
									r: do
										if (f >>> 0 < 2) {
											u = a[(r + ((b * 12) | 0) + 8) >> 2] | 0;
											if (!f) {
												f = (t - u) | 0;
												if ((f | 0) < 0) f = ((a[h >> 2] | 0) + f) | 0;
											} else {
												l = (u + t) | 0;
												f = a[h >> 2] | 0;
												f = (l - ((l | 0) < (f | 0) ? 0 : f)) | 0;
											}
											if (f >>> 0 > i >>> 0) t = (f - (a[h >> 2] | 0)) | 0;
											else t = f;
											s = a[p >> 2] | 0;
											if (!s) {
												t = 1;
												f = 37;
												break e;
											}
											u = a[e >> 2] | 0;
											l = 0;
											while (1) {
												o = a[(u + ((l * 40) | 0) + 20) >> 2] | 0;
												if (
													((o + -1) | 0) >>> 0 < 2
														? (a[(u + ((l * 40) | 0) + 8) >> 2] | 0) == (t | 0)
														: 0
												) {
													t = f;
													break r;
												}
												l = (l + 1) | 0;
												if (l >>> 0 >= s >>> 0) {
													t = 1;
													f = 37;
													break e;
												}
											}
										} else {
											s = a[(r + ((b * 12) | 0) + 12) >> 2] | 0;
											o = a[p >> 2] | 0;
											if (!o) {
												t = 1;
												f = 37;
												break e;
											}
											u = a[e >> 2] | 0;
											f = 0;
											while (1) {
												if (
													(a[(u + ((f * 40) | 0) + 20) >> 2] | 0) == 3
														? (a[(u + ((f * 40) | 0) + 8) >> 2] | 0) == (s | 0)
														: 0
												) {
													o = 3;
													l = f;
													break r;
												}
												f = (f + 1) | 0;
												if (f >>> 0 >= o >>> 0) {
													t = 1;
													f = 37;
													break e;
												}
											}
										}
									while (0);
									if (!(((l | 0) > -1) & (o >>> 0 > 1))) {
										t = 1;
										f = 37;
										break;
									}
									if (b >>> 0 < n >>> 0) {
										u = n;
										do {
											s = u;
											u = (u + -1) | 0;
											o = a[d >> 2] | 0;
											a[(o + (s << 2)) >> 2] = a[(o + (u << 2)) >> 2];
										} while (u >>> 0 > b >>> 0);
										u = a[e >> 2] | 0;
									}
									a[((a[d >> 2] | 0) + (b << 2)) >> 2] = u + ((l * 40) | 0);
									b = (b + 1) | 0;
									if (b >>> 0 <= n >>> 0) {
										f = b;
										u = b;
										do {
											s = a[d >> 2] | 0;
											o = a[(s + (f << 2)) >> 2] | 0;
											if ((o | 0) != (((a[e >> 2] | 0) + ((l * 40) | 0)) | 0)) {
												a[(s + (u << 2)) >> 2] = o;
												u = (u + 1) | 0;
											}
											f = (f + 1) | 0;
										} while (f >>> 0 <= n >>> 0);
									}
									f = a[(r + ((b * 12) | 0) + 4) >> 2] | 0;
									if (f >>> 0 >= 3) {
										t = 0;
										f = 37;
										break;
									}
								}
								if ((f | 0) == 37) {
									c = k;
									return t | 0;
								}
								return 0;
							}
							function qe(e, r, i, n, t, f, o, s) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								n = n | 0;
								t = t | 0;
								f = f | 0;
								o = o | 0;
								s = s | 0;
								var u = 0,
									l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0,
									g = 0,
									y = 0,
									B = 0,
									A = 0,
									U = 0,
									S = 0,
									_ = 0,
									M = 0,
									E = 0,
									F = 0,
									L = 0,
									C = 0,
									D = 0,
									P = 0,
									R = 0,
									O = 0,
									I = 0;
								I = c;
								R = a[i >> 2] | 0;
								O = a[(e + 8) >> 2] | 0;
								if ((R | 0) != (a[O >> 2] | 0)) {
									F = 1;
									c = I;
									return F | 0;
								}
								M = (e + 52) | 0;
								a[M >> 2] = 0;
								D = a[(e + 56) >> 2] | 0;
								h = (D | 0) == 0;
								P = h & 1;
								do
									if (!r) {
										a[(O + 20) >> 2] = 0;
										a[(O + 12) >> 2] = n;
										a[(O + 8) >> 2] = n;
										a[(O + 16) >> 2] = t;
										a[(O + 24) >> 2] = P;
										if (h) {
											i = (e + 44) | 0;
											a[i >> 2] = (a[i >> 2] | 0) + 1;
											i = 0;
											w = 0;
										} else {
											i = D;
											w = 0;
										}
									} else {
										if (f) {
											u = (e + 20) | 0;
											a[u >> 2] = 0;
											l = (e + 16) | 0;
											a[l >> 2] = 0;
											w = a[e >> 2] | 0;
											m = (e + 44) | 0;
											k = 0;
											do {
												p = (w + ((k * 40) | 0) + 20) | 0;
												if (
													(a[p >> 2] | 0) != 0
														? ((a[p >> 2] = 0),
														  (a[(w + ((k * 40) | 0) + 24) >> 2] | 0) == 0)
														: 0
												)
													a[m >> 2] = (a[m >> 2] | 0) + -1;
												k = (k + 1) | 0;
											} while ((k | 0) != 16);
											e: do
												if (h) {
													d = a[(e + 28) >> 2] | 0;
													b = (e + 12) | 0;
													k = 0;
													while (1) {
														n = 0;
														p = 2147483647;
														h = 0;
														do {
															if (a[(w + ((n * 40) | 0) + 24) >> 2] | 0) {
																E = a[(w + ((n * 40) | 0) + 16) >> 2] | 0;
																F = (E | 0) < (p | 0);
																p = F ? E : p;
																h = F ? (w + ((n * 40) | 0)) | 0 : h;
															}
															n = (n + 1) | 0;
														} while (n >>> 0 <= d >>> 0);
														if (!h) {
															i = 0;
															break e;
														}
														F = a[b >> 2] | 0;
														a[(F + (k << 4)) >> 2] = a[h >> 2];
														a[(F + (k << 4) + 12) >> 2] = a[(h + 36) >> 2];
														a[(F + (k << 4) + 4) >> 2] = a[(h + 28) >> 2];
														a[(F + (k << 4) + 8) >> 2] = a[(h + 32) >> 2];
														k = (k + 1) | 0;
														a[l >> 2] = k;
														a[(h + 24) >> 2] = 0;
														if (a[(h + 20) >> 2] | 0) continue;
														a[m >> 2] = (a[m >> 2] | 0) + -1;
													}
												} else i = D;
											while (0);
											p = (e + 40) | 0;
											a[p >> 2] = 0;
											h = (e + 36) | 0;
											a[h >> 2] = 65535;
											a[(e + 48) >> 2] = 0;
											if (!(a[r >> 2] | i)) i = 0;
											else {
												a[l >> 2] = 0;
												a[u >> 2] = 0;
											}
											w = (a[(r + 4) >> 2] | 0) == 0;
											a[(O + 20) >> 2] = w ? 2 : 3;
											a[h >> 2] = w ? 65535 : 0;
											a[(O + 12) >> 2] = 0;
											a[(O + 8) >> 2] = 0;
											a[(O + 16) >> 2] = 0;
											a[(O + 24) >> 2] = P;
											a[m >> 2] = 1;
											a[p >> 2] = 1;
											w = 0;
											break;
										}
										if (!(a[(r + 8) >> 2] | 0)) {
											i = (e + 40) | 0;
											k = a[i >> 2] | 0;
											p = a[(e + 24) >> 2] | 0;
											if (k >>> 0 >= p >>> 0)
												if (k) {
													l = a[e >> 2] | 0;
													b = 0;
													h = -1;
													d = 0;
													do {
														if (
															(((a[(l + ((b * 40) | 0) + 20) >> 2] | 0) + -1) |
																0) >>>
																0 <
															2
														) {
															F = a[(l + ((b * 40) | 0) + 8) >> 2] | 0;
															E = ((F | 0) < (d | 0)) | ((h | 0) == -1);
															h = E ? b : h;
															d = E ? F : d;
														}
														b = (b + 1) | 0;
													} while ((b | 0) != (k | 0));
													if ((h | 0) > -1) {
														k = (k + -1) | 0;
														a[(l + ((h * 40) | 0) + 20) >> 2] = 0;
														a[i >> 2] = k;
														if (!(a[(l + ((h * 40) | 0) + 24) >> 2] | 0)) {
															i = (e + 44) | 0;
															a[i >> 2] = (a[i >> 2] | 0) + -1;
															i = D;
															d = 0;
														} else {
															i = D;
															d = 0;
														}
													} else {
														i = D;
														d = 1;
													}
												} else {
													k = 0;
													i = D;
													d = 1;
												}
											else {
												i = D;
												d = 0;
											}
										} else {
											L = (e + 24) | 0;
											E = (e + 40) | 0;
											y = (e + 44) | 0;
											A = (e + 36) | 0;
											_ = (e + 48) | 0;
											g = (e + 28) | 0;
											U = (e + 16) | 0;
											S = (e + 12) | 0;
											w = D;
											i = D;
											v = 0;
											B = 0;
											e: while (1) {
												switch (a[(r + ((v * 20) | 0) + 12) >> 2] | 0) {
													case 4: {
														l = a[(r + ((v * 20) | 0) + 28) >> 2] | 0;
														a[A >> 2] = l;
														b = a[L >> 2] | 0;
														if (!b) m = B;
														else {
															d = a[e >> 2] | 0;
															m = l;
															h = 0;
															do {
																u = (d + ((h * 40) | 0) + 20) | 0;
																do
																	if ((a[u >> 2] | 0) == 3) {
																		if (
																			(a[(d + ((h * 40) | 0) + 8) >> 2] | 0) >>>
																				0 <=
																			l >>> 0
																		)
																			if ((m | 0) == 65535) m = 65535;
																			else break;
																		a[u >> 2] = 0;
																		a[E >> 2] = (a[E >> 2] | 0) + -1;
																		if (
																			!(a[(d + ((h * 40) | 0) + 24) >> 2] | 0)
																		)
																			a[y >> 2] = (a[y >> 2] | 0) + -1;
																	}
																while (0);
																h = (h + 1) | 0;
															} while ((h | 0) != (b | 0));
															m = B;
														}
														break;
													}
													case 1: {
														d =
															(n - (a[(r + ((v * 20) | 0) + 16) >> 2] | 0)) | 0;
														l = a[L >> 2] | 0;
														if (!l) {
															d = 1;
															break e;
														}
														b = a[e >> 2] | 0;
														m = 0;
														while (1) {
															u = (b + ((m * 40) | 0) + 20) | 0;
															if (
																(((a[u >> 2] | 0) + -1) | 0) >>> 0 < 2
																	? (a[(b + ((m * 40) | 0) + 8) >> 2] | 0) ==
																	  (d | 0)
																	: 0
															)
																break;
															m = (m + 1) | 0;
															if (m >>> 0 >= l >>> 0) {
																d = 1;
																break e;
															}
														}
														if ((m | 0) < 0) {
															d = 1;
															break e;
														}
														a[u >> 2] = 0;
														a[E >> 2] = (a[E >> 2] | 0) + -1;
														if (!(a[(b + ((m * 40) | 0) + 24) >> 2] | 0)) {
															a[y >> 2] = (a[y >> 2] | 0) + -1;
															m = B;
														} else m = B;
														break;
													}
													case 6: {
														b = a[(r + ((v * 20) | 0) + 24) >> 2] | 0;
														m = a[A >> 2] | 0;
														if (((m | 0) == 65535) | (m >>> 0 < b >>> 0)) {
															d = 1;
															C = 101;
															break e;
														}
														w = a[L >> 2] | 0;
														r: do
															if (w) {
																l = a[e >> 2] | 0;
																m = 0;
																while (1) {
																	u = (l + ((m * 40) | 0) + 20) | 0;
																	if (
																		(a[u >> 2] | 0) == 3
																			? (a[(l + ((m * 40) | 0) + 8) >> 2] |
																					0) ==
																			  (b | 0)
																			: 0
																	)
																		break;
																	m = (m + 1) | 0;
																	if (m >>> 0 >= w >>> 0) {
																		C = 88;
																		break r;
																	}
																}
																a[u >> 2] = 0;
																u = ((a[E >> 2] | 0) + -1) | 0;
																a[E >> 2] = u;
																if (!(a[(l + ((m * 40) | 0) + 24) >> 2] | 0)) {
																	a[y >> 2] = (a[y >> 2] | 0) + -1;
																	m = u;
																} else m = u;
															} else {
																w = 0;
																C = 88;
															}
														while (0);
														if ((C | 0) == 88) {
															C = 0;
															m = a[E >> 2] | 0;
														}
														if (m >>> 0 >= w >>> 0) {
															d = 1;
															C = 101;
															break e;
														}
														a[(O + 12) >> 2] = n;
														a[(O + 8) >> 2] = b;
														a[(O + 16) >> 2] = t;
														a[(O + 20) >> 2] = 3;
														a[(O + 24) >> 2] = P;
														a[E >> 2] = m + 1;
														a[y >> 2] = (a[y >> 2] | 0) + 1;
														w = D;
														i = D;
														m = 1;
														break;
													}
													case 2: {
														l = a[(r + ((v * 20) | 0) + 20) >> 2] | 0;
														b = a[L >> 2] | 0;
														if (!b) {
															d = 1;
															break e;
														}
														d = a[e >> 2] | 0;
														m = 0;
														while (1) {
															u = (d + ((m * 40) | 0) + 20) | 0;
															if (
																(a[u >> 2] | 0) == 3
																	? (a[(d + ((m * 40) | 0) + 8) >> 2] | 0) ==
																	  (l | 0)
																	: 0
															)
																break;
															m = (m + 1) | 0;
															if (m >>> 0 >= b >>> 0) {
																d = 1;
																break e;
															}
														}
														if ((m | 0) < 0) {
															d = 1;
															break e;
														}
														a[u >> 2] = 0;
														a[E >> 2] = (a[E >> 2] | 0) + -1;
														if (!(a[(d + ((m * 40) | 0) + 24) >> 2] | 0)) {
															a[y >> 2] = (a[y >> 2] | 0) + -1;
															m = B;
														} else m = B;
														break;
													}
													case 3: {
														m = a[(r + ((v * 20) | 0) + 16) >> 2] | 0;
														d = a[(r + ((v * 20) | 0) + 24) >> 2] | 0;
														u = a[A >> 2] | 0;
														if (((u | 0) == 65535) | (u >>> 0 < d >>> 0)) {
															d = 1;
															break e;
														}
														h = a[L >> 2] | 0;
														if (!h) {
															d = 1;
															break e;
														}
														p = a[e >> 2] | 0;
														u = 0;
														while (1) {
															b = (p + ((u * 40) | 0) + 20) | 0;
															if (
																(a[b >> 2] | 0) == 3
																	? (a[(p + ((u * 40) | 0) + 8) >> 2] | 0) ==
																	  (d | 0)
																	: 0
															) {
																C = 47;
																break;
															}
															l = (u + 1) | 0;
															if (l >>> 0 < h >>> 0) u = l;
															else break;
														}
														if (
															(C | 0) == 47
																? ((C = 0),
																  (a[b >> 2] = 0),
																  (a[E >> 2] = (a[E >> 2] | 0) + -1),
																  (a[(p + ((u * 40) | 0) + 24) >> 2] | 0) == 0)
																: 0
														)
															a[y >> 2] = (a[y >> 2] | 0) + -1;
														b = (n - m) | 0;
														m = 0;
														while (1) {
															l = (p + ((m * 40) | 0) + 20) | 0;
															u = a[l >> 2] | 0;
															if (
																((u + -1) | 0) >>> 0 < 2
																	? ((F = (p + ((m * 40) | 0) + 8) | 0),
																	  (a[F >> 2] | 0) == (b | 0))
																	: 0
															)
																break;
															m = (m + 1) | 0;
															if (m >>> 0 >= h >>> 0) {
																d = 1;
																break e;
															}
														}
														if (!(((m | 0) > -1) & (u >>> 0 > 1))) {
															d = 1;
															break e;
														}
														a[l >> 2] = 3;
														a[F >> 2] = d;
														m = B;
														break;
													}
													case 5: {
														d = a[e >> 2] | 0;
														k = 0;
														do {
															p = (d + ((k * 40) | 0) + 20) | 0;
															if (
																(a[p >> 2] | 0) != 0
																	? ((a[p >> 2] = 0),
																	  (a[(d + ((k * 40) | 0) + 24) >> 2] | 0) ==
																			0)
																	: 0
															)
																a[y >> 2] = (a[y >> 2] | 0) + -1;
															k = (k + 1) | 0;
														} while ((k | 0) != 16);
														r: do
															if (!i) {
																l = a[g >> 2] | 0;
																b = w;
																while (1) {
																	i = 0;
																	m = 2147483647;
																	u = 0;
																	do {
																		if (a[(d + ((i * 40) | 0) + 24) >> 2] | 0) {
																			h = a[(d + ((i * 40) | 0) + 16) >> 2] | 0;
																			n = (h | 0) < (m | 0);
																			m = n ? h : m;
																			u = n ? (d + ((i * 40) | 0)) | 0 : u;
																		}
																		i = (i + 1) | 0;
																	} while (i >>> 0 <= l >>> 0);
																	if (!u) {
																		w = b;
																		i = 0;
																		break r;
																	}
																	m = a[U >> 2] | 0;
																	i = a[S >> 2] | 0;
																	a[(i + (m << 4)) >> 2] = a[u >> 2];
																	a[(i + (m << 4) + 12) >> 2] =
																		a[(u + 36) >> 2];
																	a[(i + (m << 4) + 4) >> 2] = a[(u + 28) >> 2];
																	a[(i + (m << 4) + 8) >> 2] = a[(u + 32) >> 2];
																	a[U >> 2] = m + 1;
																	a[(u + 24) >> 2] = 0;
																	if (!(a[(u + 20) >> 2] | 0))
																		a[y >> 2] = (a[y >> 2] | 0) + -1;
																	if (!b) b = 0;
																	else {
																		w = b;
																		i = b;
																		break;
																	}
																}
															}
														while (0);
														a[E >> 2] = 0;
														a[A >> 2] = 65535;
														a[_ >> 2] = 0;
														a[M >> 2] = 1;
														n = 0;
														m = B;
														break;
													}
													case 0: {
														d = 0;
														C = 101;
														break e;
													}
													default: {
														d = 1;
														break e;
													}
												}
												v = (v + 1) | 0;
												B = m;
											}
											if (B) {
												w = d;
												break;
											}
											k = a[E >> 2] | 0;
											p = a[L >> 2] | 0;
										}
										if (k >>> 0 < p >>> 0) {
											a[(O + 12) >> 2] = n;
											a[(O + 8) >> 2] = n;
											a[(O + 16) >> 2] = t;
											a[(O + 20) >> 2] = 2;
											a[(O + 24) >> 2] = P;
											w = (e + 44) | 0;
											a[w >> 2] = (a[w >> 2] | 0) + 1;
											a[(e + 40) >> 2] = k + 1;
											w = d;
										} else w = 1;
									}
								while (0);
								a[(O + 36) >> 2] = f;
								a[(O + 28) >> 2] = o;
								a[(O + 32) >> 2] = s;
								if (!i) {
									h = (e + 44) | 0;
									i = a[h >> 2] | 0;
									u = a[(e + 28) >> 2] | 0;
									if (i >>> 0 > u >>> 0) {
										p = (e + 16) | 0;
										k = (e + 12) | 0;
										do {
											d = a[e >> 2] | 0;
											n = 0;
											l = 2147483647;
											b = 0;
											do {
												if (a[(d + ((n * 40) | 0) + 24) >> 2] | 0) {
													E = a[(d + ((n * 40) | 0) + 16) >> 2] | 0;
													F = (E | 0) < (l | 0);
													l = F ? E : l;
													b = F ? (d + ((n * 40) | 0)) | 0 : b;
												}
												n = (n + 1) | 0;
											} while (n >>> 0 <= u >>> 0);
											if (
												(b | 0) != 0
													? ((F = a[p >> 2] | 0),
													  (E = a[k >> 2] | 0),
													  (a[(E + (F << 4)) >> 2] = a[b >> 2]),
													  (a[(E + (F << 4) + 12) >> 2] = a[(b + 36) >> 2]),
													  (a[(E + (F << 4) + 4) >> 2] = a[(b + 28) >> 2]),
													  (a[(E + (F << 4) + 8) >> 2] = a[(b + 32) >> 2]),
													  (a[p >> 2] = F + 1),
													  (a[(b + 24) >> 2] = 0),
													  (a[(b + 20) >> 2] | 0) == 0)
													: 0
											) {
												i = (i + -1) | 0;
												a[h >> 2] = i;
											}
										} while (i >>> 0 > u >>> 0);
									}
								} else {
									u = (e + 16) | 0;
									F = a[u >> 2] | 0;
									E = a[(e + 12) >> 2] | 0;
									a[(E + (F << 4)) >> 2] = R;
									a[(E + (F << 4) + 12) >> 2] = f;
									a[(E + (F << 4) + 4) >> 2] = o;
									a[(E + (F << 4) + 8) >> 2] = s;
									a[u >> 2] = F + 1;
									u = a[(e + 28) >> 2] | 0;
								}
								Qe(a[e >> 2] | 0, (u + 1) | 0);
								F = w;
								c = I;
								return F | 0;
							}
							function Ye(e, r) {
								e = e | 0;
								r = r | 0;
								var i = 0,
									n = 0;
								n = c;
								if (
									(
										r >>> 0 <= 16
											? ((i = a[((a[(e + 4) >> 2] | 0) + (r << 2)) >> 2] | 0),
											  (i | 0) != 0)
											: 0
									)
										? (a[(i + 20) >> 2] | 0) >>> 0 > 1
										: 0
								)
									i = a[i >> 2] | 0;
								else i = 0;
								c = n;
								return i | 0;
							}
							function Ke(e) {
								e = e | 0;
								var r = 0;
								r = ((a[e >> 2] | 0) + (((a[(e + 28) >> 2] | 0) * 40) | 0)) | 0;
								a[(e + 8) >> 2] = r;
								return a[r >> 2] | 0;
							}
							function Ve(e, r, i, n, t, f) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								n = n | 0;
								t = t | 0;
								f = f | 0;
								var o = 0,
									s = 0;
								s = c;
								a[(e + 36) >> 2] = 65535;
								n = n >>> 0 > 1 ? n : 1;
								a[(e + 24) >> 2] = n;
								o = (e + 28) | 0;
								a[o >> 2] = (f | 0) == 0 ? i : n;
								a[(e + 32) >> 2] = t;
								a[(e + 56) >> 2] = f;
								a[(e + 44) >> 2] = 0;
								a[(e + 40) >> 2] = 0;
								a[(e + 48) >> 2] = 0;
								f = sn(680) | 0;
								a[e >> 2] = f;
								if (!f) {
									f = 65535;
									c = s;
									return f | 0;
								}
								cn(f, 0, 680);
								e: do
									if ((a[o >> 2] | 0) != -1) {
										t = (r * 384) | 47;
										n = 0;
										while (1) {
											i = sn(t) | 0;
											f = a[e >> 2] | 0;
											a[(f + ((n * 40) | 0) + 4) >> 2] = i;
											if (!i) {
												f = 65535;
												break;
											}
											a[(f + ((n * 40) | 0)) >> 2] = i + ((0 - i) & 15);
											n = (n + 1) | 0;
											if (n >>> 0 >= (((a[o >> 2] | 0) + 1) | 0) >>> 0) break e;
										}
										c = s;
										return f | 0;
									}
								while (0);
								f = (e + 4) | 0;
								a[f >> 2] = sn(68) | 0;
								t = sn(((a[o >> 2] << 4) + 16) | 0) | 0;
								a[(e + 12) >> 2] = t;
								f = a[f >> 2] | 0;
								if (((f | 0) == 0) | ((t | 0) == 0)) {
									f = 65535;
									c = s;
									return f | 0;
								}
								cn(f, 0, 68);
								a[(e + 20) >> 2] = 0;
								a[(e + 16) >> 2] = 0;
								f = 0;
								c = s;
								return f | 0;
							}
							function Ge(e, r, i, n, t, f) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								n = n | 0;
								t = t | 0;
								f = f | 0;
								var o = 0,
									s = 0,
									u = 0,
									l = 0;
								l = c;
								o = a[e >> 2] | 0;
								if (o) {
									u = (e + 28) | 0;
									if ((a[u >> 2] | 0) != -1) {
										s = 0;
										do {
											un(a[(o + ((s * 40) | 0) + 4) >> 2] | 0);
											o = a[e >> 2] | 0;
											a[(o + ((s * 40) | 0) + 4) >> 2] = 0;
											s = (s + 1) | 0;
										} while (s >>> 0 < (((a[u >> 2] | 0) + 1) | 0) >>> 0);
									}
								} else o = 0;
								un(o);
								a[e >> 2] = 0;
								o = (e + 4) | 0;
								un(a[o >> 2] | 0);
								a[o >> 2] = 0;
								o = (e + 12) | 0;
								un(a[o >> 2] | 0);
								a[o >> 2] = 0;
								o = Ve(e, r, i, n, t, f) | 0;
								c = l;
								return o | 0;
							}
							function Ze(e) {
								e = e | 0;
								var r = 0,
									i = 0,
									n = 0,
									t = 0;
								t = c;
								r = a[e >> 2] | 0;
								if (r) {
									n = (e + 28) | 0;
									if ((a[n >> 2] | 0) != -1) {
										i = 0;
										do {
											un(a[(r + ((i * 40) | 0) + 4) >> 2] | 0);
											r = a[e >> 2] | 0;
											a[(r + ((i * 40) | 0) + 4) >> 2] = 0;
											i = (i + 1) | 0;
										} while (i >>> 0 < (((a[n >> 2] | 0) + 1) | 0) >>> 0);
									}
								} else r = 0;
								un(r);
								a[e >> 2] = 0;
								r = (e + 4) | 0;
								un(a[r >> 2] | 0);
								a[r >> 2] = 0;
								r = (e + 12) | 0;
								un(a[r >> 2] | 0);
								a[r >> 2] = 0;
								c = t;
								return;
							}
							function $e(e) {
								e = e | 0;
								var r = 0,
									i = 0,
									n = 0,
									t = 0;
								t = c;
								r = a[(e + 40) >> 2] | 0;
								if (!r) {
									c = t;
									return;
								}
								n = (e + 4) | 0;
								i = 0;
								do {
									a[((a[n >> 2] | 0) + (i << 2)) >> 2] =
										(a[e >> 2] | 0) + ((i * 40) | 0);
									i = (i + 1) | 0;
								} while (i >>> 0 < r >>> 0);
								c = t;
								return;
							}
							function Xe(e, r, i, n) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								n = n | 0;
								var t = 0,
									f = 0,
									o = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0,
									g = 0,
									y = 0,
									B = 0,
									A = 0,
									U = 0,
									S = 0,
									_ = 0;
								U = c;
								y = (e + 16) | 0;
								a[y >> 2] = 0;
								a[(e + 20) >> 2] = 0;
								if (!n) {
									r = 0;
									c = U;
									return r | 0;
								}
								A = (e + 48) | 0;
								n = a[A >> 2] | 0;
								t = (n | 0) == (r | 0);
								e: do
									if (
										!t
											? ((g = (e + 32) | 0),
											  (l = a[g >> 2] | 0),
											  (u = (((n + 1) | 0) >>> 0) % (l >>> 0) | 0),
											  (u | 0) != (r | 0))
											: 0
									) {
										v = (e + 28) | 0;
										B =
											a[((a[e >> 2] | 0) + (((a[v >> 2] | 0) * 40) | 0)) >> 2] |
											0;
										w = (e + 40) | 0;
										p = (e + 24) | 0;
										h = (e + 44) | 0;
										k = (e + 56) | 0;
										m = (e + 12) | 0;
										d = u;
										while (1) {
											u = a[w >> 2] | 0;
											if (!u) u = 0;
											else {
												s = a[e >> 2] | 0;
												o = 0;
												do {
													if (
														(((a[(s + ((o * 40) | 0) + 20) >> 2] | 0) + -1) |
															0) >>>
															0 <
														2
													) {
														n = a[(s + ((o * 40) | 0) + 12) >> 2] | 0;
														a[(s + ((o * 40) | 0) + 8) >> 2] =
															n - (n >>> 0 > d >>> 0 ? l : 0);
													}
													o = (o + 1) | 0;
												} while ((o | 0) != (u | 0));
											}
											if (u >>> 0 >= (a[p >> 2] | 0) >>> 0) {
												if (!u) {
													n = 1;
													f = 46;
													break;
												}
												t = a[e >> 2] | 0;
												o = 0;
												l = -1;
												s = 0;
												while (1) {
													if (
														(((a[(t + ((o * 40) | 0) + 20) >> 2] | 0) + -1) |
															0) >>>
															0 <
														2
													) {
														n = a[(t + ((o * 40) | 0) + 8) >> 2] | 0;
														b = ((n | 0) < (s | 0)) | ((l | 0) == -1);
														f = b ? o : l;
														s = b ? n : s;
													} else f = l;
													o = (o + 1) | 0;
													if ((o | 0) == (u | 0)) break;
													else l = f;
												}
												if ((f | 0) <= -1) {
													n = 1;
													f = 46;
													break;
												}
												l = (u + -1) | 0;
												a[(t + ((f * 40) | 0) + 20) >> 2] = 0;
												a[w >> 2] = l;
												if (!(a[(t + ((f * 40) | 0) + 24) >> 2] | 0)) {
													a[h >> 2] = (a[h >> 2] | 0) + -1;
													u = l;
												} else u = l;
											}
											l = a[h >> 2] | 0;
											b = a[v >> 2] | 0;
											if (l >>> 0 >= b >>> 0) {
												n = (a[k >> 2] | 0) == 0;
												do
													if (n) {
														f = a[e >> 2] | 0;
														t = 0;
														s = 2147483647;
														o = 0;
														do {
															if (a[(f + ((t * 40) | 0) + 24) >> 2] | 0) {
																_ = a[(f + ((t * 40) | 0) + 16) >> 2] | 0;
																S = (_ | 0) < (s | 0);
																s = S ? _ : s;
																o = S ? (f + ((t * 40) | 0)) | 0 : o;
															}
															t = (t + 1) | 0;
														} while (t >>> 0 <= b >>> 0);
														if (
															(o | 0) != 0
																? ((t = a[y >> 2] | 0),
																  (f = a[m >> 2] | 0),
																  (a[(f + (t << 4)) >> 2] = a[o >> 2]),
																  (a[(f + (t << 4) + 12) >> 2] =
																		a[(o + 36) >> 2]),
																  (a[(f + (t << 4) + 4) >> 2] =
																		a[(o + 28) >> 2]),
																  (a[(f + (t << 4) + 8) >> 2] =
																		a[(o + 32) >> 2]),
																  (a[y >> 2] = t + 1),
																  (a[(o + 24) >> 2] = 0),
																  (a[(o + 20) >> 2] | 0) == 0)
																: 0
														) {
															l = (l + -1) | 0;
															a[h >> 2] = l;
														}
													}
												while (l >>> 0 >= b >>> 0);
											}
											n = a[e >> 2] | 0;
											a[(n + ((b * 40) | 0) + 20) >> 2] = 1;
											a[(n + ((b * 40) | 0) + 12) >> 2] = d;
											a[(n + ((b * 40) | 0) + 8) >> 2] = d;
											a[(n + ((b * 40) | 0) + 16) >> 2] = 0;
											a[(n + ((b * 40) | 0) + 24) >> 2] = 0;
											a[h >> 2] = l + 1;
											a[w >> 2] = u + 1;
											Qe(n, (b + 1) | 0);
											l = a[g >> 2] | 0;
											d = (((d + 1) | 0) >>> 0) % (l >>> 0) | 0;
											if ((d | 0) == (r | 0)) {
												f = 31;
												break;
											}
										}
										if ((f | 0) == 31) {
											f = a[y >> 2] | 0;
											if (!f) {
												f = 41;
												break;
											}
											n = a[m >> 2] | 0;
											o = a[v >> 2] | 0;
											s = a[e >> 2] | 0;
											l = (s + ((o * 40) | 0)) | 0;
											u = a[l >> 2] | 0;
											t = 0;
											while (1) {
												if ((a[(n + (t << 4)) >> 2] | 0) == (u | 0)) break;
												t = (t + 1) | 0;
												if (t >>> 0 >= f >>> 0) {
													f = 41;
													break e;
												}
											}
											if (!o) {
												f = 41;
												break;
											} else n = 0;
											while (1) {
												t = (s + ((n * 40) | 0)) | 0;
												n = (n + 1) | 0;
												if ((a[t >> 2] | 0) == (B | 0)) break;
												if (n >>> 0 >= o >>> 0) {
													f = 41;
													break e;
												}
											}
											a[t >> 2] = u;
											a[l >> 2] = B;
											f = 41;
											break;
										} else if ((f | 0) == 46) {
											c = U;
											return n | 0;
										}
									} else f = 39;
								while (0);
								if ((f | 0) == 39)
									if (i)
										if (t) {
											r = 1;
											c = U;
											return r | 0;
										} else f = 41;
								do
									if ((f | 0) == 41) {
										if (!i) {
											n = a[A >> 2] | 0;
											break;
										}
										a[A >> 2] = r;
										r = 0;
										c = U;
										return r | 0;
									}
								while (0);
								if ((n | 0) == (r | 0)) {
									r = 0;
									c = U;
									return r | 0;
								}
								e = a[(e + 32) >> 2] | 0;
								a[A >> 2] = (((r + -1 + e) | 0) >>> 0) % (e >>> 0) | 0;
								r = 0;
								c = U;
								return r | 0;
							}
							function We(e) {
								e = e | 0;
								var r = 0,
									i = 0,
									n = 0;
								n = c;
								i = (e + 20) | 0;
								r = a[i >> 2] | 0;
								if (r >>> 0 >= (a[(e + 16) >> 2] | 0) >>> 0) {
									r = 0;
									c = n;
									return r | 0;
								}
								e = a[(e + 12) >> 2] | 0;
								a[i >> 2] = r + 1;
								r = (e + (r << 4)) | 0;
								c = n;
								return r | 0;
							}
							function Je(e) {
								e = e | 0;
								var r = 0,
									i = 0,
									n = 0,
									t = 0,
									f = 0,
									o = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0;
								u = c;
								t = a[e >> 2] | 0;
								if (!t) {
									c = u;
									return;
								}
								a[(e + 60) >> 2] = 1;
								if (a[(e + 56) >> 2] | 0) {
									c = u;
									return;
								}
								f = a[(e + 28) >> 2] | 0;
								o = (e + 16) | 0;
								s = (e + 12) | 0;
								n = (e + 44) | 0;
								e = 0;
								r = 2147483647;
								i = 0;
								while (1) {
									if (a[(t + ((e * 40) | 0) + 24) >> 2] | 0) {
										b = a[(t + ((e * 40) | 0) + 16) >> 2] | 0;
										l = (b | 0) < (r | 0);
										r = l ? b : r;
										i = l ? (t + ((e * 40) | 0)) | 0 : i;
									}
									e = (e + 1) | 0;
									if (e >>> 0 <= f >>> 0) continue;
									if (!i) break;
									l = a[o >> 2] | 0;
									r = a[s >> 2] | 0;
									a[(r + (l << 4)) >> 2] = a[i >> 2];
									a[(r + (l << 4) + 12) >> 2] = a[(i + 36) >> 2];
									a[(r + (l << 4) + 4) >> 2] = a[(i + 28) >> 2];
									a[(r + (l << 4) + 8) >> 2] = a[(i + 32) >> 2];
									a[o >> 2] = l + 1;
									a[(i + 24) >> 2] = 0;
									if (a[(i + 20) >> 2] | 0) {
										e = 0;
										r = 2147483647;
										i = 0;
										continue;
									}
									a[n >> 2] = (a[n >> 2] | 0) + -1;
									e = 0;
									r = 2147483647;
									i = 0;
								}
								c = u;
								return;
							}
							function Qe(e, r) {
								e = e | 0;
								r = r | 0;
								var i = 0,
									n = 0,
									t = 0,
									f = 0,
									o = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0,
									g = 0,
									y = 0;
								y = c;
								c = (c + 32) | 0;
								k = (y + 16) | 0;
								v = y;
								h = 7;
								do {
									if (h >>> 0 < r >>> 0) {
										d = h;
										do {
											b = (e + ((d * 40) | 0)) | 0;
											l = a[b >> 2] | 0;
											b = a[(b + 4) >> 2] | 0;
											p = a[(e + ((d * 40) | 0) + 8) >> 2] | 0;
											u = (e + ((d * 40) | 0) + 12) | 0;
											m = a[(u + 4) >> 2] | 0;
											w = k;
											a[w >> 2] = a[u >> 2];
											a[(w + 4) >> 2] = m;
											w = a[(e + ((d * 40) | 0) + 20) >> 2] | 0;
											m = a[(e + ((d * 40) | 0) + 24) >> 2] | 0;
											u = (e + ((d * 40) | 0) + 28) | 0;
											a[(v + 0) >> 2] = a[(u + 0) >> 2];
											a[(v + 4) >> 2] = a[(u + 4) >> 2];
											a[(v + 8) >> 2] = a[(u + 8) >> 2];
											e: do
												if (d >>> 0 < h >>> 0) {
													i = d;
													g = 8;
												} else {
													t = (m | 0) == 0;
													s = (w + -1) | 0;
													u = s >>> 0 < 2;
													r: do
														if (!w) {
															n = d;
															while (1) {
																i = (n - h) | 0;
																if (a[(e + ((i * 40) | 0) + 20) >> 2] | 0) {
																	i = n;
																	break r;
																}
																if (
																	((a[(e + ((i * 40) | 0) + 24) >> 2] | 0) !=
																		0) |
																	t
																) {
																	i = n;
																	break r;
																}
																n = (e + ((n * 40) | 0) + 0) | 0;
																f = (e + ((i * 40) | 0) + 0) | 0;
																o = (n + 40) | 0;
																do {
																	a[n >> 2] = a[f >> 2];
																	n = (n + 4) | 0;
																	f = (f + 4) | 0;
																} while ((n | 0) < (o | 0));
																if (i >>> 0 < h >>> 0) {
																	g = 8;
																	break e;
																} else n = i;
															}
														} else {
															i = d;
															while (1) {
																t = (i - h) | 0;
																n = a[(e + ((t * 40) | 0) + 20) >> 2] | 0;
																do
																	if (n) {
																		n = (n + -1) | 0;
																		if ((n | s) >>> 0 < 2) {
																			n = a[(e + ((t * 40) | 0) + 8) >> 2] | 0;
																			if ((n | 0) > (p | 0)) break r;
																			i = (e + ((i * 40) | 0)) | 0;
																			if ((n | 0) < (p | 0)) break;
																			else break e;
																		}
																		if (n >>> 0 < 2) break r;
																		if (
																			!u
																				? (a[(e + ((t * 40) | 0) + 8) >> 2] |
																						0) <=
																				  (p | 0)
																				: 0
																		)
																			break r;
																		else g = 16;
																	} else g = 16;
																while (0);
																if ((g | 0) == 16) {
																	g = 0;
																	i = (e + ((i * 40) | 0)) | 0;
																}
																n = (i + 0) | 0;
																f = (e + ((t * 40) | 0) + 0) | 0;
																o = (n + 40) | 0;
																do {
																	a[n >> 2] = a[f >> 2];
																	n = (n + 4) | 0;
																	f = (f + 4) | 0;
																} while ((n | 0) < (o | 0));
																if (t >>> 0 < h >>> 0) {
																	i = t;
																	g = 8;
																	break e;
																} else i = t;
															}
														}
													while (0);
													i = (e + ((i * 40) | 0)) | 0;
												}
											while (0);
											if ((g | 0) == 8) {
												g = 0;
												i = (e + ((i * 40) | 0)) | 0;
											}
											u = i;
											a[u >> 2] = l;
											a[(u + 4) >> 2] = b;
											a[(i + 8) >> 2] = p;
											u = k;
											l = a[(u + 4) >> 2] | 0;
											b = (i + 12) | 0;
											a[b >> 2] = a[u >> 2];
											a[(b + 4) >> 2] = l;
											a[(i + 20) >> 2] = w;
											a[(i + 24) >> 2] = m;
											b = (i + 28) | 0;
											a[(b + 0) >> 2] = a[(v + 0) >> 2];
											a[(b + 4) >> 2] = a[(v + 4) >> 2];
											a[(b + 8) >> 2] = a[(v + 8) >> 2];
											d = (d + 1) | 0;
										} while ((d | 0) != (r | 0));
									}
									h = h >>> 1;
								} while ((h | 0) != 0);
								c = y;
								return;
							}
							function er(e, r) {
								e = e | 0;
								r = r | 0;
								var i = 0,
									n = 0,
									t = 0,
									f = 0,
									o = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0;
								l = c;
								n = a[(e + 4) >> 2] | 0;
								t = a[(e + 16) >> 2] | 0;
								f = a[(e + 20) >> 2] | 0;
								s = n << 2;
								u = (r + 256) | 0;
								o = 16;
								e = a[(e + 12) >> 2] | 0;
								i = r;
								while (1) {
									b = a[(i + 4) >> 2] | 0;
									a[e >> 2] = a[i >> 2];
									a[(e + 4) >> 2] = b;
									b = a[(i + 12) >> 2] | 0;
									a[(e + 8) >> 2] = a[(i + 8) >> 2];
									a[(e + 12) >> 2] = b;
									o = (o + -1) | 0;
									if (!o) break;
									else {
										e = (e + (s << 2)) | 0;
										i = (i + 16) | 0;
									}
								}
								s = (n << 1) & 2147483646;
								o = a[(r + 260) >> 2] | 0;
								a[t >> 2] = a[u >> 2];
								a[(t + 4) >> 2] = o;
								u = a[(r + 268) >> 2] | 0;
								a[(t + (s << 2)) >> 2] = a[(r + 264) >> 2];
								a[(t + ((s | 1) << 2)) >> 2] = u;
								u = n << 2;
								o = a[(r + 276) >> 2] | 0;
								a[(t + (u << 2)) >> 2] = a[(r + 272) >> 2];
								a[(t + ((u | 1) << 2)) >> 2] = o;
								u = (u + s) | 0;
								o = a[(r + 284) >> 2] | 0;
								a[(t + (u << 2)) >> 2] = a[(r + 280) >> 2];
								a[(t + ((u | 1) << 2)) >> 2] = o;
								u = (u + s) | 0;
								o = a[(r + 292) >> 2] | 0;
								a[(t + (u << 2)) >> 2] = a[(r + 288) >> 2];
								a[(t + ((u | 1) << 2)) >> 2] = o;
								u = (u + s) | 0;
								o = a[(r + 300) >> 2] | 0;
								a[(t + (u << 2)) >> 2] = a[(r + 296) >> 2];
								a[(t + ((u | 1) << 2)) >> 2] = o;
								u = (u + s) | 0;
								o = a[(r + 308) >> 2] | 0;
								a[(t + (u << 2)) >> 2] = a[(r + 304) >> 2];
								a[(t + ((u | 1) << 2)) >> 2] = o;
								u = (u + s) | 0;
								o = a[(r + 316) >> 2] | 0;
								a[(t + (u << 2)) >> 2] = a[(r + 312) >> 2];
								a[(t + ((u | 1) << 2)) >> 2] = o;
								u = a[(r + 324) >> 2] | 0;
								a[f >> 2] = a[(r + 320) >> 2];
								a[(f + 4) >> 2] = u;
								u = a[(r + 332) >> 2] | 0;
								a[(f + (s << 2)) >> 2] = a[(r + 328) >> 2];
								a[(f + ((s | 1) << 2)) >> 2] = u;
								u = n << 2;
								o = a[(r + 340) >> 2] | 0;
								a[(f + (u << 2)) >> 2] = a[(r + 336) >> 2];
								a[(f + ((u | 1) << 2)) >> 2] = o;
								u = (u + s) | 0;
								o = a[(r + 348) >> 2] | 0;
								a[(f + (u << 2)) >> 2] = a[(r + 344) >> 2];
								a[(f + ((u | 1) << 2)) >> 2] = o;
								u = (u + s) | 0;
								o = a[(r + 356) >> 2] | 0;
								a[(f + (u << 2)) >> 2] = a[(r + 352) >> 2];
								a[(f + ((u | 1) << 2)) >> 2] = o;
								u = (u + s) | 0;
								o = a[(r + 364) >> 2] | 0;
								a[(f + (u << 2)) >> 2] = a[(r + 360) >> 2];
								a[(f + ((u | 1) << 2)) >> 2] = o;
								u = (u + s) | 0;
								o = a[(r + 372) >> 2] | 0;
								a[(f + (u << 2)) >> 2] = a[(r + 368) >> 2];
								a[(f + ((u | 1) << 2)) >> 2] = o;
								u = (u + s) | 0;
								s = a[(r + 380) >> 2] | 0;
								a[(f + (u << 2)) >> 2] = a[(r + 376) >> 2];
								a[(f + ((u | 1) << 2)) >> 2] = s;
								c = l;
								return;
							}
							function rr(e, r, i, t) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								t = t | 0;
								var o = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0,
									g = 0,
									y = 0,
									B = 0,
									A = 0,
									U = 0,
									S = 0,
									_ = 0;
								U = c;
								w = a[(e + 4) >> 2] | 0;
								m = ee(a[(e + 8) >> 2] | 0, w) | 0;
								B = (r >>> 0) % (w >>> 0) | 0;
								A = a[e >> 2] | 0;
								g = (r - B) | 0;
								e = ((g << 8) + (B << 4)) | 0;
								y = m << 8;
								B = B << 3;
								p = w << 4;
								h = (w << 2) & 1073741820;
								l = h << 1;
								b = (l + h) | 0;
								d = 0;
								do {
									u = a[(3344 + (d << 2)) >> 2] | 0;
									s = a[(3408 + (d << 2)) >> 2] | 0;
									r = ((s << 4) + u) | 0;
									o = (i + r) | 0;
									s = (e + u + (ee(s, p) | 0)) | 0;
									u = (A + s) | 0;
									k = a[(t + (d << 6)) >> 2] | 0;
									if ((k | 0) == 16777215) {
										s = a[(i + (r + 16)) >> 2] | 0;
										a[u >> 2] = a[o >> 2];
										a[(u + (h << 2)) >> 2] = s;
										s = a[(i + (r + 48)) >> 2] | 0;
										a[(u + (l << 2)) >> 2] = a[(i + (r + 32)) >> 2];
										a[(u + (b << 2)) >> 2] = s;
									} else {
										_ = f[(i + (r + 1)) >> 0] | 0;
										S = a[(t + (d << 6) + 4) >> 2] | 0;
										n[u >> 0] =
											n[(3472 + (k + 512 + (f[o >> 0] | 0))) >> 0] | 0;
										k = f[(i + (r + 2)) >> 0] | 0;
										v = a[(t + (d << 6) + 8) >> 2] | 0;
										n[(A + (s + 1)) >> 0] =
											n[(3472 + ((_ | 512) + S)) >> 0] | 0;
										u = f[(i + (r + 3)) >> 0] | 0;
										o = a[(t + (d << 6) + 12) >> 2] | 0;
										n[(A + (s + 2)) >> 0] = n[(3472 + (v + 512 + k)) >> 0] | 0;
										n[(A + (s + 3)) >> 0] = n[(3472 + (o + 512 + u)) >> 0] | 0;
										u = (s + p) | 0;
										o = f[(i + (r + 17)) >> 0] | 0;
										s = a[(t + (d << 6) + 20) >> 2] | 0;
										n[(A + u) >> 0] =
											n[
												(3472 +
													((a[(t + (d << 6) + 16) >> 2] | 0) +
														512 +
														(f[(i + (r + 16)) >> 0] | 0))) >>
													0
											] | 0;
										k = f[(i + (r + 18)) >> 0] | 0;
										v = a[(t + (d << 6) + 24) >> 2] | 0;
										n[(A + (u + 1)) >> 0] =
											n[(3472 + ((o | 512) + s)) >> 0] | 0;
										s = f[(i + (r + 19)) >> 0] | 0;
										o = a[(t + (d << 6) + 28) >> 2] | 0;
										n[(A + (u + 2)) >> 0] = n[(3472 + (v + 512 + k)) >> 0] | 0;
										n[(A + (u + 3)) >> 0] = n[(3472 + (o + 512 + s)) >> 0] | 0;
										u = (u + p) | 0;
										s = f[(i + (r + 33)) >> 0] | 0;
										o = a[(t + (d << 6) + 36) >> 2] | 0;
										n[(A + u) >> 0] =
											n[
												(3472 +
													((a[(t + (d << 6) + 32) >> 2] | 0) +
														512 +
														(f[(i + (r + 32)) >> 0] | 0))) >>
													0
											] | 0;
										k = f[(i + (r + 34)) >> 0] | 0;
										v = a[(t + (d << 6) + 40) >> 2] | 0;
										n[(A + (u + 1)) >> 0] =
											n[(3472 + ((s | 512) + o)) >> 0] | 0;
										o = f[(i + (r + 35)) >> 0] | 0;
										s = a[(t + (d << 6) + 44) >> 2] | 0;
										n[(A + (u + 2)) >> 0] = n[(3472 + (v + 512 + k)) >> 0] | 0;
										n[(A + (u + 3)) >> 0] = n[(3472 + (s + 512 + o)) >> 0] | 0;
										u = (u + p) | 0;
										o = f[(i + (r + 49)) >> 0] | 0;
										s = a[(t + (d << 6) + 52) >> 2] | 0;
										n[(A + u) >> 0] =
											n[
												(3472 +
													((a[(t + (d << 6) + 48) >> 2] | 0) +
														512 +
														(f[(i + (r + 48)) >> 0] | 0))) >>
													0
											] | 0;
										k = f[(i + (r + 50)) >> 0] | 0;
										v = a[(t + (d << 6) + 56) >> 2] | 0;
										n[(A + (u + 1)) >> 0] =
											n[(3472 + ((o | 512) + s)) >> 0] | 0;
										s = f[(i + (r + 51)) >> 0] | 0;
										o = a[(t + (d << 6) + 60) >> 2] | 0;
										n[(A + (u + 2)) >> 0] = n[(3472 + (v + 512 + k)) >> 0] | 0;
										n[(A + (u + 3)) >> 0] = n[(3472 + (o + 512 + s)) >> 0] | 0;
									}
									d = (d + 1) | 0;
								} while ((d | 0) != 16);
								v = m << 6;
								m = (w << 3) & 2147483640;
								w = (i + 256) | 0;
								i = (i + 320) | 0;
								l = (B + y + (g << 6)) | 0;
								p = m >>> 2;
								s = m >>> 1;
								u = (s + p) | 0;
								h = 16;
								do {
									k = h & 3;
									o = a[(3344 + (k << 2)) >> 2] | 0;
									k = a[(3408 + (k << 2)) >> 2] | 0;
									r = h >>> 0 > 19;
									b = r ? i : w;
									d = ((k << 3) + o) | 0;
									e = (b + d) | 0;
									k = (l + (r ? v : 0) + o + (ee(k, m) | 0)) | 0;
									o = (A + k) | 0;
									r = a[(t + (h << 6)) >> 2] | 0;
									if ((r | 0) == 16777215) {
										S = a[(b + (d + 8)) >> 2] | 0;
										a[o >> 2] = a[e >> 2];
										a[(o + (p << 2)) >> 2] = S;
										S = a[(b + (d + 24)) >> 2] | 0;
										a[(o + (s << 2)) >> 2] = a[(b + (d + 16)) >> 2];
										a[(o + (u << 2)) >> 2] = S;
									} else {
										y = f[(b + (d + 1)) >> 0] | 0;
										S = a[(t + (h << 6) + 4) >> 2] | 0;
										n[o >> 0] =
											n[(3472 + (r + 512 + (f[e >> 0] | 0))) >> 0] | 0;
										B = f[(b + (d + 2)) >> 0] | 0;
										g = a[(t + (h << 6) + 8) >> 2] | 0;
										n[(A + (k + 1)) >> 0] =
											n[(3472 + ((y | 512) + S)) >> 0] | 0;
										S = f[(b + (d + 3)) >> 0] | 0;
										y = a[(t + (h << 6) + 12) >> 2] | 0;
										n[(A + (k + 2)) >> 0] = n[(3472 + (g + 512 + B)) >> 0] | 0;
										n[(A + (k + 3)) >> 0] = n[(3472 + (y + 512 + S)) >> 0] | 0;
										S = (k + m) | 0;
										y = f[(b + (d + 9)) >> 0] | 0;
										B = a[(t + (h << 6) + 20) >> 2] | 0;
										n[(A + S) >> 0] =
											n[
												(3472 +
													((a[(t + (h << 6) + 16) >> 2] | 0) +
														512 +
														(f[(b + (d + 8)) >> 0] | 0))) >>
													0
											] | 0;
										g = f[(b + (d + 10)) >> 0] | 0;
										k = a[(t + (h << 6) + 24) >> 2] | 0;
										n[(A + (S + 1)) >> 0] =
											n[(3472 + ((y | 512) + B)) >> 0] | 0;
										B = f[(b + (d + 11)) >> 0] | 0;
										y = a[(t + (h << 6) + 28) >> 2] | 0;
										n[(A + (S + 2)) >> 0] = n[(3472 + (k + 512 + g)) >> 0] | 0;
										n[(A + (S + 3)) >> 0] = n[(3472 + (y + 512 + B)) >> 0] | 0;
										S = (S + m) | 0;
										B = f[(b + (d + 17)) >> 0] | 0;
										y = a[(t + (h << 6) + 36) >> 2] | 0;
										n[(A + S) >> 0] =
											n[
												(3472 +
													((a[(t + (h << 6) + 32) >> 2] | 0) +
														512 +
														(f[(b + (d + 16)) >> 0] | 0))) >>
													0
											] | 0;
										g = f[(b + (d + 18)) >> 0] | 0;
										k = a[(t + (h << 6) + 40) >> 2] | 0;
										n[(A + (S + 1)) >> 0] =
											n[(3472 + ((B | 512) + y)) >> 0] | 0;
										y = f[(b + (d + 19)) >> 0] | 0;
										B = a[(t + (h << 6) + 44) >> 2] | 0;
										n[(A + (S + 2)) >> 0] = n[(3472 + (k + 512 + g)) >> 0] | 0;
										n[(A + (S + 3)) >> 0] = n[(3472 + (B + 512 + y)) >> 0] | 0;
										S = (S + m) | 0;
										y = f[(b + (d + 25)) >> 0] | 0;
										B = a[(t + (h << 6) + 52) >> 2] | 0;
										n[(A + S) >> 0] =
											n[
												(3472 +
													((a[(t + (h << 6) + 48) >> 2] | 0) +
														512 +
														(f[(b + (d + 24)) >> 0] | 0))) >>
													0
											] | 0;
										g = f[(b + (d + 26)) >> 0] | 0;
										k = a[(t + (h << 6) + 56) >> 2] | 0;
										n[(A + (S + 1)) >> 0] =
											n[(3472 + ((y | 512) + B)) >> 0] | 0;
										B = f[(b + (d + 27)) >> 0] | 0;
										y = a[(t + (h << 6) + 60) >> 2] | 0;
										n[(A + (S + 2)) >> 0] = n[(3472 + (k + 512 + g)) >> 0] | 0;
										n[(A + (S + 3)) >> 0] = n[(3472 + (y + 512 + B)) >> 0] | 0;
									}
									h = (h + 1) | 0;
								} while ((h | 0) != 24);
								c = U;
								return;
							}
							function ir(e, r) {
								e = e | 0;
								r = r | 0;
								var i = 0,
									o = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0,
									g = 0,
									y = 0,
									B = 0,
									A = 0,
									U = 0,
									S = 0,
									_ = 0,
									M = 0,
									E = 0,
									F = 0,
									L = 0,
									C = 0,
									D = 0,
									P = 0,
									R = 0,
									O = 0,
									I = 0,
									T = 0,
									z = 0,
									N = 0,
									x = 0,
									j = 0,
									H = 0,
									q = 0,
									Y = 0,
									K = 0,
									V = 0,
									G = 0,
									Z = 0,
									$ = 0,
									X = 0,
									W = 0,
									J = 0,
									Q = 0,
									re = 0,
									ie = 0,
									ne = 0,
									te = 0,
									ae = 0,
									fe = 0,
									oe = 0,
									se = 0,
									ue = 0,
									le = 0,
									ce = 0,
									be = 0,
									de = 0,
									he = 0,
									pe = 0,
									ke = 0,
									we = 0,
									me = 0,
									ve = 0,
									ge = 0,
									ye = 0,
									Be = 0,
									Ae = 0,
									Ue = 0,
									Se = 0,
									_e = 0,
									Me = 0,
									Ee = 0,
									Fe = 0,
									Le = 0,
									Ce = 0,
									De = 0,
									Pe = 0,
									Re = 0,
									Oe = 0,
									Ie = 0,
									Te = 0,
									ze = 0,
									Ne = 0,
									xe = 0,
									je = 0,
									He = 0,
									qe = 0,
									Ye = 0,
									Ke = 0,
									Ve = 0,
									Ge = 0,
									Ze = 0,
									$e = 0,
									Xe = 0,
									We = 0,
									Je = 0,
									Qe = 0,
									er = 0;
								er = c;
								c = (c + 176) | 0;
								se = (er + 40) | 0;
								Te = er;
								te = a[(e + 4) >> 2] | 0;
								le = (e + 8) | 0;
								Ge = a[le >> 2] | 0;
								i = ee(Ge, te) | 0;
								if (!Ge) {
									c = er;
									return;
								}
								Xe = (se + 24) | 0;
								We = (se + 16) | 0;
								Je = (se + 8) | 0;
								ce = (se + 100) | 0;
								be = (se + 68) | 0;
								de = (se + 36) | 0;
								he = (se + 4) | 0;
								ze = (se + 120) | 0;
								Ne = (se + 112) | 0;
								xe = (se + 104) | 0;
								je = (se + 96) | 0;
								He = (se + 88) | 0;
								qe = (se + 80) | 0;
								Ye = (se + 72) | 0;
								Ke = (se + 64) | 0;
								Ve = (se + 56) | 0;
								Ge = (se + 48) | 0;
								Ze = (se + 40) | 0;
								$e = (se + 32) | 0;
								pe = (se + 124) | 0;
								ke = (se + 116) | 0;
								we = (se + 108) | 0;
								me = (se + 92) | 0;
								ve = (se + 84) | 0;
								ge = (se + 76) | 0;
								ye = (se + 60) | 0;
								Be = (se + 52) | 0;
								Ae = (se + 44) | 0;
								Ue = (se + 28) | 0;
								Se = (se + 20) | 0;
								_e = (se + 12) | 0;
								oe = (Te + 28) | 0;
								ue = (Te + 32) | 0;
								Ie = (Te + 24) | 0;
								Fe = te << 4;
								Oe = (0 - Fe) | 0;
								Ee = Oe << 1;
								Pe = ee(te, -48) | 0;
								Re = te << 5;
								Le = Oe << 2;
								De = (te * 48) | 0;
								Me = te << 6;
								fe = (Te + 24) | 0;
								ae = (Te + 12) | 0;
								Ce = i << 8;
								re = i << 6;
								ie = te << 3;
								Z = Fe | 4;
								X = (Te + 16) | 0;
								J = (Te + 20) | 0;
								ne = (Te + 12) | 0;
								$ = (Te + 4) | 0;
								W = (Te + 8) | 0;
								V = 0;
								Q = 0;
								G = r;
								while (1) {
									r = a[(G + 8) >> 2] | 0;
									do
										if ((r | 0) != 1) {
											K = (G + 200) | 0;
											d = a[K >> 2] | 0;
											do
												if (!d) i = 1;
												else {
													if (
														(r | 0) == 2
															? (a[(G + 4) >> 2] | 0) != (a[(d + 4) >> 2] | 0)
															: 0
													) {
														i = 1;
														break;
													}
													i = 5;
												}
											while (0);
											Y = (G + 204) | 0;
											l = a[Y >> 2] | 0;
											do
												if (l) {
													if (
														(r | 0) == 2
															? (a[(G + 4) >> 2] | 0) != (a[(l + 4) >> 2] | 0)
															: 0
													)
														break;
													i = i | 2;
												}
											while (0);
											q = ((i & 2) | 0) == 0;
											do
												if (q) {
													a[Xe >> 2] = 0;
													a[We >> 2] = 0;
													a[Je >> 2] = 0;
													a[se >> 2] = 0;
													b = 0;
												} else {
													if (
														(a[G >> 2] | 0) >>> 0 <= 5
															? (a[l >> 2] | 0) >>> 0 <= 5
															: 0
													) {
														if (
															(t[(G + 28) >> 1] | 0) == 0
																? (t[(l + 48) >> 1] | 0) == 0
																: 0
														)
															if (
																(a[(G + 116) >> 2] | 0) ==
																(a[(l + 124) >> 2] | 0)
																	? ((M =
																			((t[(G + 132) >> 1] | 0) -
																				(t[(l + 172) >> 1] | 0)) |
																			0),
																	  (((M | 0) > -1 ? M : (0 - M) | 0) | 0) <= 3)
																	: 0
															) {
																o =
																	((t[(G + 134) >> 1] | 0) -
																		(t[(l + 174) >> 1] | 0)) |
																	0;
																o =
																	((((o | 0) > -1 ? o : (0 - o) | 0) | 0) > 3) &
																	1;
															} else o = 1;
														else o = 2;
														a[se >> 2] = o;
														if (
															(t[(G + 30) >> 1] | 0) == 0
																? (t[(l + 50) >> 1] | 0) == 0
																: 0
														)
															if (
																(a[(G + 116) >> 2] | 0) ==
																(a[(l + 124) >> 2] | 0)
																	? ((M =
																			((t[(G + 136) >> 1] | 0) -
																				(t[(l + 176) >> 1] | 0)) |
																			0),
																	  (((M | 0) > -1 ? M : (0 - M) | 0) | 0) <= 3)
																	: 0
															) {
																s =
																	((t[(G + 138) >> 1] | 0) -
																		(t[(l + 178) >> 1] | 0)) |
																	0;
																s =
																	((((s | 0) > -1 ? s : (0 - s) | 0) | 0) > 3) &
																	1;
															} else s = 1;
														else s = 2;
														a[Je >> 2] = s;
														if (
															(t[(G + 36) >> 1] | 0) == 0
																? (t[(l + 56) >> 1] | 0) == 0
																: 0
														)
															if (
																(a[(G + 120) >> 2] | 0) ==
																(a[(l + 128) >> 2] | 0)
																	? ((M =
																			((t[(G + 148) >> 1] | 0) -
																				(t[(l + 188) >> 1] | 0)) |
																			0),
																	  (((M | 0) > -1 ? M : (0 - M) | 0) | 0) <= 3)
																	: 0
															) {
																u =
																	((t[(G + 150) >> 1] | 0) -
																		(t[(l + 190) >> 1] | 0)) |
																	0;
																u =
																	((((u | 0) > -1 ? u : (0 - u) | 0) | 0) > 3) &
																	1;
															} else u = 1;
														else u = 2;
														a[We >> 2] = u;
														if (
															(t[(G + 38) >> 1] | 0) == 0
																? (t[(l + 58) >> 1] | 0) == 0
																: 0
														)
															if (
																(a[(G + 120) >> 2] | 0) ==
																(a[(l + 128) >> 2] | 0)
																	? ((M =
																			((t[(G + 152) >> 1] | 0) -
																				(t[(l + 192) >> 1] | 0)) |
																			0),
																	  (((M | 0) > -1 ? M : (0 - M) | 0) | 0) <= 3)
																	: 0
															) {
																r =
																	((t[(G + 154) >> 1] | 0) -
																		(t[(l + 194) >> 1] | 0)) |
																	0;
																r =
																	((((r | 0) > -1 ? r : (0 - r) | 0) | 0) > 3) &
																	1;
															} else r = 1;
														else r = 2;
														a[Xe >> 2] = r;
														b = ((s | o | u | r | 0) != 0) & 1;
														break;
													}
													a[Xe >> 2] = 4;
													a[We >> 2] = 4;
													a[Je >> 2] = 4;
													a[se >> 2] = 4;
													b = 1;
												}
											while (0);
											H = ((i & 4) | 0) == 0;
											do
												if (H) {
													a[ce >> 2] = 0;
													a[be >> 2] = 0;
													a[de >> 2] = 0;
													a[he >> 2] = 0;
													u = a[G >> 2] | 0;
												} else {
													u = a[G >> 2] | 0;
													if (u >>> 0 <= 5 ? (a[d >> 2] | 0) >>> 0 <= 5 : 0) {
														if (
															(t[(G + 28) >> 1] | 0) == 0
																? (t[(d + 38) >> 1] | 0) == 0
																: 0
														)
															if (
																(a[(G + 116) >> 2] | 0) ==
																(a[(d + 120) >> 2] | 0)
																	? ((M =
																			((t[(G + 132) >> 1] | 0) -
																				(t[(d + 152) >> 1] | 0)) |
																			0),
																	  (((M | 0) > -1 ? M : (0 - M) | 0) | 0) <= 3)
																	: 0
															) {
																s =
																	((t[(G + 134) >> 1] | 0) -
																		(t[(d + 154) >> 1] | 0)) |
																	0;
																s =
																	((((s | 0) > -1 ? s : (0 - s) | 0) | 0) > 3) &
																	1;
															} else s = 1;
														else s = 2;
														a[he >> 2] = s;
														if (
															(t[(G + 32) >> 1] | 0) == 0
																? (t[(d + 42) >> 1] | 0) == 0
																: 0
														)
															if (
																(a[(G + 116) >> 2] | 0) ==
																(a[(d + 120) >> 2] | 0)
																	? ((M =
																			((t[(G + 140) >> 1] | 0) -
																				(t[(d + 160) >> 1] | 0)) |
																			0),
																	  (((M | 0) > -1 ? M : (0 - M) | 0) | 0) <= 3)
																	: 0
															) {
																o =
																	((t[(G + 142) >> 1] | 0) -
																		(t[(d + 162) >> 1] | 0)) |
																	0;
																o =
																	((((o | 0) > -1 ? o : (0 - o) | 0) | 0) > 3) &
																	1;
															} else o = 1;
														else o = 2;
														a[de >> 2] = o;
														if (
															(t[(G + 44) >> 1] | 0) == 0
																? (t[(d + 54) >> 1] | 0) == 0
																: 0
														)
															if (
																(a[(G + 124) >> 2] | 0) ==
																(a[(d + 128) >> 2] | 0)
																	? ((M =
																			((t[(G + 164) >> 1] | 0) -
																				(t[(d + 184) >> 1] | 0)) |
																			0),
																	  (((M | 0) > -1 ? M : (0 - M) | 0) | 0) <= 3)
																	: 0
															) {
																r =
																	((t[(G + 166) >> 1] | 0) -
																		(t[(d + 186) >> 1] | 0)) |
																	0;
																r =
																	((((r | 0) > -1 ? r : (0 - r) | 0) | 0) > 3) &
																	1;
															} else r = 1;
														else r = 2;
														a[be >> 2] = r;
														if (
															(t[(G + 48) >> 1] | 0) == 0
																? (t[(d + 58) >> 1] | 0) == 0
																: 0
														)
															if (
																(a[(G + 124) >> 2] | 0) ==
																(a[(d + 128) >> 2] | 0)
																	? ((M =
																			((t[(G + 172) >> 1] | 0) -
																				(t[(d + 192) >> 1] | 0)) |
																			0),
																	  (((M | 0) > -1 ? M : (0 - M) | 0) | 0) <= 3)
																	: 0
															) {
																l =
																	((t[(G + 174) >> 1] | 0) -
																		(t[(d + 194) >> 1] | 0)) |
																	0;
																l =
																	((((l | 0) > -1 ? l : (0 - l) | 0) | 0) > 3) &
																	1;
															} else l = 1;
														else l = 2;
														a[ce >> 2] = l;
														if (b) break;
														b = ((o | s | r | l | 0) != 0) & 1;
														break;
													}
													a[ce >> 2] = 4;
													a[be >> 2] = 4;
													a[de >> 2] = 4;
													a[he >> 2] = 4;
													b = 1;
												}
											while (0);
											if (u >>> 0 <= 5) {
												do
													if ((Nr(u) | 0) != 1) {
														r = a[G >> 2] | 0;
														if ((r | 0) == 2) {
															B = (G + 28) | 0;
															A = t[(G + 32) >> 1] | 0;
															if (!((A << 16) >> 16))
																r = (t[B >> 1] | 0) != 0 ? 2 : 0;
															else r = 2;
															a[$e >> 2] = r;
															k = t[(G + 34) >> 1] | 0;
															_ = (k << 16) >> 16 == 0;
															if (_) r = (t[(G + 30) >> 1] | 0) != 0 ? 2 : 0;
															else r = 2;
															a[Ze >> 2] = r;
															i = t[(G + 40) >> 1] | 0;
															S = (i << 16) >> 16 == 0;
															if (S) l = (t[(G + 36) >> 1] | 0) != 0 ? 2 : 0;
															else l = 2;
															a[Ge >> 2] = l;
															y = t[(G + 42) >> 1] | 0;
															U = (y << 16) >> 16 == 0;
															if (U) l = (t[(G + 38) >> 1] | 0) != 0 ? 2 : 0;
															else l = 2;
															a[Ve >> 2] = l;
															o = t[(G + 48) >> 1] | 0;
															if (!((o << 16) >> 16))
																l = (t[(G + 44) >> 1] | 0) != 0 ? 2 : 0;
															else l = 2;
															a[je >> 2] = l;
															u = t[(G + 50) >> 1] | 0;
															M = (u << 16) >> 16 == 0;
															if (M) l = (t[(G + 46) >> 1] | 0) != 0 ? 2 : 0;
															else l = 2;
															a[xe >> 2] = l;
															p = t[(G + 56) >> 1] | 0;
															r = (p << 16) >> 16 == 0;
															if (r) d = (t[(G + 52) >> 1] | 0) != 0 ? 2 : 0;
															else d = 2;
															a[Ne >> 2] = d;
															s = (t[(G + 58) >> 1] | 0) == 0;
															if (s) d = (t[(G + 54) >> 1] | 0) != 0 ? 2 : 0;
															else d = 2;
															a[ze >> 2] = d;
															w = t[(G + 44) >> 1] | 0;
															h = t[(G + 166) >> 1] | 0;
															d = t[(G + 142) >> 1] | 0;
															do
																if (!(((w | A) << 16) >> 16)) {
																	g =
																		((t[(G + 164) >> 1] | 0) -
																			(t[(G + 140) >> 1] | 0)) |
																		0;
																	if (
																		(((g | 0) > -1 ? g : (0 - g) | 0) | 0) >
																		3
																	) {
																		d = 1;
																		break;
																	}
																	g = (h - d) | 0;
																	if (
																		(((g | 0) > -1 ? g : (0 - g) | 0) | 0) >
																		3
																	) {
																		d = 1;
																		break;
																	}
																	d =
																		((a[(G + 124) >> 2] | 0) !=
																			(a[(G + 116) >> 2] | 0)) &
																		1;
																} else d = 2;
															while (0);
															a[Ke >> 2] = d;
															m = t[(G + 46) >> 1] | 0;
															h = t[(G + 170) >> 1] | 0;
															d = t[(G + 146) >> 1] | 0;
															do
																if (!(((m | k) << 16) >> 16)) {
																	g =
																		((t[(G + 168) >> 1] | 0) -
																			(t[(G + 144) >> 1] | 0)) |
																		0;
																	if (
																		(((g | 0) > -1 ? g : (0 - g) | 0) | 0) >
																		3
																	) {
																		h = 1;
																		break;
																	}
																	g = (h - d) | 0;
																	if (
																		(((g | 0) > -1 ? g : (0 - g) | 0) | 0) >
																		3
																	) {
																		h = 1;
																		break;
																	}
																	h =
																		((a[(G + 124) >> 2] | 0) !=
																			(a[(G + 116) >> 2] | 0)) &
																		1;
																} else h = 2;
															while (0);
															a[Ye >> 2] = h;
															v = t[(G + 52) >> 1] | 0;
															h = t[(G + 182) >> 1] | 0;
															d = t[(G + 158) >> 1] | 0;
															do
																if (!(((v | i) << 16) >> 16)) {
																	g =
																		((t[(G + 180) >> 1] | 0) -
																			(t[(G + 156) >> 1] | 0)) |
																		0;
																	if (
																		(((g | 0) > -1 ? g : (0 - g) | 0) | 0) >
																		3
																	) {
																		h = 1;
																		break;
																	}
																	g = (h - d) | 0;
																	if (
																		(((g | 0) > -1 ? g : (0 - g) | 0) | 0) >
																		3
																	) {
																		h = 1;
																		break;
																	}
																	h =
																		((a[(G + 128) >> 2] | 0) !=
																			(a[(G + 120) >> 2] | 0)) &
																		1;
																} else h = 2;
															while (0);
															a[qe >> 2] = h;
															g = t[(G + 54) >> 1] | 0;
															h = t[(G + 186) >> 1] | 0;
															d = t[(G + 162) >> 1] | 0;
															do
																if (!(((g | y) << 16) >> 16)) {
																	y =
																		((t[(G + 184) >> 1] | 0) -
																			(t[(G + 160) >> 1] | 0)) |
																		0;
																	if (
																		(((y | 0) > -1 ? y : (0 - y) | 0) | 0) >
																		3
																	) {
																		h = 1;
																		break;
																	}
																	y = (h - d) | 0;
																	if (
																		(((y | 0) > -1 ? y : (0 - y) | 0) | 0) >
																		3
																	) {
																		h = 1;
																		break;
																	}
																	h =
																		((a[(G + 128) >> 2] | 0) !=
																			(a[(G + 120) >> 2] | 0)) &
																		1;
																} else h = 2;
															while (0);
															a[He >> 2] = h;
															l = t[(G + 30) >> 1] | 0;
															if (!((l << 16) >> 16))
																h = (t[B >> 1] | 0) != 0 ? 2 : 0;
															else h = 2;
															a[_e >> 2] = h;
															d = t[(G + 36) >> 1] | 0;
															if (!((d << 16) >> 16))
																h = (l << 16) >> 16 != 0 ? 2 : 0;
															else h = 2;
															a[Se >> 2] = h;
															if (!(t[(G + 38) >> 1] | 0))
																h = (d << 16) >> 16 != 0 ? 2 : 0;
															else h = 2;
															a[Ue >> 2] = h;
															if (_) d = (A << 16) >> 16 != 0 ? 2 : 0;
															else d = 2;
															a[Ae >> 2] = d;
															if (S) l = (k << 16) >> 16 != 0 ? 2 : 0;
															else l = 2;
															a[Be >> 2] = l;
															if (U) l = (i << 16) >> 16 != 0 ? 2 : 0;
															else l = 2;
															a[ye >> 2] = l;
															if (!((m << 16) >> 16))
																l = (w << 16) >> 16 != 0 ? 2 : 0;
															else l = 2;
															a[ge >> 2] = l;
															if (!((v << 16) >> 16))
																l = (m << 16) >> 16 != 0 ? 2 : 0;
															else l = 2;
															a[ve >> 2] = l;
															if (!((g << 16) >> 16))
																l = (v << 16) >> 16 != 0 ? 2 : 0;
															else l = 2;
															a[me >> 2] = l;
															if (M) o = (o << 16) >> 16 != 0 ? 2 : 0;
															else o = 2;
															a[we >> 2] = o;
															if (r) r = (u << 16) >> 16 != 0 ? 2 : 0;
															else r = 2;
															a[ke >> 2] = r;
															if (s) r = (p << 16) >> 16 != 0 ? 2 : 0;
															else r = 2;
															a[pe >> 2] = r;
															break;
														} else if ((r | 0) == 3) {
															s = (G + 28) | 0;
															y = t[(G + 32) >> 1] | 0;
															if (!((y << 16) >> 16))
																r = (t[s >> 1] | 0) != 0 ? 2 : 0;
															else r = 2;
															a[$e >> 2] = r;
															M = t[(G + 34) >> 1] | 0;
															p = (M << 16) >> 16 == 0;
															if (p) o = (t[(G + 30) >> 1] | 0) != 0 ? 2 : 0;
															else o = 2;
															a[Ze >> 2] = o;
															S = t[(G + 40) >> 1] | 0;
															if (!((S << 16) >> 16))
																u = (t[(G + 36) >> 1] | 0) != 0 ? 2 : 0;
															else u = 2;
															a[Ge >> 2] = u;
															h = t[(G + 42) >> 1] | 0;
															o = (h << 16) >> 16 == 0;
															if (o) l = (t[(G + 38) >> 1] | 0) != 0 ? 2 : 0;
															else l = 2;
															a[Ve >> 2] = l;
															r = t[(G + 44) >> 1] | 0;
															if (!((r << 16) >> 16))
																l = (y << 16) >> 16 != 0 ? 2 : 0;
															else l = 2;
															a[Ke >> 2] = l;
															_ = t[(G + 46) >> 1] | 0;
															i = (_ << 16) >> 16 == 0;
															if (i) l = (M << 16) >> 16 != 0 ? 2 : 0;
															else l = 2;
															a[Ye >> 2] = l;
															U = t[(G + 52) >> 1] | 0;
															if (!((U << 16) >> 16))
																l = (S << 16) >> 16 != 0 ? 2 : 0;
															else l = 2;
															a[qe >> 2] = l;
															u = t[(G + 54) >> 1] | 0;
															k = (u << 16) >> 16 == 0;
															if (k) l = (h << 16) >> 16 != 0 ? 2 : 0;
															else l = 2;
															a[He >> 2] = l;
															w = t[(G + 48) >> 1] | 0;
															if (!((w << 16) >> 16))
																d = (r << 16) >> 16 != 0 ? 2 : 0;
															else d = 2;
															a[je >> 2] = d;
															A = t[(G + 50) >> 1] | 0;
															m = (A << 16) >> 16 == 0;
															if (m) d = (_ << 16) >> 16 != 0 ? 2 : 0;
															else d = 2;
															a[xe >> 2] = d;
															B = t[(G + 56) >> 1] | 0;
															if (!((B << 16) >> 16))
																h = (U << 16) >> 16 != 0 ? 2 : 0;
															else h = 2;
															a[Ne >> 2] = h;
															g = (t[(G + 58) >> 1] | 0) == 0;
															if (g) h = (u << 16) >> 16 != 0 ? 2 : 0;
															else h = 2;
															a[ze >> 2] = h;
															v = t[(G + 30) >> 1] | 0;
															if (!((v << 16) >> 16))
																h = (t[s >> 1] | 0) != 0 ? 2 : 0;
															else h = 2;
															a[_e >> 2] = h;
															if (!(t[(G + 38) >> 1] | 0))
																h = (t[(G + 36) >> 1] | 0) != 0 ? 2 : 0;
															else h = 2;
															a[Ue >> 2] = h;
															if (p) d = (y << 16) >> 16 != 0 ? 2 : 0;
															else d = 2;
															a[Ae >> 2] = d;
															if (o) d = (S << 16) >> 16 != 0 ? 2 : 0;
															else d = 2;
															a[ye >> 2] = d;
															if (i) l = (r << 16) >> 16 != 0 ? 2 : 0;
															else l = 2;
															a[ge >> 2] = l;
															if (k) l = (U << 16) >> 16 != 0 ? 2 : 0;
															else l = 2;
															a[me >> 2] = l;
															if (m) l = (w << 16) >> 16 != 0 ? 2 : 0;
															else l = 2;
															a[we >> 2] = l;
															if (g) l = (B << 16) >> 16 != 0 ? 2 : 0;
															else l = 2;
															a[pe >> 2] = l;
															l = t[(G + 150) >> 1] | 0;
															u = t[(G + 138) >> 1] | 0;
															do
																if (!(((t[(G + 36) >> 1] | v) << 16) >> 16)) {
																	y =
																		((t[(G + 148) >> 1] | 0) -
																			(t[(G + 136) >> 1] | 0)) |
																		0;
																	if (
																		(((y | 0) > -1 ? y : (0 - y) | 0) | 0) >
																		3
																	) {
																		l = 1;
																		break;
																	}
																	y = (l - u) | 0;
																	if (
																		(((y | 0) > -1 ? y : (0 - y) | 0) | 0) >
																		3
																	) {
																		l = 1;
																		break;
																	}
																	l =
																		((a[(G + 120) >> 2] | 0) !=
																			(a[(G + 116) >> 2] | 0)) &
																		1;
																} else l = 2;
															while (0);
															a[Se >> 2] = l;
															l = t[(G + 158) >> 1] | 0;
															u = t[(G + 146) >> 1] | 0;
															do
																if (!(((S | M) << 16) >> 16)) {
																	M =
																		((t[(G + 156) >> 1] | 0) -
																			(t[(G + 144) >> 1] | 0)) |
																		0;
																	if (
																		(((M | 0) > -1 ? M : (0 - M) | 0) | 0) >
																		3
																	) {
																		u = 1;
																		break;
																	}
																	M = (l - u) | 0;
																	if (
																		(((M | 0) > -1 ? M : (0 - M) | 0) | 0) >
																		3
																	) {
																		u = 1;
																		break;
																	}
																	u =
																		((a[(G + 120) >> 2] | 0) !=
																			(a[(G + 116) >> 2] | 0)) &
																		1;
																} else u = 2;
															while (0);
															a[Be >> 2] = u;
															l = t[(G + 182) >> 1] | 0;
															u = t[(G + 170) >> 1] | 0;
															do
																if (!(((U | _) << 16) >> 16)) {
																	M =
																		((t[(G + 180) >> 1] | 0) -
																			(t[(G + 168) >> 1] | 0)) |
																		0;
																	if (
																		(((M | 0) > -1 ? M : (0 - M) | 0) | 0) >
																		3
																	) {
																		r = 1;
																		break;
																	}
																	M = (l - u) | 0;
																	if (
																		(((M | 0) > -1 ? M : (0 - M) | 0) | 0) >
																		3
																	) {
																		r = 1;
																		break;
																	}
																	r =
																		((a[(G + 128) >> 2] | 0) !=
																			(a[(G + 124) >> 2] | 0)) &
																		1;
																} else r = 2;
															while (0);
															a[ve >> 2] = r;
															r = t[(G + 190) >> 1] | 0;
															i = t[(G + 178) >> 1] | 0;
															do
																if (!(((B | A) << 16) >> 16)) {
																	M =
																		((t[(G + 188) >> 1] | 0) -
																			(t[(G + 176) >> 1] | 0)) |
																		0;
																	if (
																		(((M | 0) > -1 ? M : (0 - M) | 0) | 0) >
																		3
																	) {
																		r = 1;
																		break;
																	}
																	M = (r - i) | 0;
																	if (
																		(((M | 0) > -1 ? M : (0 - M) | 0) | 0) >
																		3
																	) {
																		r = 1;
																		break;
																	}
																	r =
																		((a[(G + 128) >> 2] | 0) !=
																			(a[(G + 124) >> 2] | 0)) &
																		1;
																} else r = 2;
															while (0);
															a[ke >> 2] = r;
															break;
														} else {
															I = t[(G + 32) >> 1] | 0;
															S = t[(G + 28) >> 1] | 0;
															j = t[(G + 142) >> 1] | 0;
															k = t[(G + 134) >> 1] | 0;
															if (!(((S | I) << 16) >> 16)) {
																M =
																	((t[(G + 140) >> 1] | 0) -
																		(t[(G + 132) >> 1] | 0)) |
																	0;
																if ((((M | 0) > -1 ? M : (0 - M) | 0) | 0) > 3)
																	u = 1;
																else {
																	u = (j - k) | 0;
																	u =
																		((((u | 0) > -1 ? u : (0 - u) | 0) | 0) >
																			3) &
																		1;
																}
															} else u = 2;
															a[$e >> 2] = u;
															T = t[(G + 34) >> 1] | 0;
															U = t[(G + 30) >> 1] | 0;
															x = t[(G + 146) >> 1] | 0;
															w = t[(G + 138) >> 1] | 0;
															if (!(((U | T) << 16) >> 16)) {
																M =
																	((t[(G + 144) >> 1] | 0) -
																		(t[(G + 136) >> 1] | 0)) |
																	0;
																if ((((M | 0) > -1 ? M : (0 - M) | 0) | 0) > 3)
																	l = 1;
																else {
																	l = (x - w) | 0;
																	l =
																		((((l | 0) > -1 ? l : (0 - l) | 0) | 0) >
																			3) &
																		1;
																}
															} else l = 2;
															a[Ze >> 2] = l;
															z = t[(G + 40) >> 1] | 0;
															A = t[(G + 36) >> 1] | 0;
															N = t[(G + 158) >> 1] | 0;
															m = t[(G + 150) >> 1] | 0;
															if (!(((A | z) << 16) >> 16)) {
																M =
																	((t[(G + 156) >> 1] | 0) -
																		(t[(G + 148) >> 1] | 0)) |
																	0;
																if ((((M | 0) > -1 ? M : (0 - M) | 0) | 0) > 3)
																	d = 1;
																else {
																	d = (N - m) | 0;
																	d =
																		((((d | 0) > -1 ? d : (0 - d) | 0) | 0) >
																			3) &
																		1;
																}
															} else d = 2;
															a[Ge >> 2] = d;
															d = t[(G + 42) >> 1] | 0;
															M = t[(G + 38) >> 1] | 0;
															O = t[(G + 162) >> 1] | 0;
															_ = t[(G + 154) >> 1] | 0;
															if (!(((M | d) << 16) >> 16)) {
																B =
																	((t[(G + 160) >> 1] | 0) -
																		(t[(G + 152) >> 1] | 0)) |
																	0;
																if ((((B | 0) > -1 ? B : (0 - B) | 0) | 0) > 3)
																	h = 1;
																else {
																	h = (O - _) | 0;
																	h =
																		((((h | 0) > -1 ? h : (0 - h) | 0) | 0) >
																			3) &
																		1;
																}
															} else h = 2;
															a[Ve >> 2] = h;
															F = t[(G + 44) >> 1] | 0;
															R = t[(G + 166) >> 1] | 0;
															do
																if (!(((F | I) << 16) >> 16)) {
																	B =
																		((t[(G + 164) >> 1] | 0) -
																			(t[(G + 140) >> 1] | 0)) |
																		0;
																	if (
																		(((B | 0) > -1 ? B : (0 - B) | 0) | 0) >
																		3
																	)
																		h = 1;
																	else {
																		B = (R - j) | 0;
																		if (
																			(((B | 0) > -1 ? B : (0 - B) | 0) | 0) >
																			3
																		) {
																			h = 1;
																			break;
																		}
																		h =
																			((a[(G + 124) >> 2] | 0) !=
																				(a[(G + 116) >> 2] | 0)) &
																			1;
																	}
																} else h = 2;
															while (0);
															a[Ke >> 2] = h;
															L = t[(G + 46) >> 1] | 0;
															P = t[(G + 170) >> 1] | 0;
															do
																if (!(((L | T) << 16) >> 16)) {
																	B =
																		((t[(G + 168) >> 1] | 0) -
																			(t[(G + 144) >> 1] | 0)) |
																		0;
																	if (
																		(((B | 0) > -1 ? B : (0 - B) | 0) | 0) >
																		3
																	) {
																		h = 1;
																		break;
																	}
																	B = (P - x) | 0;
																	if (
																		(((B | 0) > -1 ? B : (0 - B) | 0) | 0) >
																		3
																	) {
																		h = 1;
																		break;
																	}
																	h =
																		((a[(G + 124) >> 2] | 0) !=
																			(a[(G + 116) >> 2] | 0)) &
																		1;
																} else h = 2;
															while (0);
															a[Ye >> 2] = h;
															C = t[(G + 52) >> 1] | 0;
															D = t[(G + 182) >> 1] | 0;
															do
																if (!(((C | z) << 16) >> 16)) {
																	B =
																		((t[(G + 180) >> 1] | 0) -
																			(t[(G + 156) >> 1] | 0)) |
																		0;
																	if (
																		(((B | 0) > -1 ? B : (0 - B) | 0) | 0) >
																		3
																	) {
																		h = 1;
																		break;
																	}
																	B = (D - N) | 0;
																	if (
																		(((B | 0) > -1 ? B : (0 - B) | 0) | 0) >
																		3
																	) {
																		h = 1;
																		break;
																	}
																	h =
																		((a[(G + 128) >> 2] | 0) !=
																			(a[(G + 120) >> 2] | 0)) &
																		1;
																} else h = 2;
															while (0);
															a[qe >> 2] = h;
															i = t[(G + 54) >> 1] | 0;
															l = t[(G + 186) >> 1] | 0;
															do
																if (!(((i | d) << 16) >> 16)) {
																	B =
																		((t[(G + 184) >> 1] | 0) -
																			(t[(G + 160) >> 1] | 0)) |
																		0;
																	if (
																		(((B | 0) > -1 ? B : (0 - B) | 0) | 0) >
																		3
																	) {
																		g = 1;
																		break;
																	}
																	B = (l - O) | 0;
																	if (
																		(((B | 0) > -1 ? B : (0 - B) | 0) | 0) >
																		3
																	) {
																		g = 1;
																		break;
																	}
																	g =
																		((a[(G + 128) >> 2] | 0) !=
																			(a[(G + 120) >> 2] | 0)) &
																		1;
																} else g = 2;
															while (0);
															a[He >> 2] = g;
															r = t[(G + 48) >> 1] | 0;
															E = t[(G + 174) >> 1] | 0;
															do
																if (!(((r | F) << 16) >> 16)) {
																	B =
																		((t[(G + 172) >> 1] | 0) -
																			(t[(G + 164) >> 1] | 0)) |
																		0;
																	if (
																		(((B | 0) > -1 ? B : (0 - B) | 0) | 0) >
																		3
																	) {
																		g = 1;
																		break;
																	}
																	g = (E - R) | 0;
																	g =
																		((((g | 0) > -1 ? g : (0 - g) | 0) | 0) >
																			3) &
																		1;
																} else g = 2;
															while (0);
															a[je >> 2] = g;
															o = t[(G + 50) >> 1] | 0;
															u = t[(G + 178) >> 1] | 0;
															do
																if (!(((o | L) << 16) >> 16)) {
																	B =
																		((t[(G + 176) >> 1] | 0) -
																			(t[(G + 168) >> 1] | 0)) |
																		0;
																	if (
																		(((B | 0) > -1 ? B : (0 - B) | 0) | 0) >
																		3
																	) {
																		g = 1;
																		break;
																	}
																	g = (u - P) | 0;
																	g =
																		((((g | 0) > -1 ? g : (0 - g) | 0) | 0) >
																			3) &
																		1;
																} else g = 2;
															while (0);
															a[xe >> 2] = g;
															s = t[(G + 56) >> 1] | 0;
															p = t[(G + 190) >> 1] | 0;
															do
																if (!(((s | C) << 16) >> 16)) {
																	B =
																		((t[(G + 188) >> 1] | 0) -
																			(t[(G + 180) >> 1] | 0)) |
																		0;
																	if (
																		(((B | 0) > -1 ? B : (0 - B) | 0) | 0) >
																		3
																	) {
																		g = 1;
																		break;
																	}
																	g = (p - D) | 0;
																	g =
																		((((g | 0) > -1 ? g : (0 - g) | 0) | 0) >
																			3) &
																		1;
																} else g = 2;
															while (0);
															a[Ne >> 2] = g;
															B = t[(G + 58) >> 1] | 0;
															v = t[(G + 194) >> 1] | 0;
															do
																if (!(((B | i) << 16) >> 16)) {
																	y =
																		((t[(G + 192) >> 1] | 0) -
																			(t[(G + 184) >> 1] | 0)) |
																		0;
																	if (
																		(((y | 0) > -1 ? y : (0 - y) | 0) | 0) >
																		3
																	) {
																		y = 1;
																		break;
																	}
																	y = (v - l) | 0;
																	y =
																		((((y | 0) > -1 ? y : (0 - y) | 0) | 0) >
																			3) &
																		1;
																} else y = 2;
															while (0);
															a[ze >> 2] = y;
															do
																if (!(((U | S) << 16) >> 16)) {
																	S =
																		((t[(G + 136) >> 1] | 0) -
																			(t[(G + 132) >> 1] | 0)) |
																		0;
																	if (
																		(((S | 0) > -1 ? S : (0 - S) | 0) | 0) >
																		3
																	) {
																		g = 1;
																		break;
																	}
																	g = (w - k) | 0;
																	g =
																		((((g | 0) > -1 ? g : (0 - g) | 0) | 0) >
																			3) &
																		1;
																} else g = 2;
															while (0);
															a[_e >> 2] = g;
															do
																if (!(((A | U) << 16) >> 16)) {
																	S =
																		((t[(G + 148) >> 1] | 0) -
																			(t[(G + 136) >> 1] | 0)) |
																		0;
																	if (
																		(((S | 0) > -1 ? S : (0 - S) | 0) | 0) >
																		3
																	) {
																		g = 1;
																		break;
																	}
																	S = (m - w) | 0;
																	if (
																		(((S | 0) > -1 ? S : (0 - S) | 0) | 0) >
																		3
																	) {
																		g = 1;
																		break;
																	}
																	g =
																		((a[(G + 120) >> 2] | 0) !=
																			(a[(G + 116) >> 2] | 0)) &
																		1;
																} else g = 2;
															while (0);
															a[Se >> 2] = g;
															do
																if (!(((M | A) << 16) >> 16)) {
																	M =
																		((t[(G + 152) >> 1] | 0) -
																			(t[(G + 148) >> 1] | 0)) |
																		0;
																	if (
																		(((M | 0) > -1 ? M : (0 - M) | 0) | 0) >
																		3
																	) {
																		g = 1;
																		break;
																	}
																	g = (_ - m) | 0;
																	g =
																		((((g | 0) > -1 ? g : (0 - g) | 0) | 0) >
																			3) &
																		1;
																} else g = 2;
															while (0);
															a[Ue >> 2] = g;
															do
																if (!(((T | I) << 16) >> 16)) {
																	M =
																		((t[(G + 144) >> 1] | 0) -
																			(t[(G + 140) >> 1] | 0)) |
																		0;
																	if (
																		(((M | 0) > -1 ? M : (0 - M) | 0) | 0) >
																		3
																	) {
																		h = 1;
																		break;
																	}
																	h = (x - j) | 0;
																	h =
																		((((h | 0) > -1 ? h : (0 - h) | 0) | 0) >
																			3) &
																		1;
																} else h = 2;
															while (0);
															a[Ae >> 2] = h;
															do
																if (!(((z | T) << 16) >> 16)) {
																	M =
																		((t[(G + 156) >> 1] | 0) -
																			(t[(G + 144) >> 1] | 0)) |
																		0;
																	if (
																		(((M | 0) > -1 ? M : (0 - M) | 0) | 0) >
																		3
																	) {
																		h = 1;
																		break;
																	}
																	M = (N - x) | 0;
																	if (
																		(((M | 0) > -1 ? M : (0 - M) | 0) | 0) >
																		3
																	) {
																		h = 1;
																		break;
																	}
																	h =
																		((a[(G + 120) >> 2] | 0) !=
																			(a[(G + 116) >> 2] | 0)) &
																		1;
																} else h = 2;
															while (0);
															a[Be >> 2] = h;
															do
																if (!(((d | z) << 16) >> 16)) {
																	M =
																		((t[(G + 160) >> 1] | 0) -
																			(t[(G + 156) >> 1] | 0)) |
																		0;
																	if (
																		(((M | 0) > -1 ? M : (0 - M) | 0) | 0) >
																		3
																	) {
																		h = 1;
																		break;
																	}
																	h = (O - N) | 0;
																	h =
																		((((h | 0) > -1 ? h : (0 - h) | 0) | 0) >
																			3) &
																		1;
																} else h = 2;
															while (0);
															a[ye >> 2] = h;
															do
																if (!(((L | F) << 16) >> 16)) {
																	M =
																		((t[(G + 168) >> 1] | 0) -
																			(t[(G + 164) >> 1] | 0)) |
																		0;
																	if (
																		(((M | 0) > -1 ? M : (0 - M) | 0) | 0) >
																		3
																	) {
																		d = 1;
																		break;
																	}
																	d = (P - R) | 0;
																	d =
																		((((d | 0) > -1 ? d : (0 - d) | 0) | 0) >
																			3) &
																		1;
																} else d = 2;
															while (0);
															a[ge >> 2] = d;
															do
																if (!(((C | L) << 16) >> 16)) {
																	M =
																		((t[(G + 180) >> 1] | 0) -
																			(t[(G + 168) >> 1] | 0)) |
																		0;
																	if (
																		(((M | 0) > -1 ? M : (0 - M) | 0) | 0) >
																		3
																	) {
																		d = 1;
																		break;
																	}
																	M = (D - P) | 0;
																	if (
																		(((M | 0) > -1 ? M : (0 - M) | 0) | 0) >
																		3
																	) {
																		d = 1;
																		break;
																	}
																	d =
																		((a[(G + 128) >> 2] | 0) !=
																			(a[(G + 124) >> 2] | 0)) &
																		1;
																} else d = 2;
															while (0);
															a[ve >> 2] = d;
															do
																if (!(((i | C) << 16) >> 16)) {
																	M =
																		((t[(G + 184) >> 1] | 0) -
																			(t[(G + 180) >> 1] | 0)) |
																		0;
																	if (
																		(((M | 0) > -1 ? M : (0 - M) | 0) | 0) >
																		3
																	) {
																		l = 1;
																		break;
																	}
																	l = (l - D) | 0;
																	l =
																		((((l | 0) > -1 ? l : (0 - l) | 0) | 0) >
																			3) &
																		1;
																} else l = 2;
															while (0);
															a[me >> 2] = l;
															do
																if (!(((o | r) << 16) >> 16)) {
																	M =
																		((t[(G + 176) >> 1] | 0) -
																			(t[(G + 172) >> 1] | 0)) |
																		0;
																	if (
																		(((M | 0) > -1 ? M : (0 - M) | 0) | 0) >
																		3
																	) {
																		l = 1;
																		break;
																	}
																	l = (u - E) | 0;
																	l =
																		((((l | 0) > -1 ? l : (0 - l) | 0) | 0) >
																			3) &
																		1;
																} else l = 2;
															while (0);
															a[we >> 2] = l;
															do
																if (!(((s | o) << 16) >> 16)) {
																	M =
																		((t[(G + 188) >> 1] | 0) -
																			(t[(G + 176) >> 1] | 0)) |
																		0;
																	if (
																		(((M | 0) > -1 ? M : (0 - M) | 0) | 0) >
																		3
																	) {
																		u = 1;
																		break;
																	}
																	M = (p - u) | 0;
																	if (
																		(((M | 0) > -1 ? M : (0 - M) | 0) | 0) >
																		3
																	) {
																		u = 1;
																		break;
																	}
																	u =
																		((a[(G + 128) >> 2] | 0) !=
																			(a[(G + 124) >> 2] | 0)) &
																		1;
																} else u = 2;
															while (0);
															a[ke >> 2] = u;
															do
																if (!(((B | s) << 16) >> 16)) {
																	M =
																		((t[(G + 192) >> 1] | 0) -
																			(t[(G + 188) >> 1] | 0)) |
																		0;
																	if (
																		(((M | 0) > -1 ? M : (0 - M) | 0) | 0) >
																		3
																	) {
																		r = 1;
																		break;
																	}
																	r = (v - p) | 0;
																	r =
																		((((r | 0) > -1 ? r : (0 - r) | 0) | 0) >
																			3) &
																		1;
																} else r = 2;
															while (0);
															a[pe >> 2] = r;
															break;
														}
													} else nr(G, se);
												while (0);
												if (
													!(
														b |
														a[$e >> 2] |
														a[Ze >> 2] |
														a[Ge >> 2] |
														a[Ve >> 2] |
														a[Ke >> 2] |
														a[Ye >> 2] |
														a[qe >> 2] |
														a[He >> 2] |
														a[je >> 2] |
														a[xe >> 2] |
														a[Ne >> 2] |
														a[ze >> 2] |
														a[_e >> 2] |
														a[Se >> 2] |
														a[Ue >> 2] |
														a[Ae >> 2] |
														a[Be >> 2] |
														a[ye >> 2] |
														a[ge >> 2] |
														a[ve >> 2] |
														a[me >> 2] |
														a[we >> 2] |
														a[ke >> 2] |
														a[pe >> 2]
													)
												)
													break;
											} else {
												a[ze >> 2] = 3;
												a[Ne >> 2] = 3;
												a[xe >> 2] = 3;
												a[je >> 2] = 3;
												a[He >> 2] = 3;
												a[qe >> 2] = 3;
												a[Ye >> 2] = 3;
												a[Ke >> 2] = 3;
												a[Ve >> 2] = 3;
												a[Ge >> 2] = 3;
												a[Ze >> 2] = 3;
												a[$e >> 2] = 3;
												a[pe >> 2] = 3;
												a[ke >> 2] = 3;
												a[we >> 2] = 3;
												a[me >> 2] = 3;
												a[ve >> 2] = 3;
												a[ge >> 2] = 3;
												a[ye >> 2] = 3;
												a[Be >> 2] = 3;
												a[Ae >> 2] = 3;
												a[Ue >> 2] = 3;
												a[Se >> 2] = 3;
												a[_e >> 2] = 3;
											}
											O = (G + 20) | 0;
											i = a[O >> 2] | 0;
											T = (G + 12) | 0;
											u = Br(0, 51, ((a[T >> 2] | 0) + i) | 0) | 0;
											I = (G + 16) | 0;
											o = Br(0, 51, ((a[I >> 2] | 0) + i) | 0) | 0;
											s = f[(6864 + u) >> 0] | 0;
											a[oe >> 2] = s;
											o = f[(6920 + o) >> 0] | 0;
											a[ue >> 2] = o;
											u = (6976 + ((u * 3) | 0)) | 0;
											a[Ie >> 2] = u;
											do
												if (!q) {
													l = a[((a[Y >> 2] | 0) + 20) >> 2] | 0;
													if ((l | 0) == (i | 0)) {
														a[$ >> 2] = s;
														a[W >> 2] = o;
														a[Te >> 2] = u;
														break;
													} else {
														_ = ((i + 1 + l) | 0) >>> 1;
														M = Br(0, 51, ((a[T >> 2] | 0) + _) | 0) | 0;
														_ = Br(0, 51, ((a[I >> 2] | 0) + _) | 0) | 0;
														a[$ >> 2] = f[(6864 + M) >> 0];
														a[W >> 2] = f[(6920 + _) >> 0];
														a[Te >> 2] = 6976 + ((M * 3) | 0);
														break;
													}
												}
											while (0);
											do
												if (!H) {
													r = a[((a[K >> 2] | 0) + 20) >> 2] | 0;
													if ((r | 0) == (i | 0)) {
														a[X >> 2] = a[oe >> 2];
														a[J >> 2] = a[ue >> 2];
														a[ne >> 2] = a[Ie >> 2];
														break;
													} else {
														_ = ((i + 1 + r) | 0) >>> 1;
														M = Br(0, 51, ((a[T >> 2] | 0) + _) | 0) | 0;
														_ = Br(0, 51, ((a[I >> 2] | 0) + _) | 0) | 0;
														a[X >> 2] = f[(6864 + M) >> 0];
														a[J >> 2] = f[(6920 + _) >> 0];
														a[ne >> 2] = 6976 + ((M * 3) | 0);
														break;
													}
												}
											while (0);
											z = ee(Q, te) | 0;
											j = 3;
											h = 0;
											x = ((a[e >> 2] | 0) + ((z << 8) + (V << 4))) | 0;
											N = se;
											while (1) {
												l = a[(N + 4) >> 2] | 0;
												if (l) tr(x, l, ae, Fe);
												l = a[(N + 12) >> 2] | 0;
												if (l) tr((x + 4) | 0, l, fe, Fe);
												u = (N + 16) | 0;
												b = a[(N + 20) >> 2] | 0;
												if (b) tr((x + 8) | 0, b, fe, Fe);
												s = (N + 24) | 0;
												b = a[(N + 28) >> 2] | 0;
												if (b) tr((x + 12) | 0, b, fe, Fe);
												d = a[N >> 2] | 0;
												l = (N + 8) | 0;
												b = a[l >> 2] | 0;
												e: do
													if (
														(
															(d | 0) == (b | 0)
																? (d | 0) == (a[u >> 2] | 0)
																: 0
														)
															? (d | 0) == (a[s >> 2] | 0)
															: 0
													) {
														if (!d) break;
														U = a[(Te + ((h * 12) | 0) + 4) >> 2] | 0;
														A = a[(Te + ((h * 12) | 0) + 8) >> 2] | 0;
														if (d >>> 0 < 4) {
															v =
																f[
																	((a[(Te + ((h * 12) | 0)) >> 2] | 0) +
																		(d + -1)) >>
																		0
																] | 0;
															u = (0 - v) | 0;
															s = (v + 1) | 0;
															r = x;
															o = 16;
															while (1) {
																h = (r + Ee) | 0;
																m = f[h >> 0] | 0;
																g = (r + Oe) | 0;
																w = f[g >> 0] | 0;
																k = f[r >> 0] | 0;
																b = (r + Fe) | 0;
																i = f[b >> 0] | 0;
																M = (w - k) | 0;
																do
																	if (
																		((M | 0) > -1 ? M : (0 - M) | 0) >>> 0 <
																		U >>> 0
																	) {
																		M = (m - w) | 0;
																		if (
																			((M | 0) > -1 ? M : (0 - M) | 0) >>> 0 >=
																			A >>> 0
																		)
																			break;
																		M = (i - k) | 0;
																		if (
																			((M | 0) > -1 ? M : (0 - M) | 0) >>> 0 >=
																			A >>> 0
																		)
																			break;
																		d = f[(r + Pe) >> 0] | 0;
																		M = (d - w) | 0;
																		if (
																			((M | 0) > -1 ? M : (0 - M) | 0) >>> 0 <
																			A >>> 0
																		) {
																			n[h >> 0] =
																				(Br(
																					u,
																					v,
																					((((w + 1 + k) | 0) >>> 1) -
																						(m << 1) +
																						d) >>
																						1
																				) |
																					0) +
																				m;
																			h = s;
																		} else h = v;
																		d = f[(r + Re) >> 0] | 0;
																		M = (d - k) | 0;
																		if (
																			((M | 0) > -1 ? M : (0 - M) | 0) >>> 0 <
																			A >>> 0
																		) {
																			n[b >> 0] =
																				(Br(
																					u,
																					v,
																					((((w + 1 + k) | 0) >>> 1) -
																						(i << 1) +
																						d) >>
																						1
																				) |
																					0) +
																				i;
																			h = (h + 1) | 0;
																		}
																		_ =
																			Br(
																				(0 - h) | 0,
																				h,
																				(m + 4 - i + ((k - w) << 2)) >> 3
																			) | 0;
																		M = n[(3472 + ((k | 512) - _)) >> 0] | 0;
																		n[g >> 0] =
																			n[(3472 + (_ + (w | 512))) >> 0] | 0;
																		n[r >> 0] = M;
																	}
																while (0);
																o = (o + -1) | 0;
																if (!o) break e;
																else r = (r + 1) | 0;
															}
														}
														d = ((U >>> 2) + 2) | 0;
														v = x;
														g = 16;
														while (1) {
															b = (v + Ee) | 0;
															r = f[b >> 0] | 0;
															l = (v + Oe) | 0;
															i = f[l >> 0] | 0;
															p = f[v >> 0] | 0;
															u = (v + Fe) | 0;
															k = f[u >> 0] | 0;
															h = (i - p) | 0;
															h = (h | 0) > -1 ? h : (0 - h) | 0;
															r: do
																if (h >>> 0 < U >>> 0) {
																	M = (r - i) | 0;
																	if (
																		((M | 0) > -1 ? M : (0 - M) | 0) >>> 0 >=
																		A >>> 0
																	)
																		break;
																	M = (k - p) | 0;
																	if (
																		((M | 0) > -1 ? M : (0 - M) | 0) >>> 0 >=
																		A >>> 0
																	)
																		break;
																	s = (v + Pe) | 0;
																	w = f[s >> 0] | 0;
																	o = (v + Re) | 0;
																	m = f[o >> 0] | 0;
																	do
																		if (h >>> 0 < d >>> 0) {
																			M = (w - i) | 0;
																			if (
																				((M | 0) > -1 ? M : (0 - M) | 0) >>> 0 <
																				A >>> 0
																			) {
																				M = (i + r + p) | 0;
																				n[l >> 0] =
																					((k + 4 + (M << 1) + w) | 0) >>> 3;
																				n[b >> 0] = ((M + 2 + w) | 0) >>> 2;
																				n[s >> 0] =
																					((M +
																						4 +
																						((w * 3) | 0) +
																						(f[(v + Le) >> 0] << 1)) |
																						0) >>>
																					3;
																			} else
																				n[l >> 0] =
																					((i + 2 + (r << 1) + k) | 0) >>> 2;
																			M = (m - p) | 0;
																			if (
																				((M | 0) > -1 ? M : (0 - M) | 0) >>>
																					0 >=
																				A >>> 0
																			)
																				break;
																			M = (p + i + k) | 0;
																			n[v >> 0] =
																				((r + 4 + (M << 1) + m) | 0) >>> 3;
																			n[u >> 0] = ((M + 2 + m) | 0) >>> 2;
																			n[o >> 0] =
																				((M +
																					4 +
																					((m * 3) | 0) +
																					(f[(v + De) >> 0] << 1)) |
																					0) >>>
																				3;
																			break r;
																		} else
																			n[l >> 0] =
																				((i + 2 + (r << 1) + k) | 0) >>> 2;
																	while (0);
																	n[v >> 0] =
																		((r + 2 + p + (k << 1)) | 0) >>> 2;
																}
															while (0);
															g = (g + -1) | 0;
															if (!g) break;
															else v = (v + 1) | 0;
														}
													} else Qe = 311;
												while (0);
												do
													if ((Qe | 0) == 311) {
														Qe = 0;
														if (d) {
															ar(x, d, (Te + ((h * 12) | 0)) | 0, Fe);
															b = a[l >> 2] | 0;
														}
														if (b)
															ar((x + 4) | 0, b, (Te + ((h * 12) | 0)) | 0, Fe);
														b = a[u >> 2] | 0;
														if (b)
															ar((x + 8) | 0, b, (Te + ((h * 12) | 0)) | 0, Fe);
														l = a[s >> 2] | 0;
														if (!l) break;
														ar((x + 12) | 0, l, (Te + ((h * 12) | 0)) | 0, Fe);
													}
												while (0);
												if (!j) break;
												else {
													j = (j + -1) | 0;
													h = 2;
													x = (x + Me) | 0;
													N = (N + 32) | 0;
												}
											}
											o = a[(G + 24) >> 2] | 0;
											i =
												a[
													(192 +
														((Br(0, 51, ((a[O >> 2] | 0) + o) | 0) | 0) <<
															2)) >>
														2
												] | 0;
											b = Br(0, 51, ((a[T >> 2] | 0) + i) | 0) | 0;
											s = Br(0, 51, ((a[I >> 2] | 0) + i) | 0) | 0;
											u = f[(6864 + b) >> 0] | 0;
											a[oe >> 2] = u;
											s = f[(6920 + s) >> 0] | 0;
											a[ue >> 2] = s;
											b = (6976 + ((b * 3) | 0)) | 0;
											a[Ie >> 2] = b;
											do
												if (!q) {
													l = a[((a[Y >> 2] | 0) + 20) >> 2] | 0;
													if ((l | 0) == (a[O >> 2] | 0)) {
														a[$ >> 2] = u;
														a[W >> 2] = s;
														a[Te >> 2] = b;
														break;
													} else {
														_ =
															((i +
																1 +
																(a[
																	(192 + ((Br(0, 51, (l + o) | 0) | 0) << 2)) >>
																		2
																] |
																	0)) |
																0) >>>
															1;
														M = Br(0, 51, (_ + (a[T >> 2] | 0)) | 0) | 0;
														_ = Br(0, 51, ((a[I >> 2] | 0) + _) | 0) | 0;
														a[$ >> 2] = f[(6864 + M) >> 0];
														a[W >> 2] = f[(6920 + _) >> 0];
														a[Te >> 2] = 6976 + ((M * 3) | 0);
														break;
													}
												}
											while (0);
											do
												if (!H) {
													r = a[((a[K >> 2] | 0) + 20) >> 2] | 0;
													if ((r | 0) == (a[O >> 2] | 0)) {
														a[X >> 2] = a[oe >> 2];
														a[J >> 2] = a[ue >> 2];
														a[ne >> 2] = a[Ie >> 2];
														break;
													} else {
														_ =
															((i +
																1 +
																(a[
																	(192 + ((Br(0, 51, (r + o) | 0) | 0) << 2)) >>
																		2
																] |
																	0)) |
																0) >>>
															1;
														M = Br(0, 51, (_ + (a[T >> 2] | 0)) | 0) | 0;
														_ = Br(0, 51, ((a[I >> 2] | 0) + _) | 0) | 0;
														a[X >> 2] = f[(6864 + M) >> 0];
														a[J >> 2] = f[(6920 + _) >> 0];
														a[ne >> 2] = 6976 + ((M * 3) | 0);
														break;
													}
												}
											while (0);
											s = a[e >> 2] | 0;
											l = ((V << 3) + Ce + (z << 6)) | 0;
											d = (s + l) | 0;
											l = (s + (l + re)) | 0;
											s = 0;
											o = se;
											h = 0;
											while (1) {
												i = (o + 4) | 0;
												r = a[i >> 2] | 0;
												if (r) {
													_i(d, r, ae, ie);
													_i(l, a[i >> 2] | 0, ae, ie);
												}
												i = (o + 36) | 0;
												r = a[i >> 2] | 0;
												if (r) {
													_i((d + Fe) | 0, r, ae, ie);
													_i((l + Fe) | 0, a[i >> 2] | 0, ae, ie);
												}
												b = (o + 16) | 0;
												i = (o + 20) | 0;
												r = a[i >> 2] | 0;
												if (r) {
													_i((d + 4) | 0, r, fe, ie);
													_i((l + 4) | 0, a[i >> 2] | 0, fe, ie);
												}
												i = (o + 52) | 0;
												r = a[i >> 2] | 0;
												if (r) {
													_i((d + Z) | 0, r, fe, ie);
													_i((l + Z) | 0, a[i >> 2] | 0, fe, ie);
												}
												i = a[o >> 2] | 0;
												u = (o + 8) | 0;
												r = a[u >> 2] | 0;
												do
													if ((i | 0) == (r | 0)) {
														if ((i | 0) != (a[b >> 2] | 0)) {
															Qe = 342;
															break;
														}
														if ((i | 0) != (a[(o + 24) >> 2] | 0)) {
															Qe = 342;
															break;
														}
														if (!i) break;
														M = (Te + ((s * 12) | 0)) | 0;
														Mi(d, i, M, ie);
														Mi(l, a[o >> 2] | 0, M, ie);
													} else Qe = 342;
												while (0);
												do
													if ((Qe | 0) == 342) {
														Qe = 0;
														if (i) {
															r = (Te + ((s * 12) | 0)) | 0;
															Ei(d, i, r, ie);
															Ei(l, a[o >> 2] | 0, r, ie);
															r = a[u >> 2] | 0;
														}
														if (r) {
															M = (Te + ((s * 12) | 0)) | 0;
															Ei((d + 2) | 0, r, M, ie);
															Ei((l + 2) | 0, a[u >> 2] | 0, M, ie);
														}
														r = a[b >> 2] | 0;
														if (r) {
															M = (Te + ((s * 12) | 0)) | 0;
															Ei((d + 4) | 0, r, M, ie);
															Ei((l + 4) | 0, a[b >> 2] | 0, M, ie);
														}
														i = (o + 24) | 0;
														r = a[i >> 2] | 0;
														if (!r) break;
														M = (Te + ((s * 12) | 0)) | 0;
														Ei((d + 6) | 0, r, M, ie);
														Ei((l + 6) | 0, a[i >> 2] | 0, M, ie);
													}
												while (0);
												h = (h + 1) | 0;
												if ((h | 0) == 2) break;
												else {
													d = (d + Re) | 0;
													l = (l + Re) | 0;
													s = 2;
													o = (o + 64) | 0;
												}
											}
										}
									while (0);
									r = (V + 1) | 0;
									i = (r | 0) == (te | 0);
									Q = ((i & 1) + Q) | 0;
									if (Q >>> 0 >= (a[le >> 2] | 0) >>> 0) break;
									else {
										V = i ? 0 : r;
										G = (G + 216) | 0;
									}
								}
								c = er;
								return;
							}
							function nr(e, r) {
								e = e | 0;
								r = r | 0;
								var i = 0,
									n = 0,
									f = 0,
									o = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0,
									g = 0,
									y = 0,
									B = 0,
									A = 0,
									U = 0,
									S = 0,
									_ = 0,
									M = 0;
								M = c;
								l = (e + 28) | 0;
								U = t[(e + 32) >> 1] | 0;
								if (!((U << 16) >> 16)) i = (t[l >> 1] | 0) != 0 ? 2 : 0;
								else i = 2;
								a[(r + 32) >> 2] = i;
								S = t[(e + 34) >> 1] | 0;
								A = (S << 16) >> 16 == 0;
								if (A) i = (t[(e + 30) >> 1] | 0) != 0 ? 2 : 0;
								else i = 2;
								a[(r + 40) >> 2] = i;
								_ = t[(e + 40) >> 1] | 0;
								y = (_ << 16) >> 16 == 0;
								if (y) i = (t[(e + 36) >> 1] | 0) != 0 ? 2 : 0;
								else i = 2;
								a[(r + 48) >> 2] = i;
								n = t[(e + 42) >> 1] | 0;
								B = (n << 16) >> 16 == 0;
								if (B) i = (t[(e + 38) >> 1] | 0) != 0 ? 2 : 0;
								else i = 2;
								a[(r + 56) >> 2] = i;
								m = t[(e + 44) >> 1] | 0;
								if (!((m << 16) >> 16)) i = (U << 16) >> 16 != 0 ? 2 : 0;
								else i = 2;
								a[(r + 64) >> 2] = i;
								v = t[(e + 46) >> 1] | 0;
								p = (v << 16) >> 16 == 0;
								if (p) i = (S << 16) >> 16 != 0 ? 2 : 0;
								else i = 2;
								a[(r + 72) >> 2] = i;
								g = t[(e + 52) >> 1] | 0;
								k = (g << 16) >> 16 == 0;
								if (k) i = (_ << 16) >> 16 != 0 ? 2 : 0;
								else i = 2;
								a[(r + 80) >> 2] = i;
								f = t[(e + 54) >> 1] | 0;
								w = (f << 16) >> 16 == 0;
								if (w) i = (n << 16) >> 16 != 0 ? 2 : 0;
								else i = 2;
								a[(r + 88) >> 2] = i;
								b = t[(e + 48) >> 1] | 0;
								if (!((b << 16) >> 16)) i = (m << 16) >> 16 != 0 ? 2 : 0;
								else i = 2;
								a[(r + 96) >> 2] = i;
								d = t[(e + 50) >> 1] | 0;
								o = (d << 16) >> 16 == 0;
								if (o) i = (v << 16) >> 16 != 0 ? 2 : 0;
								else i = 2;
								a[(r + 104) >> 2] = i;
								h = t[(e + 56) >> 1] | 0;
								s = (h << 16) >> 16 == 0;
								if (s) n = (g << 16) >> 16 != 0 ? 2 : 0;
								else n = 2;
								a[(r + 112) >> 2] = n;
								u = (t[(e + 58) >> 1] | 0) == 0;
								if (u) n = (f << 16) >> 16 != 0 ? 2 : 0;
								else n = 2;
								a[(r + 120) >> 2] = n;
								f = t[(e + 30) >> 1] | 0;
								if (!((f << 16) >> 16)) n = (t[l >> 1] | 0) != 0 ? 2 : 0;
								else n = 2;
								a[(r + 12) >> 2] = n;
								i = t[(e + 36) >> 1] | 0;
								if (!((i << 16) >> 16)) n = (f << 16) >> 16 != 0 ? 2 : 0;
								else n = 2;
								a[(r + 20) >> 2] = n;
								if (!(t[(e + 38) >> 1] | 0)) i = (i << 16) >> 16 != 0 ? 2 : 0;
								else i = 2;
								a[(r + 28) >> 2] = i;
								if (A) i = (U << 16) >> 16 != 0 ? 2 : 0;
								else i = 2;
								a[(r + 44) >> 2] = i;
								if (y) i = (S << 16) >> 16 != 0 ? 2 : 0;
								else i = 2;
								a[(r + 52) >> 2] = i;
								if (B) i = (_ << 16) >> 16 != 0 ? 2 : 0;
								else i = 2;
								a[(r + 60) >> 2] = i;
								if (p) i = (m << 16) >> 16 != 0 ? 2 : 0;
								else i = 2;
								a[(r + 76) >> 2] = i;
								if (k) i = (v << 16) >> 16 != 0 ? 2 : 0;
								else i = 2;
								a[(r + 84) >> 2] = i;
								if (w) i = (g << 16) >> 16 != 0 ? 2 : 0;
								else i = 2;
								a[(r + 92) >> 2] = i;
								if (o) i = (b << 16) >> 16 != 0 ? 2 : 0;
								else i = 2;
								a[(r + 108) >> 2] = i;
								if (s) i = (d << 16) >> 16 != 0 ? 2 : 0;
								else i = 2;
								a[(r + 116) >> 2] = i;
								if (!u) {
									U = 2;
									S = (r + 124) | 0;
									a[S >> 2] = U;
									c = M;
									return;
								}
								U = (h << 16) >> 16 != 0 ? 2 : 0;
								S = (r + 124) | 0;
								a[S >> 2] = U;
								c = M;
								return;
							}
							function tr(e, r, i, t) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								t = t | 0;
								var o = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0,
									g = 0,
									y = 0,
									B = 0;
								B = c;
								g = a[(i + 4) >> 2] | 0;
								y = a[(i + 8) >> 2] | 0;
								if (r >>> 0 < 4) {
									l = f[((a[i >> 2] | 0) + (r + -1)) >> 0] | 0;
									d = (0 - l) | 0;
									b = (l + 1) | 0;
									u = 4;
									while (1) {
										i = (e + -2) | 0;
										m = f[i >> 0] | 0;
										v = (e + -1) | 0;
										w = f[v >> 0] | 0;
										k = f[e >> 0] | 0;
										s = (e + 1) | 0;
										o = f[s >> 0] | 0;
										h = (w - k) | 0;
										if (
											(
												((h | 0) > -1 ? h : (0 - h) | 0) >>> 0 < g >>> 0
													? ((h = (m - w) | 0),
													  ((h | 0) > -1 ? h : (0 - h) | 0) >>> 0 < y >>> 0)
													: 0
											)
												? ((h = (o - k) | 0),
												  ((h | 0) > -1 ? h : (0 - h) | 0) >>> 0 < y >>> 0)
												: 0
										) {
											r = f[(e + -3) >> 0] | 0;
											p = f[(e + 2) >> 0] | 0;
											h = (r - w) | 0;
											if (((h | 0) > -1 ? h : (0 - h) | 0) >>> 0 < y >>> 0) {
												n[i >> 0] =
													(Br(
														d,
														l,
														((((w + 1 + k) | 0) >>> 1) - (m << 1) + r) >> 1
													) |
														0) +
													m;
												i = b;
											} else i = l;
											h = (p - k) | 0;
											if (((h | 0) > -1 ? h : (0 - h) | 0) >>> 0 < y >>> 0) {
												n[s >> 0] =
													(Br(
														d,
														l,
														((((w + 1 + k) | 0) >>> 1) - (o << 1) + p) >> 1
													) |
														0) +
													o;
												i = (i + 1) | 0;
											}
											s =
												Br((0 - i) | 0, i, (m + 4 - o + ((k - w) << 2)) >> 3) |
												0;
											h = n[(3472 + ((k | 512) - s)) >> 0] | 0;
											n[v >> 0] = n[(3472 + ((w | 512) + s)) >> 0] | 0;
											n[e >> 0] = h;
										}
										u = (u + -1) | 0;
										if (!u) break;
										else e = (e + t) | 0;
									}
									c = B;
									return;
								}
								v = ((g >>> 2) + 2) | 0;
								m = 4;
								while (1) {
									u = (e + -2) | 0;
									k = f[u >> 0] | 0;
									l = (e + -1) | 0;
									w = f[l >> 0] | 0;
									b = f[e >> 0] | 0;
									r = (e + 1) | 0;
									d = f[r >> 0] | 0;
									i = (w - b) | 0;
									i = (i | 0) > -1 ? i : (0 - i) | 0;
									do
										if (
											(
												i >>> 0 < g >>> 0
													? ((h = (k - w) | 0),
													  ((h | 0) > -1 ? h : (0 - h) | 0) >>> 0 < y >>> 0)
													: 0
											)
												? ((h = (d - b) | 0),
												  ((h | 0) > -1 ? h : (0 - h) | 0) >>> 0 < y >>> 0)
												: 0
										) {
											o = (e + -3) | 0;
											h = f[o >> 0] | 0;
											s = (e + 2) | 0;
											p = f[s >> 0] | 0;
											if (i >>> 0 < v >>> 0) {
												i = (h - w) | 0;
												if (((i | 0) > -1 ? i : (0 - i) | 0) >>> 0 < y >>> 0) {
													i = (w + k + b) | 0;
													n[l >> 0] = ((d + 4 + (i << 1) + h) | 0) >>> 3;
													n[u >> 0] = ((i + 2 + h) | 0) >>> 2;
													n[o >> 0] =
														((i +
															4 +
															((h * 3) | 0) +
															((f[(e + -4) >> 0] | 0) << 1)) |
															0) >>>
														3;
												} else n[l >> 0] = ((w + 2 + (k << 1) + d) | 0) >>> 2;
												h = (p - b) | 0;
												if (((h | 0) > -1 ? h : (0 - h) | 0) >>> 0 < y >>> 0) {
													h = (b + w + d) | 0;
													n[e >> 0] = ((k + 4 + (h << 1) + p) | 0) >>> 3;
													n[r >> 0] = ((h + 2 + p) | 0) >>> 2;
													n[s >> 0] =
														((h +
															4 +
															((p * 3) | 0) +
															((f[(e + 3) >> 0] | 0) << 1)) |
															0) >>>
														3;
													break;
												}
											} else n[l >> 0] = ((w + 2 + (k << 1) + d) | 0) >>> 2;
											n[e >> 0] = ((k + 2 + b + (d << 1)) | 0) >>> 2;
										}
									while (0);
									m = (m + -1) | 0;
									if (!m) break;
									else e = (e + t) | 0;
								}
								c = B;
								return;
							}
							function ar(e, r, i, t) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								t = t | 0;
								var o = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0,
									g = 0,
									y = 0,
									B = 0,
									A = 0,
									U = 0,
									S = 0,
									_ = 0,
									M = 0;
								_ = c;
								g = f[((a[i >> 2] | 0) + (r + -1)) >> 0] | 0;
								B = (0 - t) | 0;
								y = B << 1;
								v = (i + 4) | 0;
								h = (i + 8) | 0;
								k = ee(t, -3) | 0;
								m = (0 - g) | 0;
								p = (g + 1) | 0;
								w = t << 1;
								d = 4;
								while (1) {
									r = (e + y) | 0;
									u = (e + B) | 0;
									s = (e + t) | 0;
									i = n[s >> 0] | 0;
									l = f[u >> 0] | 0;
									b = f[e >> 0] | 0;
									o = (l - b) | 0;
									if (
										(
											((o | 0) > -1 ? o : (0 - o) | 0) >>> 0 <
											(a[v >> 2] | 0) >>> 0
												? ((U = f[r >> 0] | 0),
												  (o = (U - l) | 0),
												  (A = a[h >> 2] | 0),
												  ((o | 0) > -1 ? o : (0 - o) | 0) >>> 0 < A >>> 0)
												: 0
										)
											? ((S = i & 255),
											  (i = (S - b) | 0),
											  ((i | 0) > -1 ? i : (0 - i) | 0) >>> 0 < A >>> 0)
											: 0
									) {
										i = f[(e + k) >> 0] | 0;
										o = (i - l) | 0;
										if (((o | 0) > -1 ? o : (0 - o) | 0) >>> 0 < A >>> 0) {
											n[r >> 0] =
												(Br(
													m,
													g,
													((((l + 1 + b) | 0) >>> 1) - (U << 1) + i) >> 1
												) |
													0) +
												U;
											r = a[h >> 2] | 0;
											i = p;
										} else {
											r = A;
											i = g;
										}
										o = f[(e + w) >> 0] | 0;
										M = (o - b) | 0;
										if (((M | 0) > -1 ? M : (0 - M) | 0) >>> 0 < r >>> 0) {
											n[s >> 0] =
												(Br(
													m,
													g,
													((((l + 1 + b) | 0) >>> 1) - (S << 1) + o) >> 1
												) |
													0) +
												S;
											i = (i + 1) | 0;
										}
										i =
											Br((0 - i) | 0, i, (4 - S + ((b - l) << 2) + U) >> 3) | 0;
										r = n[(3472 + ((b | 512) - i)) >> 0] | 0;
										n[u >> 0] = n[(3472 + ((l | 512) + i)) >> 0] | 0;
										n[e >> 0] = r;
									}
									d = (d + -1) | 0;
									if (!d) break;
									else e = (e + 1) | 0;
								}
								c = _;
								return;
							}
							function fr(e) {
								e = e | 0;
								var r = 0;
								r = c;
								c = (c + e) | 0;
								c = (c + 15) & -16;
								return r | 0;
							}
							function or() {
								return c | 0;
							}
							function sr(e) {
								e = e | 0;
								c = e;
							}
							function ur(e, r) {
								e = e | 0;
								r = r | 0;
								if (!p) {
									p = e;
									k = r;
								}
							}
							function lr(e) {
								e = e | 0;
								n[d >> 0] = n[e >> 0];
								n[(d + 1) >> 0] = n[(e + 1) >> 0];
								n[(d + 2) >> 0] = n[(e + 2) >> 0];
								n[(d + 3) >> 0] = n[(e + 3) >> 0];
							}
							function cr(e) {
								e = e | 0;
								n[d >> 0] = n[e >> 0];
								n[(d + 1) >> 0] = n[(e + 1) >> 0];
								n[(d + 2) >> 0] = n[(e + 2) >> 0];
								n[(d + 3) >> 0] = n[(e + 3) >> 0];
								n[(d + 4) >> 0] = n[(e + 4) >> 0];
								n[(d + 5) >> 0] = n[(e + 5) >> 0];
								n[(d + 6) >> 0] = n[(e + 6) >> 0];
								n[(d + 7) >> 0] = n[(e + 7) >> 0];
							}
							function br(e) {
								e = e | 0;
								L = e;
							}
							function dr() {
								return L | 0;
							}
							function hr(e, r, i, n) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								n = n | 0;
								var t = 0,
									o = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0,
									g = 0,
									y = 0,
									B = 0,
									A = 0,
									U = 0,
									S = 0;
								u = c;
								t = f[(8 + r) >> 0] | 0;
								s = f[(64 + r) >> 0] | 0;
								r = a[(120 + ((s * 12) | 0)) >> 2] << t;
								o = a[(124 + ((s * 12) | 0)) >> 2] << t;
								t = a[(128 + ((s * 12) | 0)) >> 2] << t;
								if (!i) a[e >> 2] = ee(a[e >> 2] | 0, r) | 0;
								e: do
									if (!(n & 65436)) {
										if (n & 98) {
											d = (e + 4) | 0;
											l = ee(a[d >> 2] | 0, o) | 0;
											s = (e + 20) | 0;
											b = ee(a[s >> 2] | 0, r) | 0;
											i = (e + 24) | 0;
											t = ee(a[i >> 2] | 0, o) | 0;
											o = a[e >> 2] | 0;
											r = ((l >> 1) - t) | 0;
											t = (l + (t >> 1)) | 0;
											l = (b + o + 32) | 0;
											n = (l + t) >> 6;
											a[e >> 2] = n;
											b = (o - b + 32) | 0;
											o = (b + r) >> 6;
											a[d >> 2] = o;
											r = (b - r) >> 6;
											a[(e + 8) >> 2] = r;
											t = (l - t) >> 6;
											a[(e + 12) >> 2] = t;
											a[(e + 48) >> 2] = n;
											a[(e + 32) >> 2] = n;
											a[(e + 16) >> 2] = n;
											a[(e + 52) >> 2] = o;
											a[(e + 36) >> 2] = o;
											a[s >> 2] = o;
											a[(e + 56) >> 2] = r;
											a[(e + 40) >> 2] = r;
											a[i >> 2] = r;
											a[(e + 60) >> 2] = t;
											a[(e + 44) >> 2] = t;
											a[(e + 28) >> 2] = t;
											if (
												(((n + 512) | 0) >>> 0 > 1023) |
												(((o + 512) | 0) >>> 0 > 1023) |
												(((r + 512) | 0) >>> 0 > 1023) |
												(((t + 512) | 0) >>> 0 > 1023)
											)
												t = 1;
											else break;
											c = u;
											return t | 0;
										}
										t = ((a[e >> 2] | 0) + 32) >> 6;
										if (((t + 512) | 0) >>> 0 > 1023) {
											b = 1;
											c = u;
											return b | 0;
										} else {
											a[(e + 60) >> 2] = t;
											a[(e + 56) >> 2] = t;
											a[(e + 52) >> 2] = t;
											a[(e + 48) >> 2] = t;
											a[(e + 44) >> 2] = t;
											a[(e + 40) >> 2] = t;
											a[(e + 36) >> 2] = t;
											a[(e + 32) >> 2] = t;
											a[(e + 28) >> 2] = t;
											a[(e + 24) >> 2] = t;
											a[(e + 20) >> 2] = t;
											a[(e + 16) >> 2] = t;
											a[(e + 12) >> 2] = t;
											a[(e + 8) >> 2] = t;
											a[(e + 4) >> 2] = t;
											a[e >> 2] = t;
											break;
										}
									} else {
										S = (e + 4) | 0;
										m = (e + 56) | 0;
										B = (e + 60) | 0;
										v = a[B >> 2] | 0;
										g = ee(a[S >> 2] | 0, o) | 0;
										a[m >> 2] = ee(a[m >> 2] | 0, o) | 0;
										a[B >> 2] = ee(v, t) | 0;
										B = (e + 8) | 0;
										v = a[B >> 2] | 0;
										m = (e + 16) | 0;
										U = ee(a[(e + 20) >> 2] | 0, r) | 0;
										h = ee(a[m >> 2] | 0, t) | 0;
										k = (e + 12) | 0;
										p = a[k >> 2] | 0;
										n = ee(a[(e + 32) >> 2] | 0, o) | 0;
										i = ee(a[(e + 24) >> 2] | 0, o) | 0;
										w = a[(e + 28) >> 2] | 0;
										s = ee(a[(e + 48) >> 2] | 0, t) | 0;
										d = ee(a[(e + 36) >> 2] | 0, o) | 0;
										l = a[(e + 44) >> 2] | 0;
										b = ee(a[(e + 40) >> 2] | 0, t) | 0;
										t = ee(a[(e + 52) >> 2] | 0, o) | 0;
										A = a[e >> 2] | 0;
										y = (U + A) | 0;
										U = (A - U) | 0;
										A = ((g >> 1) - i) | 0;
										g = ((i >> 1) + g) | 0;
										i = (g + y) | 0;
										a[e >> 2] = i;
										a[S >> 2] = A + U;
										a[B >> 2] = U - A;
										a[k >> 2] = y - g;
										k = ee(o, (w + v) | 0) | 0;
										w = ee((v - w) | 0, o) | 0;
										o = ((h >> 1) - s) | 0;
										h = ((s >> 1) + h) | 0;
										s = (h + k) | 0;
										a[m >> 2] = s;
										a[(e + 20) >> 2] = o + w;
										a[(e + 24) >> 2] = w - o;
										a[(e + 28) >> 2] = k - h;
										h = ee(r, (l + p) | 0) | 0;
										r = ee((p - l) | 0, r) | 0;
										l = ((n >> 1) - t) | 0;
										n = ((t >> 1) + n) | 0;
										o = (n + h) | 0;
										a[(e + 32) >> 2] = o;
										a[(e + 36) >> 2] = l + r;
										a[(e + 40) >> 2] = r - l;
										a[(e + 44) >> 2] = h - n;
										n = (e + 56) | 0;
										h = a[n >> 2] | 0;
										l = (h + d) | 0;
										h = (d - h) | 0;
										r = (e + 60) | 0;
										t = a[r >> 2] | 0;
										d = ((b >> 1) - t) | 0;
										b = ((t >> 1) + b) | 0;
										t = (b + l) | 0;
										a[(e + 48) >> 2] = t;
										a[(e + 52) >> 2] = d + h;
										a[n >> 2] = h - d;
										a[r >> 2] = l - b;
										r = s;
										s = 3;
										while (1) {
											y = ((r >> 1) - t) | 0;
											t = ((t >> 1) + r) | 0;
											B = (o + i + 32) | 0;
											A = (B + t) >> 6;
											a[e >> 2] = A;
											r = (i - o + 32) | 0;
											U = (r + y) >> 6;
											a[(e + 16) >> 2] = U;
											r = (r - y) >> 6;
											a[(e + 32) >> 2] = r;
											t = (B - t) >> 6;
											a[(e + 48) >> 2] = t;
											if (
												(((A + 512) | 0) >>> 0 > 1023) |
												(((U + 512) | 0) >>> 0 > 1023)
											) {
												t = 1;
												r = 14;
												break;
											}
											if (
												(((r + 512) | 0) >>> 0 > 1023) |
												(((t + 512) | 0) >>> 0 > 1023)
											) {
												t = 1;
												r = 14;
												break;
											}
											n = (e + 4) | 0;
											if (!s) break e;
											i = a[n >> 2] | 0;
											o = a[(e + 36) >> 2] | 0;
											r = a[(e + 20) >> 2] | 0;
											t = a[(e + 52) >> 2] | 0;
											e = n;
											s = (s + -1) | 0;
										}
										if ((r | 0) == 14) {
											c = u;
											return t | 0;
										}
									}
								while (0);
								U = 0;
								c = u;
								return U | 0;
							}
							function pr(e, r) {
								e = e | 0;
								r = r | 0;
								var i = 0,
									t = 0,
									f = 0,
									o = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0,
									g = 0,
									y = 0,
									B = 0,
									A = 0,
									U = 0,
									S = 0,
									_ = 0,
									M = 0,
									E = 0,
									F = 0,
									L = 0,
									C = 0;
								M = c;
								i = n[(64 + r) >> 0] | 0;
								m = n[(8 + r) >> 0] | 0;
								F = (e + 8) | 0;
								g = a[F >> 2] | 0;
								s = a[(e + 20) >> 2] | 0;
								k = (e + 16) | 0;
								U = a[k >> 2] | 0;
								w = (e + 32) | 0;
								S = a[w >> 2] | 0;
								L = (e + 12) | 0;
								y = a[L >> 2] | 0;
								t = a[(e + 24) >> 2] | 0;
								b = a[(e + 28) >> 2] | 0;
								h = (e + 48) | 0;
								f = a[h >> 2] | 0;
								E = a[(e + 36) >> 2] | 0;
								_ = a[(e + 40) >> 2] | 0;
								C = a[(e + 44) >> 2] | 0;
								o = a[(e + 52) >> 2] | 0;
								p = a[e >> 2] | 0;
								l = (s + p) | 0;
								s = (p - s) | 0;
								p = (e + 4) | 0;
								A = a[p >> 2] | 0;
								v = (A - t) | 0;
								A = (t + A) | 0;
								t = (A + l) | 0;
								a[e >> 2] = t;
								u = (v + s) | 0;
								a[p >> 2] = u;
								v = (s - v) | 0;
								a[F >> 2] = v;
								A = (l - A) | 0;
								a[L >> 2] = A;
								L = (b + g) | 0;
								b = (g - b) | 0;
								g = (U - f) | 0;
								U = (f + U) | 0;
								f = (U + L) | 0;
								a[k >> 2] = f;
								l = (g + b) | 0;
								a[(e + 20) >> 2] = l;
								g = (b - g) | 0;
								a[(e + 24) >> 2] = g;
								U = (L - U) | 0;
								a[(e + 28) >> 2] = U;
								L = (C + y) | 0;
								C = (y - C) | 0;
								y = (S - o) | 0;
								S = (o + S) | 0;
								o = (S + L) | 0;
								a[(e + 32) >> 2] = o;
								b = (y + C) | 0;
								a[(e + 36) >> 2] = b;
								y = (C - y) | 0;
								a[(e + 40) >> 2] = y;
								S = (L - S) | 0;
								a[(e + 44) >> 2] = S;
								L = (e + 56) | 0;
								C = a[L >> 2] | 0;
								F = (C + E) | 0;
								C = (E - C) | 0;
								E = (e + 60) | 0;
								s = a[E >> 2] | 0;
								B = (_ - s) | 0;
								_ = (s + _) | 0;
								s = (_ + F) | 0;
								a[(e + 48) >> 2] = s;
								d = (B + C) | 0;
								a[(e + 52) >> 2] = d;
								B = (C - B) | 0;
								a[L >> 2] = B;
								_ = (F - _) | 0;
								a[E >> 2] = _;
								m = m & 255;
								i = a[(120 + (((i & 255) * 12) | 0)) >> 2] | 0;
								if (r >>> 0 > 11) {
									r = i << (m + -2);
									m = (o + t) | 0;
									o = (t - o) | 0;
									t = (f - s) | 0;
									i = (s + f) | 0;
									a[e >> 2] = ee((i + m) | 0, r) | 0;
									a[k >> 2] = ee((t + o) | 0, r) | 0;
									a[w >> 2] = ee((o - t) | 0, r) | 0;
									a[h >> 2] = ee((m - i) | 0, r) | 0;
									w = (b + u) | 0;
									i = (u - b) | 0;
									k = (l - d) | 0;
									m = (d + l) | 0;
									a[p >> 2] = ee((m + w) | 0, r) | 0;
									a[(e + 20) >> 2] = ee((k + i) | 0, r) | 0;
									a[(e + 36) >> 2] = ee((i - k) | 0, r) | 0;
									a[(e + 52) >> 2] = ee((w - m) | 0, r) | 0;
									m = (y + v) | 0;
									v = (v - y) | 0;
									y = (g - B) | 0;
									B = (B + g) | 0;
									a[(e + 8) >> 2] = ee((B + m) | 0, r) | 0;
									a[(e + 24) >> 2] = ee((y + v) | 0, r) | 0;
									a[(e + 40) >> 2] = ee((v - y) | 0, r) | 0;
									a[(e + 56) >> 2] = ee((m - B) | 0, r) | 0;
									B = (S + A) | 0;
									y = (A - S) | 0;
									A = (U - _) | 0;
									U = (_ + U) | 0;
									a[(e + 12) >> 2] = ee((U + B) | 0, r) | 0;
									a[(e + 28) >> 2] = ee((A + y) | 0, r) | 0;
									a[(e + 44) >> 2] = ee((y - A) | 0, r) | 0;
									a[(e + 60) >> 2] = ee((B - U) | 0, r) | 0;
									c = M;
									return;
								} else {
									E = ((r + -6) | 0) >>> 0 < 6 ? 1 : 2;
									r = (2 - m) | 0;
									m = (o + t) | 0;
									F = (t - o) | 0;
									o = (f - s) | 0;
									t = (s + f) | 0;
									a[e >> 2] = ((ee((t + m) | 0, i) | 0) + E) >> r;
									a[k >> 2] = ((ee((o + F) | 0, i) | 0) + E) >> r;
									a[w >> 2] = ((ee((F - o) | 0, i) | 0) + E) >> r;
									a[h >> 2] = ((ee((m - t) | 0, i) | 0) + E) >> r;
									w = (b + u) | 0;
									t = (u - b) | 0;
									k = (l - d) | 0;
									m = (d + l) | 0;
									a[p >> 2] = ((ee((m + w) | 0, i) | 0) + E) >> r;
									a[(e + 20) >> 2] = ((ee((k + t) | 0, i) | 0) + E) >> r;
									a[(e + 36) >> 2] = ((ee((t - k) | 0, i) | 0) + E) >> r;
									a[(e + 52) >> 2] = ((ee((w - m) | 0, i) | 0) + E) >> r;
									m = (y + v) | 0;
									v = (v - y) | 0;
									y = (g - B) | 0;
									B = (B + g) | 0;
									a[(e + 8) >> 2] = ((ee((B + m) | 0, i) | 0) + E) >> r;
									a[(e + 24) >> 2] = ((ee((y + v) | 0, i) | 0) + E) >> r;
									a[(e + 40) >> 2] = ((ee((v - y) | 0, i) | 0) + E) >> r;
									a[(e + 56) >> 2] = ((ee((m - B) | 0, i) | 0) + E) >> r;
									B = (S + A) | 0;
									y = (A - S) | 0;
									A = (U - _) | 0;
									U = (_ + U) | 0;
									a[(e + 12) >> 2] = ((ee((U + B) | 0, i) | 0) + E) >> r;
									a[(e + 28) >> 2] = ((ee((A + y) | 0, i) | 0) + E) >> r;
									a[(e + 44) >> 2] = ((ee((y - A) | 0, i) | 0) + E) >> r;
									a[(e + 60) >> 2] = ((ee((B - U) | 0, i) | 0) + E) >> r;
									c = M;
									return;
								}
							}
							function kr(e, r) {
								e = e | 0;
								r = r | 0;
								var i = 0,
									n = 0,
									t = 0,
									o = 0,
									s = 0,
									u = 0,
									l = 0,
									c = 0,
									b = 0;
								i = a[(120 + (((f[(64 + r) >> 0] | 0) * 12) | 0)) >> 2] | 0;
								if (r >>> 0 > 5) {
									i = i << ((f[(8 + r) >> 0] | 0) + -1);
									r = 0;
								} else r = 1;
								l = a[e >> 2] | 0;
								t = (e + 8) | 0;
								o = a[t >> 2] | 0;
								b = (o + l) | 0;
								o = (l - o) | 0;
								l = (e + 4) | 0;
								u = a[l >> 2] | 0;
								c = (e + 12) | 0;
								n = a[c >> 2] | 0;
								s = (u - n) | 0;
								u = (n + u) | 0;
								a[e >> 2] = (ee((u + b) | 0, i) | 0) >> r;
								a[l >> 2] = (ee((b - u) | 0, i) | 0) >> r;
								a[t >> 2] = (ee((s + o) | 0, i) | 0) >> r;
								a[c >> 2] = (ee((o - s) | 0, i) | 0) >> r;
								c = (e + 16) | 0;
								s = a[c >> 2] | 0;
								o = (e + 24) | 0;
								t = a[o >> 2] | 0;
								l = (t + s) | 0;
								t = (s - t) | 0;
								s = (e + 20) | 0;
								u = a[s >> 2] | 0;
								e = (e + 28) | 0;
								b = a[e >> 2] | 0;
								n = (u - b) | 0;
								u = (b + u) | 0;
								a[c >> 2] = (ee((u + l) | 0, i) | 0) >> r;
								a[s >> 2] = (ee((l - u) | 0, i) | 0) >> r;
								a[o >> 2] = (ee((n + t) | 0, i) | 0) >> r;
								a[e >> 2] = (ee((t - n) | 0, i) | 0) >> r;
								return;
							}
							function wr(e, r) {
								e = e | 0;
								r = r | 0;
								var i = 0,
									n = 0;
								n = c;
								r = 1 << (r + -1);
								if (!(r & e)) {
									i = r;
									r = 0;
								} else {
									r = 0;
									c = n;
									return r | 0;
								}
								do {
									r = (r + 1) | 0;
									i = i >>> 1;
								} while (((i | 0) != 0) & (((i & e) | 0) == 0));
								c = n;
								return r | 0;
							}
							function mr(e) {
								e = e | 0;
								var r = 0,
									i = 0;
								i = c;
								r = (8 - (a[(e + 8) >> 2] | 0)) | 0;
								e = Kr(e, r) | 0;
								if ((e | 0) == -1) {
									e = 1;
									c = i;
									return e | 0;
								}
								e = ((e | 0) != (a[(400 + ((r + -1) << 2)) >> 2] | 0)) & 1;
								c = i;
								return e | 0;
							}
							function vr(e) {
								e = e | 0;
								var r = 0,
									i = 0,
									n = 0,
									t = 0;
								i = c;
								t = a[(e + 12) >> 2] << 3;
								n = a[(e + 16) >> 2] | 0;
								r = (t - n) | 0;
								if ((t | 0) == (n | 0)) {
									e = 0;
									c = i;
									return e | 0;
								}
								if (r >>> 0 > 8) {
									e = 1;
									c = i;
									return e | 0;
								} else {
									e =
										((((Vr(e) | 0) >>> ((32 - r) | 0)) | 0) !=
											((1 << (r + -1)) | 0)) &
										1;
									c = i;
									return e | 0;
								}
								return 0;
							}
							function gr(e, r, i) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								var n = 0,
									t = 0;
								t = c;
								n = a[(e + (i << 2)) >> 2] | 0;
								do {
									i = (i + 1) | 0;
									if (i >>> 0 >= r >>> 0) break;
								} while ((a[(e + (i << 2)) >> 2] | 0) != (n | 0));
								c = t;
								return ((i | 0) == (r | 0) ? 0 : i) | 0;
							}
							function yr(e, r) {
								e = e | 0;
								r = r | 0;
								var i = 0,
									n = 0,
									t = 0;
								n = a[(e + 4) >> 2] | 0;
								t = (r >>> 0) % (n >>> 0) | 0;
								i = (r - t) | 0;
								r = ee(a[(e + 8) >> 2] | 0, n) | 0;
								n = a[e >> 2] | 0;
								a[(e + 12) >> 2] = n + ((i << 8) + (t << 4));
								i = ((t << 3) + (r << 8) + (i << 6)) | 0;
								a[(e + 16) >> 2] = n + i;
								a[(e + 20) >> 2] = n + (i + (r << 6));
								return;
							}
							function Br(e, r, i) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								if ((i | 0) >= (e | 0)) e = (i | 0) > (r | 0) ? r : i;
								return e | 0;
							}
							function Ar(e, r, i, t) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								t = t | 0;
								var o = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0;
								m = c;
								e: do
									if (
										(
											(r >>> 0 > 3 ? (n[e >> 0] | 0) == 0 : 0)
												? (n[(e + 1) >> 0] | 0) == 0
												: 0
										)
											? ((o = n[(e + 2) >> 0] | 0), (o & 255) < 2)
											: 0
									) {
										r: do
											if ((r | 0) != 3) {
												p = -3;
												k = 3;
												u = (e + 3) | 0;
												s = 2;
												while (1) {
													if ((o << 24) >> 24)
														if (((o << 24) >> 24 == 1) & (s >>> 0 > 1)) {
															h = k;
															o = 0;
															b = 0;
															l = 0;
															break;
														} else s = 0;
													else s = (s + 1) | 0;
													l = (k + 1) | 0;
													if ((l | 0) == (r | 0)) break r;
													o = n[u >> 0] | 0;
													p = ~k;
													k = l;
													u = (u + 1) | 0;
												}
												while (1) {
													w = n[u >> 0] | 0;
													d = (h + 1) | 0;
													s = (w << 24) >> 24 != 0;
													l = (((s & 1) ^ 1) + l) | 0;
													o = ((w << 24) >> 24 == 3) & ((l | 0) == 2) ? 1 : o;
													if (((w << 24) >> 24 == 1) & (l >>> 0 > 1)) {
														w = 14;
														break;
													}
													if (s) {
														b = l >>> 0 > 2 ? 1 : b;
														l = 0;
													}
													if ((d | 0) == (r | 0)) {
														w = 18;
														break;
													} else {
														h = d;
														u = (u + 1) | 0;
													}
												}
												if ((w | 0) == 14) {
													d = (p + h - l) | 0;
													a[(i + 12) >> 2] = d;
													s = k;
													l = (l - (l >>> 0 < 3 ? l : 3)) | 0;
													break e;
												} else if ((w | 0) == 18) {
													d = (p + r - l) | 0;
													a[(i + 12) >> 2] = d;
													s = k;
													break e;
												}
											}
										while (0);
										a[t >> 2] = r;
										k = 1;
										c = m;
										return k | 0;
									} else w = 19;
								while (0);
								if ((w | 0) == 19) {
									a[(i + 12) >> 2] = r;
									d = r;
									o = 1;
									s = 0;
									b = 0;
									l = 0;
								}
								u = (e + s) | 0;
								a[i >> 2] = u;
								a[(i + 4) >> 2] = u;
								a[(i + 8) >> 2] = 0;
								a[(i + 16) >> 2] = 0;
								h = (i + 12) | 0;
								a[t >> 2] = l + s + d;
								if (b) {
									k = 1;
									c = m;
									return k | 0;
								}
								if (!o) {
									k = 0;
									c = m;
									return k | 0;
								}
								l = a[h >> 2] | 0;
								o = u;
								b = u;
								s = 0;
								e: while (1) {
									while (1) {
										k = l;
										l = (l + -1) | 0;
										if (!k) {
											w = 31;
											break e;
										}
										u = n[o >> 0] | 0;
										if ((s | 0) != 2) break;
										if ((u << 24) >> 24 != 3) {
											w = 29;
											break;
										}
										if (!l) {
											o = 1;
											w = 32;
											break e;
										}
										o = (o + 1) | 0;
										if ((f[o >> 0] | 0) > 3) {
											o = 1;
											w = 32;
											break e;
										} else s = 0;
									}
									if ((w | 0) == 29) {
										w = 0;
										if ((u & 255) < 3) {
											o = 1;
											w = 32;
											break;
										} else s = 2;
									}
									n[b >> 0] = u;
									o = (o + 1) | 0;
									b = (b + 1) | 0;
									s = (u << 24) >> 24 == 0 ? (s + 1) | 0 : 0;
								}
								if ((w | 0) == 31) {
									a[h >> 2] = b - o + (a[h >> 2] | 0);
									k = 0;
									c = m;
									return k | 0;
								} else if ((w | 0) == 32) {
									c = m;
									return o | 0;
								}
								return 0;
							}
							function Ur(e, r) {
								e = e | 0;
								r = r | 0;
								var i = 0,
									n = 0,
									t = 0,
									f = 0,
									o = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0,
									d = 0,
									h = 0;
								h = c;
								c = (c + 16) | 0;
								d = h;
								cn(r, 0, 92);
								t = Kr(e, 8) | 0;
								e: do
									if (
										(
											(
												(t | 0) != -1
													? ((a[r >> 2] = t),
													  Kr(e, 1) | 0,
													  Kr(e, 1) | 0,
													  (Kr(e, 1) | 0) != -1)
													: 0
											)
												? (Kr(e, 5) | 0) != -1
												: 0
										)
											? ((n = Kr(e, 8) | 0), (n | 0) != -1)
											: 0
									) {
										b = (r + 4) | 0;
										a[b >> 2] = n;
										t = (r + 8) | 0;
										i = $r(e, t) | 0;
										if (!i)
											if ((a[t >> 2] | 0) >>> 0 <= 31) {
												i = $r(e, d) | 0;
												if (!i) {
													t = a[d >> 2] | 0;
													if (t >>> 0 <= 12) {
														a[(r + 12) >> 2] = 1 << (t + 4);
														i = $r(e, d) | 0;
														if (!i) {
															t = a[d >> 2] | 0;
															if (t >>> 0 <= 2) {
																a[(r + 16) >> 2] = t;
																r: do
																	if (!t) {
																		i = $r(e, d) | 0;
																		if (i) break e;
																		t = a[d >> 2] | 0;
																		if (t >>> 0 > 12) {
																			i = 1;
																			break e;
																		}
																		a[(r + 20) >> 2] = 1 << (t + 4);
																	} else if ((t | 0) == 1) {
																		t = Kr(e, 1) | 0;
																		if ((t | 0) == -1) {
																			i = 1;
																			break e;
																		}
																		a[(r + 24) >> 2] = ((t | 0) == 1) & 1;
																		i = Xr(e, (r + 28) | 0) | 0;
																		if (i) break e;
																		i = Xr(e, (r + 32) | 0) | 0;
																		if (i) break e;
																		o = (r + 36) | 0;
																		i = $r(e, o) | 0;
																		if (i) break e;
																		t = a[o >> 2] | 0;
																		if (t >>> 0 > 255) {
																			i = 1;
																			break e;
																		}
																		if (!t) {
																			a[(r + 40) >> 2] = 0;
																			break;
																		}
																		t = sn(t << 2) | 0;
																		f = (r + 40) | 0;
																		a[f >> 2] = t;
																		if (!t) {
																			i = 65535;
																			break e;
																		}
																		if (a[o >> 2] | 0) {
																			n = 0;
																			while (1) {
																				i = Xr(e, (t + (n << 2)) | 0) | 0;
																				n = (n + 1) | 0;
																				if (i) break e;
																				if (n >>> 0 >= (a[o >> 2] | 0) >>> 0)
																					break r;
																				t = a[f >> 2] | 0;
																			}
																		}
																	}
																while (0);
																l = (r + 44) | 0;
																i = $r(e, l) | 0;
																if (!i)
																	if (
																		(a[l >> 2] | 0) >>> 0 <= 16
																			? ((u = Kr(e, 1) | 0), (u | 0) != -1)
																			: 0
																	) {
																		a[(r + 48) >> 2] = ((u | 0) == 1) & 1;
																		i = $r(e, d) | 0;
																		if (!i) {
																			n = (r + 52) | 0;
																			a[n >> 2] = (a[d >> 2] | 0) + 1;
																			i = $r(e, d) | 0;
																			if (!i) {
																				u = (r + 56) | 0;
																				a[u >> 2] = (a[d >> 2] | 0) + 1;
																				o = Kr(e, 1) | 0;
																				if (
																					(
																						!(((o | 0) == 0) | ((o | 0) == -1))
																							? (Kr(e, 1) | 0) != -1
																							: 0
																					)
																						? ((s = Kr(e, 1) | 0),
																						  (s | 0) != -1)
																						: 0
																				) {
																					s = (s | 0) == 1;
																					a[(r + 60) >> 2] = s & 1;
																					if (s) {
																						s = (r + 64) | 0;
																						i = $r(e, s) | 0;
																						if (i) break;
																						t = (r + 68) | 0;
																						i = $r(e, t) | 0;
																						if (i) break;
																						o = (r + 72) | 0;
																						i = $r(e, o) | 0;
																						if (i) break;
																						f = (r + 76) | 0;
																						i = $r(e, f) | 0;
																						if (i) break;
																						n = a[n >> 2] | 0;
																						if (
																							(a[s >> 2] | 0) >
																							(((n << 3) + ~a[t >> 2]) | 0)
																						) {
																							i = 1;
																							break;
																						}
																						t = a[u >> 2] | 0;
																						if (
																							(a[o >> 2] | 0) >
																							(((t << 3) + ~a[f >> 2]) | 0)
																						) {
																							i = 1;
																							break;
																						}
																					} else {
																						n = a[n >> 2] | 0;
																						t = a[u >> 2] | 0;
																					}
																					i = ee(t, n) | 0;
																					do
																						switch (a[b >> 2] | 0) {
																							case 11: {
																								t = 396;
																								n = 345600;
																								f = 58;
																								break;
																							}
																							case 12: {
																								t = 396;
																								n = 912384;
																								f = 58;
																								break;
																							}
																							case 13: {
																								t = 396;
																								n = 912384;
																								f = 58;
																								break;
																							}
																							case 20: {
																								t = 396;
																								n = 912384;
																								f = 58;
																								break;
																							}
																							case 21: {
																								t = 792;
																								n = 1824768;
																								f = 58;
																								break;
																							}
																							case 22: {
																								t = 1620;
																								n = 3110400;
																								f = 58;
																								break;
																							}
																							case 30: {
																								t = 1620;
																								n = 3110400;
																								f = 58;
																								break;
																							}
																							case 31: {
																								t = 3600;
																								n = 6912e3;
																								f = 58;
																								break;
																							}
																							case 32: {
																								t = 5120;
																								n = 7864320;
																								f = 58;
																								break;
																							}
																							case 40: {
																								t = 8192;
																								n = 12582912;
																								f = 58;
																								break;
																							}
																							case 41: {
																								t = 8192;
																								n = 12582912;
																								f = 58;
																								break;
																							}
																							case 42: {
																								t = 8704;
																								n = 13369344;
																								f = 58;
																								break;
																							}
																							case 50: {
																								t = 22080;
																								n = 42393600;
																								f = 58;
																								break;
																							}
																							case 51: {
																								t = 36864;
																								n = 70778880;
																								f = 58;
																								break;
																							}
																							case 10: {
																								t = 99;
																								n = 152064;
																								f = 58;
																								break;
																							}
																							default:
																								f = 60;
																						}
																					while (0);
																					do
																						if ((f | 0) == 58) {
																							if (t >>> 0 < i >>> 0) {
																								f = 60;
																								break;
																							}
																							n =
																								((n >>> 0) /
																									(((i * 384) | 0) >>> 0)) |
																								0;
																							n = n >>> 0 < 16 ? n : 16;
																							a[d >> 2] = n;
																							t = a[l >> 2] | 0;
																							if (t >>> 0 > n >>> 0) {
																								n = t;
																								f = 61;
																							}
																						}
																					while (0);
																					if ((f | 0) == 60) {
																						a[d >> 2] = 2147483647;
																						n = a[l >> 2] | 0;
																						f = 61;
																					}
																					if ((f | 0) == 61) a[d >> 2] = n;
																					f = (r + 88) | 0;
																					a[f >> 2] = n;
																					n = Kr(e, 1) | 0;
																					if ((n | 0) == -1) {
																						i = 1;
																						break;
																					}
																					d = (n | 0) == 1;
																					a[(r + 80) >> 2] = d & 1;
																					do
																						if (d) {
																							n = sn(952) | 0;
																							t = (r + 84) | 0;
																							a[t >> 2] = n;
																							if (!n) {
																								i = 65535;
																								break e;
																							}
																							i = Di(e, n) | 0;
																							if (i) break e;
																							i = a[t >> 2] | 0;
																							if (!(a[(i + 920) >> 2] | 0))
																								break;
																							n = a[(i + 948) >> 2] | 0;
																							if (
																								(a[(i + 944) >> 2] | 0) >>> 0 >
																								n >>> 0
																							) {
																								i = 1;
																								break e;
																							}
																							if (
																								n >>> 0 <
																								(a[l >> 2] | 0) >>> 0
																							) {
																								i = 1;
																								break e;
																							}
																							if (
																								n >>> 0 >
																								(a[f >> 2] | 0) >>> 0
																							) {
																								i = 1;
																								break e;
																							}
																							a[f >> 2] = (n | 0) == 0 ? 1 : n;
																						}
																					while (0);
																					mr(e) | 0;
																					i = 0;
																				} else i = 1;
																			}
																		}
																	} else i = 1;
															} else i = 1;
														}
													} else i = 1;
												}
											} else i = 1;
									} else i = 1;
								while (0);
								c = h;
								return i | 0;
							}
							function Sr(e, r) {
								e = e | 0;
								r = r | 0;
								var i = 0,
									n = 0,
									t = 0,
									f = 0,
									o = 0,
									s = 0;
								s = c;
								if ((a[e >> 2] | 0) != (a[r >> 2] | 0)) {
									i = 1;
									c = s;
									return i | 0;
								}
								if ((a[(e + 4) >> 2] | 0) != (a[(r + 4) >> 2] | 0)) {
									i = 1;
									c = s;
									return i | 0;
								}
								if ((a[(e + 12) >> 2] | 0) != (a[(r + 12) >> 2] | 0)) {
									i = 1;
									c = s;
									return i | 0;
								}
								i = a[(e + 16) >> 2] | 0;
								if ((i | 0) != (a[(r + 16) >> 2] | 0)) {
									i = 1;
									c = s;
									return i | 0;
								}
								if ((a[(e + 44) >> 2] | 0) != (a[(r + 44) >> 2] | 0)) {
									i = 1;
									c = s;
									return i | 0;
								}
								if ((a[(e + 48) >> 2] | 0) != (a[(r + 48) >> 2] | 0)) {
									i = 1;
									c = s;
									return i | 0;
								}
								if ((a[(e + 52) >> 2] | 0) != (a[(r + 52) >> 2] | 0)) {
									i = 1;
									c = s;
									return i | 0;
								}
								if ((a[(e + 56) >> 2] | 0) != (a[(r + 56) >> 2] | 0)) {
									i = 1;
									c = s;
									return i | 0;
								}
								o = a[(e + 60) >> 2] | 0;
								if ((o | 0) != (a[(r + 60) >> 2] | 0)) {
									i = 1;
									c = s;
									return i | 0;
								}
								if ((a[(e + 80) >> 2] | 0) != (a[(r + 80) >> 2] | 0)) {
									i = 1;
									c = s;
									return i | 0;
								}
								e: do
									if (!i) {
										if ((a[(e + 20) >> 2] | 0) != (a[(r + 20) >> 2] | 0)) {
											i = 1;
											c = s;
											return i | 0;
										}
									} else if ((i | 0) == 1) {
										if ((a[(e + 24) >> 2] | 0) != (a[(r + 24) >> 2] | 0)) {
											i = 1;
											c = s;
											return i | 0;
										}
										if ((a[(e + 28) >> 2] | 0) != (a[(r + 28) >> 2] | 0)) {
											i = 1;
											c = s;
											return i | 0;
										}
										if ((a[(e + 32) >> 2] | 0) != (a[(r + 32) >> 2] | 0)) {
											i = 1;
											c = s;
											return i | 0;
										}
										i = a[(e + 36) >> 2] | 0;
										if ((i | 0) != (a[(r + 36) >> 2] | 0)) {
											i = 1;
											c = s;
											return i | 0;
										}
										if (i) {
											n = a[(e + 40) >> 2] | 0;
											t = a[(r + 40) >> 2] | 0;
											f = 0;
											while (1) {
												if (
													(a[(n + (f << 2)) >> 2] | 0) !=
													(a[(t + (f << 2)) >> 2] | 0)
												) {
													i = 1;
													break;
												}
												f = (f + 1) | 0;
												if (f >>> 0 >= i >>> 0) break e;
											}
											c = s;
											return i | 0;
										}
									}
								while (0);
								if (o) {
									if ((a[(e + 64) >> 2] | 0) != (a[(r + 64) >> 2] | 0)) {
										i = 1;
										c = s;
										return i | 0;
									}
									if ((a[(e + 68) >> 2] | 0) != (a[(r + 68) >> 2] | 0)) {
										i = 1;
										c = s;
										return i | 0;
									}
									if ((a[(e + 72) >> 2] | 0) != (a[(r + 72) >> 2] | 0)) {
										i = 1;
										c = s;
										return i | 0;
									}
									if ((a[(e + 76) >> 2] | 0) != (a[(r + 76) >> 2] | 0)) {
										i = 1;
										c = s;
										return i | 0;
									}
								}
								i = 0;
								c = s;
								return i | 0;
							}
							function _r(e, r) {
								e = e | 0;
								r = r | 0;
								var i = 0,
									n = 0,
									t = 0,
									f = 0,
									o = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0;
								l = c;
								c = (c + 16) | 0;
								s = (l + 4) | 0;
								u = l;
								cn(r, 0, 72);
								i = $r(e, r) | 0;
								if (i) {
									c = l;
									return i | 0;
								}
								if ((a[r >> 2] | 0) >>> 0 > 255) {
									i = 1;
									c = l;
									return i | 0;
								}
								n = (r + 4) | 0;
								i = $r(e, n) | 0;
								if (i) {
									c = l;
									return i | 0;
								}
								if ((a[n >> 2] | 0) >>> 0 > 31) {
									i = 1;
									c = l;
									return i | 0;
								}
								if (Kr(e, 1) | 0) {
									i = 1;
									c = l;
									return i | 0;
								}
								i = Kr(e, 1) | 0;
								if ((i | 0) == -1) {
									i = 1;
									c = l;
									return i | 0;
								}
								a[(r + 8) >> 2] = ((i | 0) == 1) & 1;
								i = $r(e, s) | 0;
								if (i) {
									c = l;
									return i | 0;
								}
								i = ((a[s >> 2] | 0) + 1) | 0;
								o = (r + 12) | 0;
								a[o >> 2] = i;
								if (i >>> 0 > 8) {
									i = 1;
									c = l;
									return i | 0;
								}
								e: do
									if (i >>> 0 > 1) {
										i = (r + 16) | 0;
										n = $r(e, i) | 0;
										if (n) {
											i = n;
											c = l;
											return i | 0;
										}
										i = a[i >> 2] | 0;
										if (i >>> 0 > 6) {
											i = 1;
											c = l;
											return i | 0;
										}
										switch (i | 0) {
											case 5:
											case 4:
											case 3: {
												i = Kr(e, 1) | 0;
												if ((i | 0) == -1) {
													i = 1;
													c = l;
													return i | 0;
												}
												a[(r + 32) >> 2] = ((i | 0) == 1) & 1;
												i = $r(e, s) | 0;
												if (!i) {
													a[(r + 36) >> 2] = (a[s >> 2] | 0) + 1;
													break e;
												} else {
													c = l;
													return i | 0;
												}
											}
											case 0: {
												i = sn(a[o >> 2] << 2) | 0;
												t = (r + 20) | 0;
												a[t >> 2] = i;
												if (!i) {
													i = 65535;
													c = l;
													return i | 0;
												}
												if (!(a[o >> 2] | 0)) break e;
												else n = 0;
												while (1) {
													i = $r(e, s) | 0;
													if (i) break;
													a[((a[t >> 2] | 0) + (n << 2)) >> 2] =
														(a[s >> 2] | 0) + 1;
													n = (n + 1) | 0;
													if (n >>> 0 >= (a[o >> 2] | 0) >>> 0) break e;
												}
												c = l;
												return i | 0;
											}
											case 2: {
												n = (r + 24) | 0;
												a[n >> 2] = sn(((a[o >> 2] << 2) + -4) | 0) | 0;
												i = sn(((a[o >> 2] << 2) + -4) | 0) | 0;
												f = (r + 28) | 0;
												a[f >> 2] = i;
												if (((a[n >> 2] | 0) == 0) | ((i | 0) == 0)) {
													i = 65535;
													c = l;
													return i | 0;
												}
												if ((a[o >> 2] | 0) == 1) break e;
												else t = 0;
												while (1) {
													i = $r(e, s) | 0;
													if (i) {
														n = 46;
														break;
													}
													a[((a[n >> 2] | 0) + (t << 2)) >> 2] = a[s >> 2];
													i = $r(e, s) | 0;
													if (i) {
														n = 46;
														break;
													}
													a[((a[f >> 2] | 0) + (t << 2)) >> 2] = a[s >> 2];
													t = (t + 1) | 0;
													if (t >>> 0 >= (((a[o >> 2] | 0) + -1) | 0) >>> 0)
														break e;
												}
												if ((n | 0) == 46) {
													c = l;
													return i | 0;
												}
												break;
											}
											case 6: {
												i = $r(e, s) | 0;
												if (i) {
													c = l;
													return i | 0;
												}
												n = ((a[s >> 2] | 0) + 1) | 0;
												i = (r + 40) | 0;
												a[i >> 2] = n;
												n = sn(n << 2) | 0;
												f = (r + 44) | 0;
												a[f >> 2] = n;
												if (!n) {
													i = 65535;
													c = l;
													return i | 0;
												}
												t = a[(432 + (((a[o >> 2] | 0) + -1) << 2)) >> 2] | 0;
												if (!(a[i >> 2] | 0)) break e;
												else n = 0;
												while (1) {
													b = Kr(e, t) | 0;
													a[((a[f >> 2] | 0) + (n << 2)) >> 2] = b;
													n = (n + 1) | 0;
													if (b >>> 0 >= (a[o >> 2] | 0) >>> 0) {
														i = 1;
														break;
													}
													if (n >>> 0 >= (a[i >> 2] | 0) >>> 0) break e;
												}
												c = l;
												return i | 0;
											}
											default:
												break e;
										}
									}
								while (0);
								i = $r(e, s) | 0;
								if (i) {
									e = i;
									c = l;
									return e | 0;
								}
								i = a[s >> 2] | 0;
								if (i >>> 0 > 31) {
									e = 1;
									c = l;
									return e | 0;
								}
								a[(r + 48) >> 2] = i + 1;
								i = $r(e, s) | 0;
								if (i) {
									e = i;
									c = l;
									return e | 0;
								}
								if ((a[s >> 2] | 0) >>> 0 > 31) {
									e = 1;
									c = l;
									return e | 0;
								}
								if (Kr(e, 1) | 0) {
									e = 1;
									c = l;
									return e | 0;
								}
								if ((Kr(e, 2) | 0) >>> 0 > 2) {
									e = 1;
									c = l;
									return e | 0;
								}
								i = Xr(e, u) | 0;
								if (i) {
									e = i;
									c = l;
									return e | 0;
								}
								i = ((a[u >> 2] | 0) + 26) | 0;
								if (i >>> 0 > 51) {
									e = 1;
									c = l;
									return e | 0;
								}
								a[(r + 52) >> 2] = i;
								i = Xr(e, u) | 0;
								if (i) {
									e = i;
									c = l;
									return e | 0;
								}
								if ((((a[u >> 2] | 0) + 26) | 0) >>> 0 > 51) {
									e = 1;
									c = l;
									return e | 0;
								}
								i = Xr(e, u) | 0;
								if (i) {
									e = i;
									c = l;
									return e | 0;
								}
								i = a[u >> 2] | 0;
								if (((i + 12) | 0) >>> 0 > 24) {
									e = 1;
									c = l;
									return e | 0;
								}
								a[(r + 56) >> 2] = i;
								i = Kr(e, 1) | 0;
								if ((i | 0) == -1) {
									e = 1;
									c = l;
									return e | 0;
								}
								a[(r + 60) >> 2] = ((i | 0) == 1) & 1;
								i = Kr(e, 1) | 0;
								if ((i | 0) == -1) {
									e = 1;
									c = l;
									return e | 0;
								}
								a[(r + 64) >> 2] = ((i | 0) == 1) & 1;
								i = Kr(e, 1) | 0;
								if ((i | 0) == -1) {
									e = 1;
									c = l;
									return e | 0;
								}
								a[(r + 68) >> 2] = ((i | 0) == 1) & 1;
								mr(e) | 0;
								e = 0;
								c = l;
								return e | 0;
							}
							function Mr(e, r, i, n, t) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								n = n | 0;
								t = t | 0;
								var f = 0,
									o = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0,
									g = 0,
									y = 0,
									B = 0;
								B = c;
								c = (c + 32) | 0;
								m = (B + 20) | 0;
								k = (B + 16) | 0;
								h = (B + 12) | 0;
								l = (B + 8) | 0;
								y = (B + 4) | 0;
								v = B;
								cn(r, 0, 988);
								g = ee(a[(i + 56) >> 2] | 0, a[(i + 52) >> 2] | 0) | 0;
								u = $r(e, y) | 0;
								if (u) {
									t = u;
									c = B;
									return t | 0;
								}
								d = a[y >> 2] | 0;
								a[r >> 2] = d;
								if (d >>> 0 >= g >>> 0) {
									t = 1;
									c = B;
									return t | 0;
								}
								u = $r(e, y) | 0;
								if (u) {
									t = u;
									c = B;
									return t | 0;
								}
								u = a[y >> 2] | 0;
								b = (r + 4) | 0;
								a[b >> 2] = u;
								if (((u | 0) == 5) | ((u | 0) == 0)) s = 5;
								else if (!(((u | 0) == 7) | ((u | 0) == 2))) {
									t = 1;
									c = B;
									return t | 0;
								}
								if ((s | 0) == 5) {
									if ((a[t >> 2] | 0) == 5) {
										t = 1;
										c = B;
										return t | 0;
									}
									if (!(a[(i + 44) >> 2] | 0)) {
										t = 1;
										c = B;
										return t | 0;
									}
								}
								u = $r(e, y) | 0;
								if (u) {
									t = u;
									c = B;
									return t | 0;
								}
								d = a[y >> 2] | 0;
								a[(r + 8) >> 2] = d;
								if ((d | 0) != (a[n >> 2] | 0)) {
									t = 1;
									c = B;
									return t | 0;
								}
								d = (i + 12) | 0;
								u = a[d >> 2] | 0;
								s = 0;
								while (1)
									if (!(u >>> s)) break;
									else s = (s + 1) | 0;
								u = Kr(e, (s + -1) | 0) | 0;
								if ((u | 0) == -1) {
									t = 1;
									c = B;
									return t | 0;
								}
								s = (a[t >> 2] | 0) == 5;
								if (s & ((u | 0) != 0)) {
									t = 1;
									c = B;
									return t | 0;
								}
								a[(r + 12) >> 2] = u;
								if (s) {
									u = $r(e, y) | 0;
									if (u) {
										t = u;
										c = B;
										return t | 0;
									}
									u = a[y >> 2] | 0;
									a[(r + 16) >> 2] = u;
									if (u >>> 0 > 65535) {
										t = 1;
										c = B;
										return t | 0;
									}
								}
								f = (i + 16) | 0;
								u = a[f >> 2] | 0;
								if (!u) {
									o = (i + 20) | 0;
									u = a[o >> 2] | 0;
									s = 0;
									while (1)
										if (!(u >>> s)) break;
										else s = (s + 1) | 0;
									u = Kr(e, (s + -1) | 0) | 0;
									if ((u | 0) == -1) {
										t = 1;
										c = B;
										return t | 0;
									}
									s = (r + 20) | 0;
									a[s >> 2] = u;
									do
										if (a[(n + 8) >> 2] | 0) {
											u = Xr(e, v) | 0;
											if (!u) {
												a[(r + 24) >> 2] = a[v >> 2];
												break;
											} else {
												t = u;
												c = B;
												return t | 0;
											}
										}
									while (0);
									if ((a[t >> 2] | 0) == 5) {
										u = a[s >> 2] | 0;
										if (u >>> 0 > ((a[o >> 2] | 0) >>> 1) >>> 0) {
											t = 1;
											c = B;
											return t | 0;
										}
										s = a[(r + 24) >> 2] | 0;
										if ((u | 0) != (((s | 0) > 0 ? 0 : (0 - s) | 0) | 0)) {
											t = 1;
											c = B;
											return t | 0;
										}
									}
									u = a[f >> 2] | 0;
								}
								if ((u | 0) == 1 ? (a[(i + 24) >> 2] | 0) == 0 : 0) {
									u = Xr(e, v) | 0;
									if (u) {
										t = u;
										c = B;
										return t | 0;
									}
									u = (r + 28) | 0;
									a[u >> 2] = a[v >> 2];
									do
										if (a[(n + 8) >> 2] | 0) {
											s = Xr(e, v) | 0;
											if (!s) {
												a[(r + 32) >> 2] = a[v >> 2];
												break;
											} else {
												t = s;
												c = B;
												return t | 0;
											}
										}
									while (0);
									if (
										(a[t >> 2] | 0) == 5
											? ((s = a[u >> 2] | 0),
											  (u =
													((a[(i + 32) >> 2] | 0) +
														s +
														(a[(r + 32) >> 2] | 0)) |
													0),
											  (((s | 0) < (u | 0) ? s : u) | 0) != 0)
											: 0
									) {
										t = 1;
										c = B;
										return t | 0;
									}
								}
								if (a[(n + 68) >> 2] | 0) {
									u = $r(e, y) | 0;
									if (u) {
										t = u;
										c = B;
										return t | 0;
									}
									u = a[y >> 2] | 0;
									a[(r + 36) >> 2] = u;
									if (u >>> 0 > 127) {
										t = 1;
										c = B;
										return t | 0;
									}
								}
								u = a[b >> 2] | 0;
								if (((u | 0) == 5) | ((u | 0) == 0)) {
									u = Kr(e, 1) | 0;
									if ((u | 0) == -1) {
										t = 1;
										c = B;
										return t | 0;
									}
									a[(r + 40) >> 2] = u;
									do
										if (!u) {
											u = a[(n + 48) >> 2] | 0;
											if (u >>> 0 > 16) {
												t = 1;
												c = B;
												return t | 0;
											} else {
												a[(r + 44) >> 2] = u;
												break;
											}
										} else {
											u = $r(e, y) | 0;
											if (u) {
												t = u;
												c = B;
												return t | 0;
											}
											u = a[y >> 2] | 0;
											if (u >>> 0 > 15) {
												t = 1;
												c = B;
												return t | 0;
											} else {
												a[(r + 44) >> 2] = u + 1;
												break;
											}
										}
									while (0);
									u = a[b >> 2] | 0;
								}
								do
									if (((u | 0) == 5) | ((u | 0) == 0)) {
										f = a[(r + 44) >> 2] | 0;
										s = a[d >> 2] | 0;
										u = Kr(e, 1) | 0;
										if ((u | 0) == -1) {
											t = 1;
											c = B;
											return t | 0;
										}
										a[(r + 68) >> 2] = u;
										if (u) {
											o = 0;
											e: while (1) {
												if (o >>> 0 > f >>> 0) {
													w = 1;
													s = 110;
													break;
												}
												u = $r(e, l) | 0;
												if (u) {
													w = u;
													s = 110;
													break;
												}
												u = a[l >> 2] | 0;
												if (u >>> 0 > 3) {
													w = 1;
													s = 110;
													break;
												}
												a[(r + ((o * 12) | 0) + 72) >> 2] = u;
												do
													if (u >>> 0 < 2) {
														u = $r(e, h) | 0;
														if (u) {
															w = u;
															s = 110;
															break e;
														}
														u = a[h >> 2] | 0;
														if (u >>> 0 >= s >>> 0) {
															w = 1;
															s = 110;
															break e;
														}
														a[(r + ((o * 12) | 0) + 76) >> 2] = u + 1;
													} else {
														if ((u | 0) != 2) break;
														u = $r(e, h) | 0;
														if (u) {
															w = u;
															s = 110;
															break e;
														}
														a[(r + ((o * 12) | 0) + 80) >> 2] = a[h >> 2];
													}
												while (0);
												if ((a[l >> 2] | 0) == 3) {
													s = 61;
													break;
												} else o = (o + 1) | 0;
											}
											if ((s | 0) == 61) {
												if (!o) w = 1;
												else break;
												c = B;
												return w | 0;
											} else if ((s | 0) == 110) {
												c = B;
												return w | 0;
											}
										}
									}
								while (0);
								do
									if (a[(t + 4) >> 2] | 0) {
										d = a[(i + 44) >> 2] | 0;
										t = (a[t >> 2] | 0) == 5;
										u = Kr(e, 1) | 0;
										s = (u | 0) == -1;
										if (t) {
											if (s) {
												t = 1;
												c = B;
												return t | 0;
											}
											a[(r + 276) >> 2] = u;
											f = Kr(e, 1) | 0;
											if ((f | 0) == -1) {
												t = 1;
												c = B;
												return t | 0;
											}
											a[(r + 280) >> 2] = f;
											if (((d | 0) != 0) | ((f | 0) == 0)) break;
											else w = 1;
											c = B;
											return w | 0;
										}
										if (s) {
											t = 1;
											c = B;
											return t | 0;
										}
										a[(r + 284) >> 2] = u;
										if (u) {
											s = ((d << 1) + 2) | 0;
											o = 0;
											i = 0;
											f = 0;
											l = 0;
											b = 0;
											while (1) {
												if (o >>> 0 > s >>> 0) {
													w = 1;
													s = 110;
													break;
												}
												u = $r(e, k) | 0;
												if (u) {
													w = u;
													s = 110;
													break;
												}
												u = a[k >> 2] | 0;
												if (u >>> 0 > 6) {
													w = 1;
													s = 110;
													break;
												}
												a[(r + ((o * 20) | 0) + 288) >> 2] = u;
												if (((u & -3) | 0) == 1) {
													u = $r(e, m) | 0;
													if (u) {
														w = u;
														s = 110;
														break;
													}
													a[(r + ((o * 20) | 0) + 292) >> 2] =
														(a[m >> 2] | 0) + 1;
													u = a[k >> 2] | 0;
												}
												if ((u | 0) == 2) {
													u = $r(e, m) | 0;
													if (u) {
														w = u;
														s = 110;
														break;
													}
													a[(r + ((o * 20) | 0) + 296) >> 2] = a[m >> 2];
													u = a[k >> 2] | 0;
												}
												if (((u | 0) == 3) | ((u | 0) == 6)) {
													u = $r(e, m) | 0;
													if (u) {
														w = u;
														s = 110;
														break;
													}
													a[(r + ((o * 20) | 0) + 300) >> 2] = a[m >> 2];
													u = a[k >> 2] | 0;
												}
												if ((u | 0) == 4) {
													u = $r(e, m) | 0;
													if (u) {
														w = u;
														s = 110;
														break;
													}
													u = a[m >> 2] | 0;
													if (u >>> 0 > d >>> 0) {
														w = 1;
														s = 110;
														break;
													}
													if (!u) a[(r + ((o * 20) | 0) + 304) >> 2] = 65535;
													else a[(r + ((o * 20) | 0) + 304) >> 2] = u + -1;
													u = a[k >> 2] | 0;
													p = (f + 1) | 0;
												} else p = f;
												l = ((((u | 0) == 5) & 1) + l) | 0;
												i = ((((u | 0) != 0) & (u >>> 0 < 4) & 1) + i) | 0;
												b = ((((u | 0) == 6) & 1) + b) | 0;
												if (!u) {
													s = 90;
													break;
												} else {
													o = (o + 1) | 0;
													f = p;
												}
											}
											if ((s | 0) == 90) {
												if ((p >>> 0 > 1) | (l >>> 0 > 1) | (b >>> 0 > 1)) {
													t = 1;
													c = B;
													return t | 0;
												}
												if (((i | 0) != 0) & ((l | 0) != 0)) w = 1;
												else break;
												c = B;
												return w | 0;
											} else if ((s | 0) == 110) {
												c = B;
												return w | 0;
											}
										}
									}
								while (0);
								f = Xr(e, v) | 0;
								if (f) {
									t = f;
									c = B;
									return t | 0;
								}
								t = a[v >> 2] | 0;
								a[(r + 48) >> 2] = t;
								t = (t + (a[(n + 52) >> 2] | 0)) | 0;
								a[v >> 2] = t;
								if (t >>> 0 > 51) {
									t = 1;
									c = B;
									return t | 0;
								}
								do
									if (a[(n + 60) >> 2] | 0) {
										f = $r(e, y) | 0;
										if (f) {
											t = f;
											c = B;
											return t | 0;
										}
										f = a[y >> 2] | 0;
										a[(r + 52) >> 2] = f;
										if (f >>> 0 > 2) {
											t = 1;
											c = B;
											return t | 0;
										}
										if ((f | 0) == 1) break;
										f = Xr(e, v) | 0;
										if (f) {
											t = f;
											c = B;
											return t | 0;
										}
										f = a[v >> 2] | 0;
										if (((f + 6) | 0) >>> 0 > 12) {
											t = 1;
											c = B;
											return t | 0;
										}
										a[(r + 56) >> 2] = f << 1;
										f = Xr(e, v) | 0;
										if (f) {
											t = f;
											c = B;
											return t | 0;
										}
										f = a[v >> 2] | 0;
										if (((f + 6) | 0) >>> 0 > 12) {
											t = 1;
											c = B;
											return t | 0;
										} else {
											a[(r + 60) >> 2] = f << 1;
											break;
										}
									}
								while (0);
								do
									if (
										(a[(n + 12) >> 2] | 0) >>> 0 > 1
											? (((a[(n + 16) >> 2] | 0) + -3) | 0) >>> 0 < 3
											: 0
									) {
										u = (n + 36) | 0;
										s = a[u >> 2] | 0;
										s =
											((((g >>> 0) % (s >>> 0) | 0 | 0) == 0 ? 1 : 2) +
												(((g >>> 0) / (s >>> 0)) | 0)) |
											0;
										o = 0;
										while (1) {
											f = (o + 1) | 0;
											if (!((-1 << f) & s)) break;
											else o = f;
										}
										f = Kr(e, ((((1 << o) + -1) & s) | 0) == 0 ? o : f) | 0;
										a[y >> 2] = f;
										if ((f | 0) == -1) {
											t = 1;
											c = B;
											return t | 0;
										}
										a[(r + 64) >> 2] = f;
										t = a[u >> 2] | 0;
										if (
											f >>> 0 >
											(((((g + -1 + t) | 0) >>> 0) / (t >>> 0)) | 0) >>> 0
										)
											w = 1;
										else break;
										c = B;
										return w | 0;
									}
								while (0);
								t = 0;
								c = B;
								return t | 0;
							}
							function Er(e, r) {
								e = e | 0;
								r = r | 0;
								var i = 0,
									n = 0,
									t = 0;
								t = c;
								c = (c + 32) | 0;
								n = (t + 20) | 0;
								i = t;
								a[(i + 0) >> 2] = a[(e + 0) >> 2];
								a[(i + 4) >> 2] = a[(e + 4) >> 2];
								a[(i + 8) >> 2] = a[(e + 8) >> 2];
								a[(i + 12) >> 2] = a[(e + 12) >> 2];
								a[(i + 16) >> 2] = a[(e + 16) >> 2];
								e = $r(i, n) | 0;
								if (!e) {
									e = $r(i, n) | 0;
									if (!e) {
										e = $r(i, n) | 0;
										if (!e) {
											e = a[n >> 2] | 0;
											if (e >>> 0 > 255) e = 1;
											else {
												a[r >> 2] = e;
												e = 0;
											}
										}
									}
								}
								c = t;
								return e | 0;
							}
							function Fr(e, r, i) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								var n = 0,
									t = 0,
									f = 0;
								f = c;
								c = (c + 32) | 0;
								n = (f + 20) | 0;
								t = f;
								a[(t + 0) >> 2] = a[(e + 0) >> 2];
								a[(t + 4) >> 2] = a[(e + 4) >> 2];
								a[(t + 8) >> 2] = a[(e + 8) >> 2];
								a[(t + 12) >> 2] = a[(e + 12) >> 2];
								a[(t + 16) >> 2] = a[(e + 16) >> 2];
								e = $r(t, n) | 0;
								if (e) {
									c = f;
									return e | 0;
								}
								e = $r(t, n) | 0;
								if (e) {
									c = f;
									return e | 0;
								}
								e = $r(t, n) | 0;
								if (!e) e = 0;
								else {
									c = f;
									return e | 0;
								}
								while (1)
									if (!(r >>> e)) break;
									else e = (e + 1) | 0;
								e = Kr(t, (e + -1) | 0) | 0;
								if ((e | 0) == -1) {
									e = 1;
									c = f;
									return e | 0;
								}
								a[i >> 2] = e;
								e = 0;
								c = f;
								return e | 0;
							}
							function Lr(e, r, i, n) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								n = n | 0;
								var t = 0,
									f = 0,
									o = 0;
								o = c;
								c = (c + 32) | 0;
								t = (o + 20) | 0;
								f = o;
								if ((i | 0) != 5) {
									i = 1;
									c = o;
									return i | 0;
								}
								a[(f + 0) >> 2] = a[(e + 0) >> 2];
								a[(f + 4) >> 2] = a[(e + 4) >> 2];
								a[(f + 8) >> 2] = a[(e + 8) >> 2];
								a[(f + 12) >> 2] = a[(e + 12) >> 2];
								a[(f + 16) >> 2] = a[(e + 16) >> 2];
								i = $r(f, t) | 0;
								if (i) {
									c = o;
									return i | 0;
								}
								i = $r(f, t) | 0;
								if (i) {
									c = o;
									return i | 0;
								}
								i = $r(f, t) | 0;
								if (!i) i = 0;
								else {
									c = o;
									return i | 0;
								}
								while (1)
									if (!(r >>> i)) break;
									else i = (i + 1) | 0;
								if ((Kr(f, (i + -1) | 0) | 0) == -1) {
									i = 1;
									c = o;
									return i | 0;
								}
								i = $r(f, n) | 0;
								c = o;
								return i | 0;
							}
							function Cr(e, r, i, n) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								n = n | 0;
								var t = 0,
									f = 0,
									o = 0,
									s = 0,
									u = 0;
								u = c;
								c = (c + 32) | 0;
								o = (u + 20) | 0;
								s = u;
								a[(s + 0) >> 2] = a[(e + 0) >> 2];
								a[(s + 4) >> 2] = a[(e + 4) >> 2];
								a[(s + 8) >> 2] = a[(e + 8) >> 2];
								a[(s + 12) >> 2] = a[(e + 12) >> 2];
								a[(s + 16) >> 2] = a[(e + 16) >> 2];
								e = $r(s, o) | 0;
								if (e) {
									t = e;
									c = u;
									return t | 0;
								}
								e = $r(s, o) | 0;
								if (e) {
									t = e;
									c = u;
									return t | 0;
								}
								e = $r(s, o) | 0;
								if (e) {
									t = e;
									c = u;
									return t | 0;
								}
								e = a[(r + 12) >> 2] | 0;
								t = 0;
								while (1)
									if (!(e >>> t)) break;
									else t = (t + 1) | 0;
								if ((Kr(s, (t + -1) | 0) | 0) == -1) {
									t = 1;
									c = u;
									return t | 0;
								}
								if ((i | 0) == 5 ? ((f = $r(s, o) | 0), (f | 0) != 0) : 0) {
									t = f;
									c = u;
									return t | 0;
								}
								t = a[(r + 20) >> 2] | 0;
								e = 0;
								while (1)
									if (!(t >>> e)) break;
									else e = (e + 1) | 0;
								t = Kr(s, (e + -1) | 0) | 0;
								if ((t | 0) == -1) {
									t = 1;
									c = u;
									return t | 0;
								}
								a[n >> 2] = t;
								t = 0;
								c = u;
								return t | 0;
							}
							function Dr(e, r, i, n) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								n = n | 0;
								var t = 0,
									f = 0,
									o = 0,
									s = 0,
									u = 0;
								u = c;
								c = (c + 32) | 0;
								o = (u + 20) | 0;
								s = u;
								a[(s + 0) >> 2] = a[(e + 0) >> 2];
								a[(s + 4) >> 2] = a[(e + 4) >> 2];
								a[(s + 8) >> 2] = a[(e + 8) >> 2];
								a[(s + 12) >> 2] = a[(e + 12) >> 2];
								a[(s + 16) >> 2] = a[(e + 16) >> 2];
								e = $r(s, o) | 0;
								if (e) {
									t = e;
									c = u;
									return t | 0;
								}
								e = $r(s, o) | 0;
								if (e) {
									t = e;
									c = u;
									return t | 0;
								}
								e = $r(s, o) | 0;
								if (e) {
									t = e;
									c = u;
									return t | 0;
								}
								e = a[(r + 12) >> 2] | 0;
								t = 0;
								while (1)
									if (!(e >>> t)) break;
									else t = (t + 1) | 0;
								if ((Kr(s, (t + -1) | 0) | 0) == -1) {
									t = 1;
									c = u;
									return t | 0;
								}
								if ((i | 0) == 5 ? ((f = $r(s, o) | 0), (f | 0) != 0) : 0) {
									t = f;
									c = u;
									return t | 0;
								}
								t = a[(r + 20) >> 2] | 0;
								e = 0;
								while (1)
									if (!(t >>> e)) break;
									else e = (e + 1) | 0;
								if ((Kr(s, (e + -1) | 0) | 0) == -1) {
									t = 1;
									c = u;
									return t | 0;
								}
								t = Xr(s, n) | 0;
								c = u;
								return t | 0;
							}
							function Pr(e, r, i, n, t) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								n = n | 0;
								t = t | 0;
								var f = 0,
									o = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0;
								b = c;
								c = (c + 32) | 0;
								s = (b + 20) | 0;
								l = b;
								a[(l + 0) >> 2] = a[(e + 0) >> 2];
								a[(l + 4) >> 2] = a[(e + 4) >> 2];
								a[(l + 8) >> 2] = a[(e + 8) >> 2];
								a[(l + 12) >> 2] = a[(e + 12) >> 2];
								a[(l + 16) >> 2] = a[(e + 16) >> 2];
								f = $r(l, s) | 0;
								if (f) {
									l = f;
									c = b;
									return l | 0;
								}
								f = $r(l, s) | 0;
								if (f) {
									l = f;
									c = b;
									return l | 0;
								}
								f = $r(l, s) | 0;
								if (f) {
									l = f;
									c = b;
									return l | 0;
								}
								f = a[(r + 12) >> 2] | 0;
								e = 0;
								while (1)
									if (!(f >>> e)) break;
									else e = (e + 1) | 0;
								if ((Kr(l, (e + -1) | 0) | 0) == -1) {
									l = 1;
									c = b;
									return l | 0;
								}
								if ((i | 0) == 5 ? ((o = $r(l, s) | 0), (o | 0) != 0) : 0) {
									l = o;
									c = b;
									return l | 0;
								}
								f = Xr(l, t) | 0;
								if (f) {
									l = f;
									c = b;
									return l | 0;
								}
								if (
									(n | 0) != 0
										? ((u = Xr(l, (t + 4) | 0) | 0), (u | 0) != 0)
										: 0
								) {
									l = u;
									c = b;
									return l | 0;
								}
								l = 0;
								c = b;
								return l | 0;
							}
							function Rr(e, r, i, n, t) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								n = n | 0;
								t = t | 0;
								var f = 0,
									o = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0,
									d = 0,
									h = 0;
								b = c;
								c = (c + 32) | 0;
								l = (b + 24) | 0;
								s = (b + 20) | 0;
								u = b;
								a[(u + 0) >> 2] = a[(r + 0) >> 2];
								a[(u + 4) >> 2] = a[(r + 4) >> 2];
								a[(u + 8) >> 2] = a[(r + 8) >> 2];
								a[(u + 12) >> 2] = a[(r + 12) >> 2];
								a[(u + 16) >> 2] = a[(r + 16) >> 2];
								t = $r(u, l) | 0;
								if (t) {
									d = t;
									c = b;
									return d | 0;
								}
								t = $r(u, l) | 0;
								if (t) {
									d = t;
									c = b;
									return d | 0;
								}
								t = $r(u, l) | 0;
								if (t) {
									d = t;
									c = b;
									return d | 0;
								}
								t = a[(i + 12) >> 2] | 0;
								r = 0;
								while (1)
									if (!(t >>> r)) break;
									else r = (r + 1) | 0;
								if ((Kr(u, (r + -1) | 0) | 0) == -1) {
									d = 1;
									c = b;
									return d | 0;
								}
								t = $r(u, l) | 0;
								if (t) {
									d = t;
									c = b;
									return d | 0;
								}
								f = (i + 16) | 0;
								t = a[f >> 2] | 0;
								if (!t) {
									r = a[(i + 20) >> 2] | 0;
									t = 0;
									while (1)
										if (!(r >>> t)) break;
										else t = (t + 1) | 0;
									if ((Kr(u, (t + -1) | 0) | 0) == -1) {
										d = 1;
										c = b;
										return d | 0;
									}
									if (
										(a[(n + 8) >> 2] | 0) != 0
											? ((o = Xr(u, s) | 0), (o | 0) != 0)
											: 0
									) {
										d = o;
										c = b;
										return d | 0;
									}
									t = a[f >> 2] | 0;
								}
								if ((t | 0) == 1 ? (a[(i + 24) >> 2] | 0) == 0 : 0) {
									t = Xr(u, s) | 0;
									if (t) {
										d = t;
										c = b;
										return d | 0;
									}
									if (
										(a[(n + 8) >> 2] | 0) != 0
											? ((d = Xr(u, s) | 0), (d | 0) != 0)
											: 0
									) {
										c = b;
										return d | 0;
									}
								}
								if (
									(a[(n + 68) >> 2] | 0) != 0
										? ((h = $r(u, l) | 0), (h | 0) != 0)
										: 0
								) {
									d = h;
									c = b;
									return d | 0;
								}
								d = Kr(u, 1) | 0;
								a[e >> 2] = d;
								d = ((d | 0) == -1) & 1;
								c = b;
								return d | 0;
							}
							function Or(e, r, i, n) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								n = n | 0;
								var t = 0,
									f = 0,
									o = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0,
									g = 0,
									y = 0,
									B = 0,
									A = 0,
									U = 0,
									S = 0,
									_ = 0,
									M = 0,
									E = 0,
									F = 0,
									L = 0,
									C = 0;
								E = c;
								c = (c + 448) | 0;
								p = (E + 8) | 0;
								A = (E + 4) | 0;
								y = E;
								p = (p + ((0 - p) & 15)) | 0;
								d = a[(r + 3376) >> 2] | 0;
								s = a[n >> 2] | 0;
								a[A >> 2] = 0;
								U = (r + 1192) | 0;
								a[U >> 2] = (a[U >> 2] | 0) + 1;
								k = (r + 1200) | 0;
								a[k >> 2] = 0;
								h = (r + 12) | 0;
								a[y >> 2] =
									(a[(n + 48) >> 2] | 0) + (a[((a[h >> 2] | 0) + 52) >> 2] | 0);
								B = (n + 36) | 0;
								w = (r + 1212) | 0;
								m = (n + 52) | 0;
								v = (n + 56) | 0;
								g = (n + 60) | 0;
								S = (n + 4) | 0;
								l = (n + 44) | 0;
								o = (r + 1220) | 0;
								b = (r + 1172) | 0;
								M = (r + 1176) | 0;
								u = (d + 12) | 0;
								_ = 0;
								t = 0;
								while (1) {
									n = a[w >> 2] | 0;
									if (
										(a[B >> 2] | 0) == 0
											? (a[(n + ((s * 216) | 0) + 196) >> 2] | 0) != 0
											: 0
									) {
										t = 1;
										n = 22;
										break;
									}
									f = a[((a[h >> 2] | 0) + 56) >> 2] | 0;
									C = a[m >> 2] | 0;
									L = a[v >> 2] | 0;
									F = a[g >> 2] | 0;
									a[(n + ((s * 216) | 0) + 4) >> 2] = a[U >> 2];
									a[(n + ((s * 216) | 0) + 8) >> 2] = C;
									a[(n + ((s * 216) | 0) + 12) >> 2] = L;
									a[(n + ((s * 216) | 0) + 16) >> 2] = F;
									a[(n + ((s * 216) | 0) + 24) >> 2] = f;
									n = a[S >> 2] | 0;
									if ((n | 0) != 2 ? !(((n | 0) == 7) | ((t | 0) != 0)) : 0) {
										t = $r(e, A) | 0;
										if (t) {
											n = 22;
											break;
										}
										n = a[A >> 2] | 0;
										if (n >>> 0 > (((a[M >> 2] | 0) - s) | 0) >>> 0) {
											t = 1;
											n = 22;
											break;
										}
										if (!n) t = 0;
										else {
											cn(u, 0, 164);
											a[d >> 2] = 0;
											t = 1;
										}
									}
									n = a[A >> 2] | 0;
									if (!n) {
										t =
											Tr(
												e,
												d,
												((a[w >> 2] | 0) + ((s * 216) | 0)) | 0,
												a[S >> 2] | 0,
												a[l >> 2] | 0
											) | 0;
										if (!t) f = 0;
										else {
											n = 22;
											break;
										}
									} else {
										a[A >> 2] = n + -1;
										f = t;
									}
									t =
										Hr(
											((a[w >> 2] | 0) + ((s * 216) | 0)) | 0,
											d,
											i,
											o,
											y,
											s,
											a[((a[h >> 2] | 0) + 64) >> 2] | 0,
											p
										) | 0;
									if (t) {
										n = 22;
										break;
									}
									_ =
										((((a[((a[w >> 2] | 0) + ((s * 216) | 0) + 196) >> 2] |
											0) ==
											1) &
											1) +
											_) |
										0;
									if (!(vr(e) | 0)) n = (a[A >> 2] | 0) != 0;
									else n = 1;
									t = a[S >> 2] | 0;
									if (((t | 0) == 7) | ((t | 0) == 2)) a[k >> 2] = s;
									s = gr(a[b >> 2] | 0, a[M >> 2] | 0, s) | 0;
									if (!(((s | 0) != 0) | (n ^ 1))) {
										t = 1;
										n = 22;
										break;
									}
									if (!n) {
										n = 20;
										break;
									} else t = f;
								}
								if ((n | 0) == 20) {
									n = (r + 1196) | 0;
									t = ((a[n >> 2] | 0) + _) | 0;
									if (t >>> 0 > (a[M >> 2] | 0) >>> 0) {
										U = 1;
										c = E;
										return U | 0;
									}
									a[n >> 2] = t;
									U = 0;
									c = E;
									return U | 0;
								} else if ((n | 0) == 22) {
									c = E;
									return t | 0;
								}
								return 0;
							}
							function Ir(e, r) {
								e = e | 0;
								r = r | 0;
								var i = 0,
									n = 0,
									t = 0,
									f = 0,
									o = 0,
									s = 0,
									u = 0;
								u = c;
								o = a[(e + 1192) >> 2] | 0;
								i = a[(e + 1200) >> 2] | 0;
								s = (e + 1212) | 0;
								e: do
									if (!i) i = r;
									else {
										n = (e + 16) | 0;
										t = 0;
										do {
											do {
												i = (i + -1) | 0;
												if (i >>> 0 <= r >>> 0) break e;
											} while (
												(a[((a[s >> 2] | 0) + ((i * 216) | 0) + 4) >> 2] | 0) !=
												(o | 0)
											);
											t = (t + 1) | 0;
											f = a[((a[n >> 2] | 0) + 52) >> 2] | 0;
										} while (t >>> 0 < (f >>> 0 > 10 ? f : 10) >>> 0);
									}
								while (0);
								f = (e + 1172) | 0;
								r = (e + 1176) | 0;
								while (1) {
									n = a[s >> 2] | 0;
									if ((a[(n + ((i * 216) | 0) + 4) >> 2] | 0) != (o | 0)) {
										i = 11;
										break;
									}
									t = (n + ((i * 216) | 0) + 196) | 0;
									n = a[t >> 2] | 0;
									if (!n) {
										i = 11;
										break;
									}
									a[t >> 2] = n + -1;
									i = gr(a[f >> 2] | 0, a[r >> 2] | 0, i) | 0;
									if (!i) {
										i = 11;
										break;
									}
								}
								if ((i | 0) == 11) {
									c = u;
									return;
								}
							}
							function Tr(e, r, i, n, f) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								n = n | 0;
								f = f | 0;
								var o = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0,
									g = 0,
									y = 0,
									B = 0,
									A = 0,
									U = 0,
									S = 0,
									_ = 0,
									M = 0;
								M = c;
								c = (c + 32) | 0;
								g = (M + 20) | 0;
								y = (M + 16) | 0;
								k = (M + 12) | 0;
								p = (M + 8) | 0;
								S = (M + 4) | 0;
								U = M;
								cn(r, 0, 2088);
								l = $r(e, S) | 0;
								b = a[S >> 2] | 0;
								do
									if (((n | 0) == 2) | ((n | 0) == 7)) {
										b = (b + 6) | 0;
										if ((b >>> 0 > 31) | ((l | 0) != 0)) {
											i = 1;
											c = M;
											return i | 0;
										} else {
											a[r >> 2] = b;
											h = b;
											break;
										}
									} else {
										b = (b + 1) | 0;
										if ((b >>> 0 > 31) | ((l | 0) != 0)) {
											i = 1;
											c = M;
											return i | 0;
										} else {
											a[r >> 2] = b;
											h = b;
											break;
										}
									}
								while (0);
								e: do
									if ((h | 0) != 31) {
										r: do
											if (h >>> 0 >= 6) {
												h = (h | 0) != 6;
												p = h & 1;
												if (!p) {
													a[y >> 2] = 0;
													k = 0;
													while (1) {
														n = Vr(e) | 0;
														a[g >> 2] = n;
														v = n >>> 31;
														a[(r + (k << 2) + 12) >> 2] = v;
														if (!v) {
															a[(r + (k << 2) + 76) >> 2] = (n >>> 28) & 7;
															b = n << 4;
															d = 1;
														} else {
															b = n << 1;
															d = 0;
														}
														n = k | 1;
														v = b >>> 31;
														a[(r + (n << 2) + 12) >> 2] = v;
														if (!v) {
															a[(r + (n << 2) + 76) >> 2] = (b >>> 28) & 7;
															l = b << 4;
															d = (d + 1) | 0;
														} else l = b << 1;
														b = (n + 1) | 0;
														v = l >>> 31;
														a[(r + (b << 2) + 12) >> 2] = v;
														if (!v) {
															a[(r + (b << 2) + 76) >> 2] = (l >>> 28) & 7;
															b = l << 4;
															d = (d + 1) | 0;
														} else b = l << 1;
														l = k | 3;
														v = b >>> 31;
														a[(r + (l << 2) + 12) >> 2] = v;
														if (!v) {
															a[(r + (l << 2) + 76) >> 2] = (b >>> 28) & 7;
															n = b << 4;
															d = (d + 1) | 0;
														} else n = b << 1;
														b = (l + 1) | 0;
														v = n >>> 31;
														a[(r + (b << 2) + 12) >> 2] = v;
														if (!v) {
															a[(r + (b << 2) + 76) >> 2] = (n >>> 28) & 7;
															n = n << 4;
															d = (d + 1) | 0;
														} else n = n << 1;
														b = (l + 2) | 0;
														v = n >>> 31;
														a[(r + (b << 2) + 12) >> 2] = v;
														if (!v) {
															a[(r + (b << 2) + 76) >> 2] = (n >>> 28) & 7;
															n = n << 4;
															d = (d + 1) | 0;
														} else n = n << 1;
														b = (l + 3) | 0;
														v = n >>> 31;
														a[(r + (b << 2) + 12) >> 2] = v;
														if (!v) {
															a[(r + (b << 2) + 76) >> 2] = (n >>> 28) & 7;
															n = n << 4;
															d = (d + 1) | 0;
														} else n = n << 1;
														b = k | 7;
														v = n >>> 31;
														a[(r + (b << 2) + 12) >> 2] = v;
														if (!v) {
															a[(r + (b << 2) + 76) >> 2] = (n >>> 28) & 7;
															b = n << 4;
															d = (d + 1) | 0;
														} else b = n << 1;
														a[g >> 2] = b;
														if ((Gr(e, (((d * 3) | 0) + 8) | 0) | 0) == -1) {
															B = 1;
															v = 68;
															break r;
														}
														v = ((a[y >> 2] | 0) + 1) | 0;
														a[y >> 2] = v;
														if ((v | 0) < 2) k = (k + 8) | 0;
														else {
															v = 52;
															break;
														}
													}
												} else if ((p | 0) == 1) v = 52;
												if ((v | 0) == 52) {
													y = ($r(e, g) | 0) != 0;
													l = a[g >> 2] | 0;
													if (y | (l >>> 0 > 3)) {
														B = 1;
														v = 68;
														break;
													}
													a[(r + 140) >> 2] = l;
												}
												if (h) {
													y = a[r >> 2] | 0;
													m = (y + -7) | 0;
													g = m >>> 2;
													a[(r + 4) >> 2] =
														((m >>> 0 > 11 ? (g + 268435453) | 0 : g) << 4) |
														(y >>> 0 > 18 ? 15 : 0);
												} else {
													A = p;
													v = 70;
												}
											} else {
												if (((h | 0) == 0) | ((h | 0) == 1)) {
													w = y;
													m = g;
												} else if (!(((h | 0) == 3) | ((h | 0) == 2))) {
													n = 0;
													do {
														l = ($r(e, k) | 0) != 0;
														b = a[k >> 2] | 0;
														if (l | (b >>> 0 > 3)) {
															d = 1;
															v = 96;
															break;
														}
														a[(r + (n << 2) + 176) >> 2] = b;
														n = (n + 1) | 0;
													} while (n >>> 0 < 4);
													if ((v | 0) == 96) {
														c = M;
														return d | 0;
													}
													i: do
														if ((f >>> 0 > 1) & ((h | 0) != 5)) {
															b = (f >>> 0 > 2) & 1;
															n = 0;
															while (1) {
																if (Jr(e, k, b) | 0) {
																	d = 1;
																	v = 96;
																	break;
																}
																d = a[k >> 2] | 0;
																if (d >>> 0 >= f >>> 0) {
																	d = 1;
																	v = 96;
																	break;
																}
																a[(r + (n << 2) + 192) >> 2] = d;
																n = (n + 1) | 0;
																if (n >>> 0 >= 4) {
																	o = 0;
																	break i;
																}
															}
															if ((v | 0) == 96) {
																c = M;
																return d | 0;
															}
														} else o = 0;
													while (0);
													i: while (1) {
														d = a[(r + (o << 2) + 176) >> 2] | 0;
														if (!d) d = 0;
														else if (((d | 0) == 2) | ((d | 0) == 1)) d = 1;
														else d = 3;
														a[k >> 2] = d;
														b = 0;
														while (1) {
															d = Xr(e, p) | 0;
															if (d) {
																v = 96;
																break i;
															}
															t[(r + (o << 4) + (b << 2) + 208) >> 1] =
																a[p >> 2];
															d = Xr(e, p) | 0;
															if (d) {
																v = 96;
																break i;
															}
															t[(r + (o << 4) + (b << 2) + 210) >> 1] =
																a[p >> 2];
															v = a[k >> 2] | 0;
															a[k >> 2] = v + -1;
															if (!v) break;
															else b = (b + 1) | 0;
														}
														o = (o + 1) | 0;
														if (o >>> 0 >= 4) {
															A = 2;
															v = 70;
															break r;
														}
													}
													if ((v | 0) == 96) {
														c = M;
														return d | 0;
													}
												} else {
													w = y;
													m = g;
												}
												if (f >>> 0 > 1) {
													if (((h | 0) == 0) | ((h | 0) == 1)) d = 0;
													else if (((h | 0) == 3) | ((h | 0) == 2)) d = 1;
													else d = 3;
													l = (f >>> 0 > 2) & 1;
													n = 0;
													while (1) {
														if (Jr(e, g, l) | 0) {
															B = 1;
															v = 68;
															break r;
														}
														b = a[g >> 2] | 0;
														if (b >>> 0 >= f >>> 0) {
															B = 1;
															v = 68;
															break r;
														}
														a[(r + (n << 2) + 144) >> 2] = b;
														if (!d) break;
														else {
															d = (d + -1) | 0;
															n = (n + 1) | 0;
														}
													}
												}
												if (((h | 0) == 0) | ((h | 0) == 1)) {
													l = 0;
													b = 0;
												} else if (((h | 0) == 3) | ((h | 0) == 2)) {
													l = 1;
													b = 0;
												} else {
													l = 3;
													b = 0;
												}
												while (1) {
													n = Xr(e, y) | 0;
													if (n) {
														B = n;
														v = 68;
														break r;
													}
													t[(r + (b << 2) + 160) >> 1] = a[y >> 2];
													n = Xr(e, y) | 0;
													if (n) {
														B = n;
														v = 68;
														break r;
													}
													t[(r + (b << 2) + 162) >> 1] = a[y >> 2];
													if (!l) {
														A = 2;
														v = 70;
														break;
													} else {
														l = (l + -1) | 0;
														b = (b + 1) | 0;
													}
												}
											}
										while (0);
										if ((v | 0) == 68) {
											i = B;
											c = M;
											return i | 0;
										}
										do
											if ((v | 0) == 70) {
												o = Wr(e, S, ((A | 0) == 0) & 1) | 0;
												if (!o) {
													S = a[S >> 2] | 0;
													a[(r + 4) >> 2] = S;
													if (!S) break e;
													else break;
												} else {
													i = o;
													c = M;
													return i | 0;
												}
											}
										while (0);
										S = (Xr(e, U) | 0) != 0;
										o = a[U >> 2] | 0;
										if (S | ((o | 0) < -26) | ((o | 0) > 25)) {
											i = 1;
											c = M;
											return i | 0;
										}
										a[(r + 8) >> 2] = o;
										l = a[(r + 4) >> 2] | 0;
										h = (r + 272) | 0;
										r: do
											if ((a[r >> 2] | 0) >>> 0 >= 7) {
												o = Qr(e, (r + 1864) | 0, Yr(i, 0, h) | 0, 16) | 0;
												if (!(o & 15)) {
													t[(r + 320) >> 1] = (o >>> 4) & 255;
													o = 0;
													b = 3;
													while (1) {
														d = l >>> 1;
														if (!(l & 1)) o = (o + 4) | 0;
														else {
															n = 3;
															while (1) {
																l =
																	Qr(
																		e,
																		(r + (o << 6) + 332) | 0,
																		Yr(i, o, h) | 0,
																		15
																	) | 0;
																a[(r + (o << 2) + 1992) >> 2] = l >>> 15;
																if (l & 15) {
																	s = l;
																	break r;
																}
																t[(r + (o << 1) + 272) >> 1] = (l >>> 4) & 255;
																o = (o + 1) | 0;
																if (!n) break;
																else n = (n + -1) | 0;
															}
														}
														if (!b) {
															u = o;
															_ = d;
															v = 87;
															break;
														} else {
															l = d;
															b = (b + -1) | 0;
														}
													}
												} else s = o;
											} else {
												o = 0;
												b = 3;
												while (1) {
													d = l >>> 1;
													if (!(l & 1)) o = (o + 4) | 0;
													else {
														n = 3;
														while (1) {
															l =
																Qr(
																	e,
																	(r + (o << 6) + 328) | 0,
																	Yr(i, o, h) | 0,
																	16
																) | 0;
															a[(r + (o << 2) + 1992) >> 2] = l >>> 16;
															if (l & 15) {
																s = l;
																break r;
															}
															t[(r + (o << 1) + 272) >> 1] = (l >>> 4) & 255;
															o = (o + 1) | 0;
															if (!n) break;
															else n = (n + -1) | 0;
														}
													}
													if (!b) {
														u = o;
														_ = d;
														v = 87;
														break;
													} else {
														l = d;
														b = (b + -1) | 0;
													}
												}
											}
										while (0);
										r: do
											if ((v | 0) == 87) {
												if (_ & 3) {
													s = Qr(e, (r + 1928) | 0, -1, 4) | 0;
													if (s & 15) break;
													t[(r + 322) >> 1] = (s >>> 4) & 255;
													s = Qr(e, (r + 1944) | 0, -1, 4) | 0;
													if (s & 15) break;
													t[(r + 324) >> 1] = (s >>> 4) & 255;
												}
												if (!(_ & 2)) s = 0;
												else {
													o = 7;
													while (1) {
														s =
															Qr(
																e,
																(r + (u << 6) + 332) | 0,
																Yr(i, u, h) | 0,
																15
															) | 0;
														if (s & 15) break r;
														t[(r + (u << 1) + 272) >> 1] = (s >>> 4) & 255;
														a[(r + (u << 2) + 1992) >> 2] = s >>> 15;
														if (!o) {
															s = 0;
															break;
														} else {
															u = (u + 1) | 0;
															o = (o + -1) | 0;
														}
													}
												}
											}
										while (0);
										a[(e + 16) >> 2] =
											(((a[(e + 4) >> 2] | 0) - (a[e >> 2] | 0)) << 3) +
											(a[(e + 8) >> 2] | 0);
										if (s) {
											i = s;
											c = M;
											return i | 0;
										}
									} else {
										while (1) {
											if (Zr(e) | 0) break;
											if (Kr(e, 1) | 0) {
												d = 1;
												v = 96;
												break;
											}
										}
										if ((v | 0) == 96) {
											c = M;
											return d | 0;
										}
										u = 0;
										s = (r + 328) | 0;
										while (1) {
											o = Kr(e, 8) | 0;
											a[S >> 2] = o;
											if ((o | 0) == -1) {
												d = 1;
												break;
											}
											a[s >> 2] = o;
											u = (u + 1) | 0;
											if (u >>> 0 >= 384) break e;
											else s = (s + 4) | 0;
										}
										c = M;
										return d | 0;
									}
								while (0);
								i = 0;
								c = M;
								return i | 0;
							}
							function zr(e) {
								e = e | 0;
								if (e >>> 0 < 6) e = 2;
								else e = ((e | 0) != 6) & 1;
								return e | 0;
							}
							function Nr(e) {
								e = e | 0;
								var r = 0;
								r = c;
								if (((e | 0) == 0) | ((e | 0) == 1)) e = 1;
								else if (((e | 0) == 3) | ((e | 0) == 2)) e = 2;
								else e = 4;
								c = r;
								return e | 0;
							}
							function xr(e) {
								e = e | 0;
								var r = 0;
								r = c;
								if (!e) e = 1;
								else if (((e | 0) == 2) | ((e | 0) == 1)) e = 2;
								else e = 4;
								c = r;
								return e | 0;
							}
							function jr(e) {
								e = e | 0;
								return ((e + 1) & 3) | 0;
							}
							function Hr(e, r, i, f, o, s, u, l) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								f = f | 0;
								o = o | 0;
								s = s | 0;
								u = u | 0;
								l = l | 0;
								var b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0,
									g = 0,
									y = 0;
								y = c;
								m = a[r >> 2] | 0;
								a[e >> 2] = m;
								h = (e + 196) | 0;
								a[h >> 2] = (a[h >> 2] | 0) + 1;
								yr(i, s);
								if ((m | 0) == 31) {
									b = (e + 28) | 0;
									a[(e + 20) >> 2] = 0;
									if ((a[h >> 2] | 0) >>> 0 > 1) {
										t[b >> 1] = 16;
										t[(e + 30) >> 1] = 16;
										t[(e + 32) >> 1] = 16;
										t[(e + 34) >> 1] = 16;
										t[(e + 36) >> 1] = 16;
										t[(e + 38) >> 1] = 16;
										t[(e + 40) >> 1] = 16;
										t[(e + 42) >> 1] = 16;
										t[(e + 44) >> 1] = 16;
										t[(e + 46) >> 1] = 16;
										t[(e + 48) >> 1] = 16;
										t[(e + 50) >> 1] = 16;
										t[(e + 52) >> 1] = 16;
										t[(e + 54) >> 1] = 16;
										t[(e + 56) >> 1] = 16;
										t[(e + 58) >> 1] = 16;
										t[(e + 60) >> 1] = 16;
										t[(e + 62) >> 1] = 16;
										t[(e + 64) >> 1] = 16;
										t[(e + 66) >> 1] = 16;
										t[(e + 68) >> 1] = 16;
										t[(e + 70) >> 1] = 16;
										t[(e + 72) >> 1] = 16;
										t[(e + 74) >> 1] = 16;
										v = 0;
										c = y;
										return v | 0;
									}
									h = 23;
									o = (r + 328) | 0;
									d = l;
									while (1) {
										t[b >> 1] = 16;
										n[d >> 0] = a[o >> 2];
										n[(d + 1) >> 0] = a[(o + 4) >> 2];
										n[(d + 2) >> 0] = a[(o + 8) >> 2];
										n[(d + 3) >> 0] = a[(o + 12) >> 2];
										n[(d + 4) >> 0] = a[(o + 16) >> 2];
										n[(d + 5) >> 0] = a[(o + 20) >> 2];
										n[(d + 6) >> 0] = a[(o + 24) >> 2];
										n[(d + 7) >> 0] = a[(o + 28) >> 2];
										n[(d + 8) >> 0] = a[(o + 32) >> 2];
										n[(d + 9) >> 0] = a[(o + 36) >> 2];
										n[(d + 10) >> 0] = a[(o + 40) >> 2];
										n[(d + 11) >> 0] = a[(o + 44) >> 2];
										n[(d + 12) >> 0] = a[(o + 48) >> 2];
										n[(d + 13) >> 0] = a[(o + 52) >> 2];
										n[(d + 14) >> 0] = a[(o + 56) >> 2];
										n[(d + 15) >> 0] = a[(o + 60) >> 2];
										if (!h) break;
										else {
											h = (h + -1) | 0;
											o = (o + 64) | 0;
											d = (d + 16) | 0;
											b = (b + 2) | 0;
										}
									}
									er(i, l);
									v = 0;
									c = y;
									return v | 0;
								}
								b = (e + 28) | 0;
								if (m) {
									ln(b, (r + 272) | 0, 54);
									d = a[(r + 8) >> 2] | 0;
									h = a[o >> 2] | 0;
									do
										if (d) {
											h = (h + d) | 0;
											a[o >> 2] = h;
											if ((h | 0) < 0) {
												h = (h + 52) | 0;
												a[o >> 2] = h;
												break;
											}
											if ((h | 0) > 51) {
												h = (h + -52) | 0;
												a[o >> 2] = h;
											}
										}
									while (0);
									w = (e + 20) | 0;
									a[w >> 2] = h;
									d = (r + 328) | 0;
									o = (r + 1992) | 0;
									e: do
										if ((a[e >> 2] | 0) >>> 0 < 7) {
											k = 15;
											h = b;
											while (1) {
												if (t[h >> 1] | 0) {
													if (hr(d, a[w >> 2] | 0, 0, a[o >> 2] | 0) | 0) {
														b = 1;
														break;
													}
												} else a[d >> 2] = 16777215;
												d = (d + 64) | 0;
												h = (h + 2) | 0;
												o = (o + 4) | 0;
												if (!k) break e;
												else k = (k + -1) | 0;
											}
											c = y;
											return b | 0;
										} else {
											if (!(t[(e + 76) >> 1] | 0)) {
												k = 464;
												p = 15;
												h = b;
											} else {
												pr((r + 1864) | 0, h);
												k = 464;
												p = 15;
												h = b;
											}
											while (1) {
												b = a[(r + (a[k >> 2] << 2) + 1864) >> 2] | 0;
												k = (k + 4) | 0;
												a[d >> 2] = b;
												if ((b | 0) == 0 ? (t[h >> 1] | 0) == 0 : 0)
													a[d >> 2] = 16777215;
												else g = 18;
												if (
													(g | 0) == 18
														? ((g = 0),
														  (hr(d, a[w >> 2] | 0, 1, a[o >> 2] | 0) | 0) != 0)
														: 0
												) {
													b = 1;
													break;
												}
												d = (d + 64) | 0;
												h = (h + 2) | 0;
												o = (o + 4) | 0;
												if (!p) break e;
												else p = (p + -1) | 0;
											}
											c = y;
											return b | 0;
										}
									while (0);
									k =
										a[
											(192 +
												((Br(
													0,
													51,
													((a[(e + 24) >> 2] | 0) + (a[w >> 2] | 0)) | 0
												) |
													0) <<
													2)) >>
												2
										] | 0;
									if (
										(t[(e + 78) >> 1] | 0) == 0
											? (t[(e + 80) >> 1] | 0) == 0
											: 0
									) {
										p = (r + 1928) | 0;
										b = 7;
									} else {
										p = (r + 1928) | 0;
										kr(p, k);
										b = 7;
									}
									while (1) {
										w = a[p >> 2] | 0;
										p = (p + 4) | 0;
										a[d >> 2] = w;
										if ((w | 0) == 0 ? (t[h >> 1] | 0) == 0 : 0)
											a[d >> 2] = 16777215;
										else g = 31;
										if (
											(g | 0) == 31
												? ((g = 0), (hr(d, k, 1, a[o >> 2] | 0) | 0) != 0)
												: 0
										) {
											b = 1;
											g = 39;
											break;
										}
										if (!b) break;
										else {
											d = (d + 64) | 0;
											o = (o + 4) | 0;
											b = (b + -1) | 0;
											h = (h + 2) | 0;
										}
									}
									if ((g | 0) == 39) {
										c = y;
										return b | 0;
									}
									if (m >>> 0 >= 6) {
										h = gi(e, r, i, s, u, l) | 0;
										if (h) {
											v = h;
											c = y;
											return v | 0;
										}
									} else g = 37;
								} else {
									cn(b, 0, 54);
									a[(e + 20) >> 2] = a[o >> 2];
									g = 37;
								}
								if (
									(g | 0) == 37
										? ((v = _e(e, r, f, s, i, l) | 0), (v | 0) != 0)
										: 0
								) {
									c = y;
									return v | 0;
								}
								v = 0;
								c = y;
								return v | 0;
							}
							function qr(e) {
								e = e | 0;
								return e | 0;
							}
							function Yr(e, r, i) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								var f = 0,
									o = 0,
									s = 0,
									u = 0,
									l = 0;
								u = c;
								l = ni(r) | 0;
								f = ti(r) | 0;
								o = n[(l + 4) >> 0] | 0;
								s = n[(f + 4) >> 0] | 0;
								f = (a[f >> 2] | 0) == 4;
								if ((a[l >> 2] | 0) == 4) {
									r = t[(i + ((o & 255) << 1)) >> 1] | 0;
									if (f) {
										r = (r + 1 + (t[(i + ((s & 255) << 1)) >> 1] | 0)) >> 1;
										c = u;
										return r | 0;
									}
									f = (e + 204) | 0;
									if (!(oi(e, a[f >> 2] | 0) | 0)) {
										c = u;
										return r | 0;
									}
									r =
										(r +
											1 +
											(t[((a[f >> 2] | 0) + ((s & 255) << 1) + 28) >> 1] |
												0)) >>
										1;
									c = u;
									return r | 0;
								}
								if (f) {
									r = t[(i + ((s & 255) << 1)) >> 1] | 0;
									f = (e + 200) | 0;
									if (!(oi(e, a[f >> 2] | 0) | 0)) {
										c = u;
										return r | 0;
									}
									r =
										(r +
											1 +
											(t[((a[f >> 2] | 0) + ((o & 255) << 1) + 28) >> 1] |
												0)) >>
										1;
									c = u;
									return r | 0;
								}
								f = (e + 200) | 0;
								if (!(oi(e, a[f >> 2] | 0) | 0)) {
									o = 0;
									i = 0;
								} else {
									o = t[((a[f >> 2] | 0) + ((o & 255) << 1) + 28) >> 1] | 0;
									i = 1;
								}
								f = (e + 204) | 0;
								if (!(oi(e, a[f >> 2] | 0) | 0)) {
									r = o;
									c = u;
									return r | 0;
								}
								r = t[((a[f >> 2] | 0) + ((s & 255) << 1) + 28) >> 1] | 0;
								if (!i) {
									c = u;
									return r | 0;
								}
								r = (o + 1 + r) >> 1;
								c = u;
								return r | 0;
							}
							function Kr(e, r) {
								e = e | 0;
								r = r | 0;
								var i = 0,
									n = 0,
									t = 0,
									o = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0;
								p = c;
								d = (e + 4) | 0;
								s = a[d >> 2] | 0;
								b = a[(e + 12) >> 2] << 3;
								h = (e + 16) | 0;
								l = a[h >> 2] | 0;
								t = (b - l) | 0;
								if ((t | 0) > 31) {
									i = (e + 8) | 0;
									t = a[i >> 2] | 0;
									n =
										((f[(s + 1) >> 0] | 0) << 16) |
										((f[s >> 0] | 0) << 24) |
										((f[(s + 2) >> 0] | 0) << 8) |
										(f[(s + 3) >> 0] | 0);
									if (!t) o = i;
									else {
										o = i;
										n = ((f[(s + 4) >> 0] | 0) >>> ((8 - t) | 0)) | (n << t);
									}
								} else {
									o = (e + 8) | 0;
									if ((t | 0) > 0) {
										i = a[o >> 2] | 0;
										u = (i + 24) | 0;
										n = (f[s >> 0] | 0) << u;
										t = (t + -8 + i) | 0;
										if ((t | 0) > 0) {
											i = t;
											t = u;
											do {
												s = (s + 1) | 0;
												t = (t + -8) | 0;
												n = ((f[s >> 0] | 0) << t) | n;
												i = (i + -8) | 0;
											} while ((i | 0) > 0);
										}
									} else n = 0;
								}
								i = (l + r) | 0;
								a[h >> 2] = i;
								a[o >> 2] = i & 7;
								if (i >>> 0 > b >>> 0) {
									d = -1;
									c = p;
									return d | 0;
								}
								a[d >> 2] = (a[e >> 2] | 0) + (i >>> 3);
								d = n >>> ((32 - r) | 0);
								c = p;
								return d | 0;
							}
							function Vr(e) {
								e = e | 0;
								var r = 0,
									i = 0,
									n = 0,
									t = 0,
									o = 0;
								t = c;
								n = a[(e + 4) >> 2] | 0;
								i = ((a[(e + 12) >> 2] << 3) - (a[(e + 16) >> 2] | 0)) | 0;
								if ((i | 0) > 31) {
									r = a[(e + 8) >> 2] | 0;
									e =
										((f[(n + 1) >> 0] | 0) << 16) |
										((f[n >> 0] | 0) << 24) |
										((f[(n + 2) >> 0] | 0) << 8) |
										(f[(n + 3) >> 0] | 0);
									if (!r) {
										r = e;
										c = t;
										return r | 0;
									}
									r = ((f[(n + 4) >> 0] | 0) >>> ((8 - r) | 0)) | (e << r);
									c = t;
									return r | 0;
								}
								if ((i | 0) <= 0) {
									r = 0;
									c = t;
									return r | 0;
								}
								o = a[(e + 8) >> 2] | 0;
								e = (o + 24) | 0;
								r = (f[n >> 0] | 0) << e;
								i = (i + -8 + o) | 0;
								if ((i | 0) <= 0) {
									c = t;
									return r | 0;
								}
								do {
									n = (n + 1) | 0;
									e = (e + -8) | 0;
									r = ((f[n >> 0] | 0) << e) | r;
									i = (i + -8) | 0;
								} while ((i | 0) > 0);
								c = t;
								return r | 0;
							}
							function Gr(e, r) {
								e = e | 0;
								r = r | 0;
								var i = 0,
									n = 0;
								i = c;
								n = (e + 16) | 0;
								r = ((a[n >> 2] | 0) + r) | 0;
								a[n >> 2] = r;
								a[(e + 8) >> 2] = r & 7;
								if (r >>> 0 > (a[(e + 12) >> 2] << 3) >>> 0) {
									r = -1;
									c = i;
									return r | 0;
								}
								a[(e + 4) >> 2] = (a[e >> 2] | 0) + (r >>> 3);
								r = 0;
								c = i;
								return r | 0;
							}
							function Zr(e) {
								e = e | 0;
								return ((a[(e + 8) >> 2] | 0) == 0) | 0;
							}
							function $r(e, r) {
								e = e | 0;
								r = r | 0;
								var i = 0,
									n = 0,
									t = 0,
									f = 0;
								f = c;
								i = Vr(e) | 0;
								do
									if ((i | 0) >= 0) {
										if (i >>> 0 > 1073741823) {
											if ((Gr(e, 3) | 0) == -1) {
												i = 1;
												break;
											}
											a[r >> 2] = ((i >>> 29) & 1) + 1;
											i = 0;
											break;
										}
										if (i >>> 0 > 536870911) {
											if ((Gr(e, 5) | 0) == -1) {
												i = 1;
												break;
											}
											a[r >> 2] = ((i >>> 27) & 3) + 3;
											i = 0;
											break;
										}
										if (i >>> 0 > 268435455) {
											if ((Gr(e, 7) | 0) == -1) {
												i = 1;
												break;
											}
											a[r >> 2] = ((i >>> 25) & 7) + 7;
											i = 0;
											break;
										}
										i = wr(i, 28) | 0;
										n = (i + 4) | 0;
										if ((n | 0) != 32) {
											Gr(e, (i + 5) | 0) | 0;
											i = Kr(e, n) | 0;
											if ((i | 0) == -1) {
												i = 1;
												break;
											}
											a[r >> 2] = (1 << n) + -1 + i;
											i = 0;
											break;
										}
										a[r >> 2] = 0;
										Gr(e, 32) | 0;
										if (
											(Kr(e, 1) | 0) == 1
												? ((t = Vr(e) | 0), (Gr(e, 32) | 0) != -1)
												: 0
										)
											if ((t | 0) == 1) {
												a[r >> 2] = -1;
												i = 1;
												break;
											} else if (!t) {
												a[r >> 2] = -1;
												i = 0;
												break;
											} else {
												i = 1;
												break;
											}
										else i = 1;
									} else {
										Gr(e, 1) | 0;
										a[r >> 2] = 0;
										i = 0;
									}
								while (0);
								c = f;
								return i | 0;
							}
							function Xr(e, r) {
								e = e | 0;
								r = r | 0;
								var i = 0,
									n = 0,
									t = 0;
								n = c;
								c = (c + 16) | 0;
								t = n;
								a[t >> 2] = 0;
								i = $r(e, t) | 0;
								e = a[t >> 2] | 0;
								i = (i | 0) == 0;
								if ((e | 0) == -1)
									if (i) e = 1;
									else {
										a[r >> 2] = -2147483648;
										e = 0;
									}
								else if (i) {
									i = ((e + 1) | 0) >>> 1;
									a[r >> 2] = ((e & 1) | 0) != 0 ? i : (0 - i) | 0;
									e = 0;
								} else e = 1;
								c = n;
								return e | 0;
							}
							function Wr(e, r, i) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								var n = 0,
									t = 0;
								t = c;
								c = (c + 16) | 0;
								n = t;
								if ($r(e, n) | 0) {
									n = 1;
									c = t;
									return n | 0;
								}
								n = a[n >> 2] | 0;
								if (n >>> 0 > 47) {
									n = 1;
									c = t;
									return n | 0;
								}
								a[r >> 2] = f[(((i | 0) == 0 ? 576 : 528) + n) >> 0];
								n = 0;
								c = t;
								return n | 0;
							}
							function Jr(e, r, i) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								var n = 0;
								n = c;
								if (!i) {
									i = Kr(e, 1) | 0;
									a[r >> 2] = i;
									if ((i | 0) == -1) i = 1;
									else {
										a[r >> 2] = i ^ 1;
										i = 0;
									}
								} else i = $r(e, r) | 0;
								c = n;
								return i | 0;
							}
							function Qr(e, r, i, n) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								n = n | 0;
								var t = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0,
									g = 0,
									y = 0,
									B = 0,
									A = 0,
									U = 0,
									S = 0,
									_ = 0,
									M = 0,
									E = 0,
									F = 0,
									L = 0,
									C = 0,
									D = 0,
									P = 0,
									R = 0,
									O = 0,
									I = 0,
									T = 0,
									z = 0,
									N = 0,
									x = 0;
								x = c;
								c = (c + 128) | 0;
								z = (x + 64) | 0;
								N = x;
								d = Vr(e) | 0;
								p = d >>> 16;
								do
									if (i >>> 0 < 2)
										if ((d | 0) >= 0) {
											if (d >>> 0 > 201326591) {
												h = o[(1264 + ((d >>> 26) << 1)) >> 1] | 0;
												u = 25;
												break;
											}
											if (d >>> 0 > 16777215) {
												h = o[(1328 + ((d >>> 22) << 1)) >> 1] | 0;
												u = 25;
												break;
											}
											if (d >>> 0 > 2097151) {
												h = o[(1424 + (((d >>> 18) + -8) << 1)) >> 1] | 0;
												u = 25;
												break;
											} else {
												h = o[(1536 + (p << 1)) >> 1] | 0;
												u = 25;
												break;
											}
										} else k = 1;
									else if (i >>> 0 < 4) {
										if ((d | 0) < 0) {
											k = ((p & 16384) | 0) != 0 ? 2 : 2082;
											break;
										}
										if (d >>> 0 > 268435455) {
											h = o[(1600 + ((d >>> 26) << 1)) >> 1] | 0;
											u = 25;
											break;
										}
										if (d >>> 0 > 33554431) {
											h = o[(1664 + ((d >>> 23) << 1)) >> 1] | 0;
											u = 25;
											break;
										} else {
											h = o[(1728 + ((d >>> 18) << 1)) >> 1] | 0;
											u = 25;
											break;
										}
									} else {
										if (i >>> 0 < 8) {
											i = d >>> 26;
											if (((i + -8) | 0) >>> 0 < 56) {
												h = o[(1984 + (i << 1)) >> 1] | 0;
												u = 25;
												break;
											}
											h = o[(2112 + ((d >>> 22) << 1)) >> 1] | 0;
											u = 25;
											break;
										}
										if (i >>> 0 < 17) {
											h = o[(2368 + ((d >>> 26) << 1)) >> 1] | 0;
											u = 25;
											break;
										}
										i = d >>> 29;
										if (i) {
											h = o[(2496 + (i << 1)) >> 1] | 0;
											u = 25;
											break;
										}
										h = o[(2512 + ((d >>> 24) << 1)) >> 1] | 0;
										u = 25;
										break;
									}
								while (0);
								if ((u | 0) == 25)
									if (!h) {
										E = 1;
										c = x;
										return E | 0;
									} else k = h;
								h = k & 31;
								i = d << h;
								p = (32 - h) | 0;
								R = (k >>> 11) & 31;
								if (R >>> 0 > n >>> 0) {
									E = 1;
									c = x;
									return E | 0;
								}
								y = (k >>> 5) & 63;
								do
									if (R) {
										if (!y) h = 0;
										else {
											do
												if (p >>> 0 < y >>> 0)
													if ((Gr(e, h) | 0) == -1) {
														E = 1;
														c = x;
														return E | 0;
													} else {
														p = 32;
														i = Vr(e) | 0;
														break;
													}
											while (0);
											d = i >>> ((32 - y) | 0);
											i = i << y;
											u = 0;
											h = 1 << (y + -1);
											do {
												a[(z + (u << 2)) >> 2] = ((h & d) | 0) != 0 ? -1 : 1;
												h = h >>> 1;
												u = (u + 1) | 0;
											} while ((h | 0) != 0);
											p = (p - y) | 0;
											h = u;
										}
										g = y >>> 0 < 3;
										e: do
											if (h >>> 0 < R >>> 0) {
												v = h;
												m = (R >>> 0 > 10) & g & 1;
												r: while (1) {
													if (p >>> 0 < 16) {
														if ((Gr(e, (32 - p) | 0) | 0) == -1) {
															O = 1;
															u = 127;
															break;
														}
														w = 32;
														i = Vr(e) | 0;
													} else w = p;
													do
														if ((i | 0) >= 0)
															if (i >>> 0 <= 1073741823)
																if (i >>> 0 <= 536870911)
																	if (i >>> 0 <= 268435455)
																		if (i >>> 0 <= 134217727)
																			if (i >>> 0 <= 67108863)
																				if (i >>> 0 <= 33554431)
																					if (i >>> 0 <= 16777215)
																						if (i >>> 0 <= 8388607)
																							if (i >>> 0 > 4194303) {
																								P = 9;
																								u = 59;
																							} else {
																								if (i >>> 0 > 2097151) {
																									P = 10;
																									u = 59;
																									break;
																								}
																								if (i >>> 0 > 1048575) {
																									P = 11;
																									u = 59;
																									break;
																								}
																								if (i >>> 0 > 524287) {
																									P = 12;
																									u = 59;
																									break;
																								}
																								if (i >>> 0 > 262143) {
																									P = 13;
																									u = 59;
																									break;
																								}
																								if (i >>> 0 > 131071) {
																									p = 14;
																									h = i << 15;
																									d = (w + -15) | 0;
																									k = m;
																									u = (m | 0) != 0 ? m : 4;
																								} else {
																									if (i >>> 0 < 65536) {
																										O = 1;
																										u = 127;
																										break r;
																									}
																									p = 15;
																									h = i << 16;
																									d = (w + -16) | 0;
																									k = (m | 0) != 0 ? m : 1;
																									u = 12;
																								}
																								D = p << k;
																								M = h;
																								U = d;
																								S = k;
																								A = u;
																								B = (k | 0) == 0;
																								u = 60;
																							}
																						else {
																							P = 8;
																							u = 59;
																						}
																					else {
																						P = 7;
																						u = 59;
																					}
																				else {
																					P = 6;
																					u = 59;
																				}
																			else {
																				P = 5;
																				u = 59;
																			}
																		else {
																			P = 4;
																			u = 59;
																		}
																	else {
																		P = 3;
																		u = 59;
																	}
																else {
																	P = 2;
																	u = 59;
																}
															else {
																P = 1;
																u = 59;
															}
														else {
															P = 0;
															u = 59;
														}
													while (0);
													if ((u | 0) == 59) {
														u = 0;
														p = (P + 1) | 0;
														h = i << p;
														p = (w - p) | 0;
														i = P << m;
														if (!m) {
															L = p;
															C = h;
															_ = i;
															E = 0;
															F = 1;
														} else {
															D = i;
															M = h;
															U = p;
															S = m;
															A = m;
															B = 0;
															u = 60;
														}
													}
													if ((u | 0) == 60) {
														if (U >>> 0 < A >>> 0) {
															if ((Gr(e, (32 - U) | 0) | 0) == -1) {
																O = 1;
																u = 127;
																break;
															}
															h = 32;
															i = Vr(e) | 0;
														} else {
															h = U;
															i = M;
														}
														L = (h - A) | 0;
														C = i << A;
														_ = ((i >>> ((32 - A) | 0)) + D) | 0;
														E = S;
														F = B;
													}
													m = ((v | 0) == (y | 0)) & g ? (_ + 2) | 0 : _;
													h = ((m + 2) | 0) >>> 1;
													d = F ? 1 : E;
													a[(z + (v << 2)) >> 2] =
														((m & 1) | 0) == 0 ? h : (0 - h) | 0;
													v = (v + 1) | 0;
													if (v >>> 0 >= R >>> 0) {
														l = L;
														b = C;
														break e;
													} else {
														p = L;
														i = C;
														m =
															((((h | 0) > ((3 << (d + -1)) | 0)) &
																(d >>> 0 < 6) &
																1) +
																d) |
															0;
													}
												}
												if ((u | 0) == 127) {
													c = x;
													return O | 0;
												}
											} else {
												l = p;
												b = i;
											}
										while (0);
										if (R >>> 0 < n >>> 0) {
											do
												if (l >>> 0 < 9)
													if ((Gr(e, (32 - l) | 0) | 0) == -1) {
														E = 1;
														c = x;
														return E | 0;
													} else {
														l = 32;
														b = Vr(e) | 0;
														break;
													}
											while (0);
											u = b >>> 23;
											e: do
												if ((n | 0) == 4)
													if ((b | 0) >= 0)
														if ((R | 0) != 3)
															if (b >>> 0 <= 1073741823)
																if ((R | 0) == 2) u = 34;
																else u = b >>> 0 > 536870911 ? 35 : 51;
															else u = 18;
														else u = 17;
													else u = 1;
												else {
													do
														switch (R | 0) {
															case 8: {
																u = f[(1056 + (b >>> 26)) >> 0] | 0;
																break;
															}
															case 9: {
																u = f[(1120 + (b >>> 26)) >> 0] | 0;
																break;
															}
															case 2: {
																u = f[(736 + (b >>> 26)) >> 0] | 0;
																break;
															}
															case 1: {
																if (b >>> 0 > 268435455)
																	u = f[(672 + (b >>> 27)) >> 0] | 0;
																else u = f[(704 + u) >> 0] | 0;
																break;
															}
															case 13: {
																u = f[(1248 + (b >>> 29)) >> 0] | 0;
																break;
															}
															case 14: {
																u = f[(1256 + (b >>> 30)) >> 0] | 0;
																break;
															}
															case 3: {
																u = f[(800 + (b >>> 26)) >> 0] | 0;
																break;
															}
															case 4: {
																u = f[(864 + (b >>> 27)) >> 0] | 0;
																break;
															}
															case 5: {
																u = f[(896 + (b >>> 27)) >> 0] | 0;
																break;
															}
															case 10: {
																u = f[(1184 + (b >>> 27)) >> 0] | 0;
																break;
															}
															case 6: {
																u = f[(928 + (b >>> 26)) >> 0] | 0;
																break;
															}
															case 7: {
																u = f[(992 + (b >>> 26)) >> 0] | 0;
																break;
															}
															case 11: {
																u = f[(1216 + (b >>> 28)) >> 0] | 0;
																break;
															}
															case 12: {
																u = f[(1232 + (b >>> 28)) >> 0] | 0;
																break;
															}
															default: {
																u = ((b >> 31) & 16) | 1;
																break e;
															}
														}
													while (0);
													if (!u) {
														E = 1;
														c = x;
														return E | 0;
													}
												}
											while (0);
											d = u & 15;
											l = (l - d) | 0;
											b = b << d;
											d = (u >>> 4) & 15;
										} else d = 0;
										p = (R + -1) | 0;
										i = (p | 0) == 0;
										if (i) {
											a[(r + (d << 2)) >> 2] = a[(z + (p << 2)) >> 2];
											I = l;
											t = 1 << d;
											break;
										} else {
											u = b;
											h = 0;
										}
										e: while (1) {
											if (!d) {
												a[(N + (h << 2)) >> 2] = 1;
												T = l;
												s = 0;
											} else {
												if (l >>> 0 < 11) {
													if ((Gr(e, (32 - l) | 0) | 0) == -1) {
														O = 1;
														u = 127;
														break;
													}
													l = 32;
													u = Vr(e) | 0;
												}
												switch (d | 0) {
													case 4: {
														b = f[(648 + (u >>> 29)) >> 0] | 0;
														break;
													}
													case 5: {
														b = f[(656 + (u >>> 29)) >> 0] | 0;
														break;
													}
													case 6: {
														b = f[(664 + (u >>> 29)) >> 0] | 0;
														break;
													}
													case 1: {
														b = f[(624 + (u >>> 31)) >> 0] | 0;
														break;
													}
													case 2: {
														b = f[(632 + (u >>> 30)) >> 0] | 0;
														break;
													}
													case 3: {
														b = f[(640 + (u >>> 30)) >> 0] | 0;
														break;
													}
													default: {
														do
															if (u >>> 0 <= 536870911)
																if (u >>> 0 <= 268435455)
																	if (u >>> 0 <= 134217727)
																		if (u >>> 0 <= 67108863)
																			if (u >>> 0 <= 33554431)
																				if (u >>> 0 > 16777215) b = 184;
																				else {
																					if (u >>> 0 > 8388607) {
																						b = 201;
																						break;
																					}
																					if (u >>> 0 > 4194303) {
																						b = 218;
																						break;
																					}
																					b = u >>> 0 < 2097152 ? 0 : 235;
																				}
																			else b = 167;
																		else b = 150;
																	else b = 133;
																else b = 116;
															else b = ((u >>> 29) << 4) ^ 115;
														while (0);
														if (((b >>> 4) & 15) >>> 0 > d >>> 0) {
															O = 1;
															u = 127;
															break e;
														}
													}
												}
												if (!b) {
													O = 1;
													u = 127;
													break;
												}
												E = b & 15;
												s = (b >>> 4) & 15;
												a[(N + (h << 2)) >> 2] = s + 1;
												T = (l - E) | 0;
												u = u << E;
												s = (d - s) | 0;
											}
											h = (h + 1) | 0;
											if (h >>> 0 >= p >>> 0) {
												u = 122;
												break;
											} else {
												l = T;
												d = s;
											}
										}
										if ((u | 0) == 122) {
											a[(r + (s << 2)) >> 2] = a[(z + (p << 2)) >> 2];
											t = 1 << s;
											if (i) {
												I = T;
												break;
											}
											u = (R + -2) | 0;
											while (1) {
												s = ((a[(N + (u << 2)) >> 2] | 0) + s) | 0;
												t = (1 << s) | t;
												a[(r + (s << 2)) >> 2] = a[(z + (u << 2)) >> 2];
												if (!u) {
													I = T;
													break;
												} else u = (u + -1) | 0;
											}
										} else if ((u | 0) == 127) {
											c = x;
											return O | 0;
										}
									} else {
										I = p;
										t = 0;
									}
								while (0);
								if (Gr(e, (32 - I) | 0) | 0) {
									E = 1;
									c = x;
									return E | 0;
								}
								E = (t << 16) | (R << 4);
								c = x;
								return E | 0;
							}
							function ei(e, r) {
								e = e | 0;
								r = r | 0;
								var i = 0,
									n = 0,
									t = 0;
								t = c;
								e: do
									if (
										(Kr(e, 1) | 0) != -1
											? ((n = (r + 4) | 0),
											  (a[n >> 2] = Kr(e, 2) | 0),
											  (i = Kr(e, 5) | 0),
											  (a[r >> 2] = i),
											  ((i + -2) | 0) >>> 0 >= 3)
											: 0
									) {
										switch (i | 0) {
											case 6:
											case 9:
											case 10:
											case 11:
											case 12: {
												if (a[n >> 2] | 0) {
													i = 1;
													break e;
												}
												break;
											}
											case 5:
											case 7:
											case 8: {
												if (!(a[n >> 2] | 0)) {
													i = 1;
													break e;
												}
												switch (i | 0) {
													case 6:
													case 9:
													case 10:
													case 11:
													case 12: {
														i = 1;
														break e;
													}
													default: {
													}
												}
												break;
											}
											default: {
											}
										}
										i = 0;
									} else i = 1;
								while (0);
								c = t;
								return i | 0;
							}
							function ri(e, r, i) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								var n = 0,
									t = 0,
									f = 0,
									o = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0,
									d = 0,
									h = 0;
								h = c;
								if (!i) {
									c = h;
									return;
								}
								b = (r + -1) | 0;
								s = (1 - r) | 0;
								u = ~r;
								f = 0;
								o = 0;
								l = 0;
								while (1) {
									t = (f | 0) != 0;
									if (t)
										a[(e + ((o * 216) | 0) + 200) >> 2] =
											e + ((((o + -1) | 0) * 216) | 0);
									else a[(e + ((o * 216) | 0) + 200) >> 2] = 0;
									n = (l | 0) != 0;
									if (n) {
										a[(e + ((o * 216) | 0) + 204) >> 2] =
											e + ((((o - r) | 0) * 216) | 0);
										if (f >>> 0 < b >>> 0)
											a[(e + ((o * 216) | 0) + 208) >> 2] =
												e + ((((s + o) | 0) * 216) | 0);
										else d = 10;
									} else {
										a[(e + ((o * 216) | 0) + 204) >> 2] = 0;
										d = 10;
									}
									if ((d | 0) == 10) {
										d = 0;
										a[(e + ((o * 216) | 0) + 208) >> 2] = 0;
									}
									if (n & t)
										a[(e + ((o * 216) | 0) + 212) >> 2] =
											e + ((((o + u) | 0) * 216) | 0);
									else a[(e + ((o * 216) | 0) + 212) >> 2] = 0;
									n = (f + 1) | 0;
									t = (n | 0) == (r | 0);
									o = (o + 1) | 0;
									if ((o | 0) == (i | 0)) break;
									else {
										f = t ? 0 : n;
										l = ((t & 1) + l) | 0;
									}
								}
								c = h;
								return;
							}
							function ii(e, r) {
								e = e | 0;
								r = r | 0;
								var i = 0;
								i = c;
								switch (r | 0) {
									case 1: {
										e = a[(e + 204) >> 2] | 0;
										break;
									}
									case 3: {
										e = a[(e + 212) >> 2] | 0;
										break;
									}
									case 4:
										break;
									case 2: {
										e = a[(e + 208) >> 2] | 0;
										break;
									}
									case 0: {
										e = a[(e + 200) >> 2] | 0;
										break;
									}
									default:
										e = 0;
								}
								c = i;
								return e | 0;
							}
							function ni(e) {
								e = e | 0;
								return (3152 + (e << 3)) | 0;
							}
							function ti(e) {
								e = e | 0;
								return (2960 + (e << 3)) | 0;
							}
							function ai(e) {
								e = e | 0;
								return (2768 + (e << 3)) | 0;
							}
							function fi(e) {
								e = e | 0;
								return (2576 + (e << 3)) | 0;
							}
							function oi(e, r) {
								e = e | 0;
								r = r | 0;
								var i = 0;
								i = c;
								if (!r) {
									c = i;
									return 0;
								} else {
									c = i;
									return ((a[(e + 4) >> 2] | 0) == (a[(r + 4) >> 2] | 0)) | 0;
								}
								return 0;
							}
							function si(e) {
								e = e | 0;
								var r = 0;
								r = c;
								cn(e, 0, 3388);
								a[(e + 8) >> 2] = 32;
								a[(e + 4) >> 2] = 256;
								a[(e + 1332) >> 2] = 1;
								c = r;
								return;
							}
							function ui(e, r) {
								e = e | 0;
								r = r | 0;
								var i = 0,
									n = 0,
									t = 0,
									f = 0,
									o = 0;
								o = c;
								t = a[(r + 8) >> 2] | 0;
								f = (e + (t << 2) + 20) | 0;
								n = a[f >> 2] | 0;
								do
									if (!n) {
										i = sn(92) | 0;
										a[f >> 2] = i;
										if (!i) {
											i = 65535;
											c = o;
											return i | 0;
										}
									} else {
										i = (e + 8) | 0;
										if ((t | 0) != (a[i >> 2] | 0)) {
											un(a[(n + 40) >> 2] | 0);
											a[((a[f >> 2] | 0) + 40) >> 2] = 0;
											un(a[((a[f >> 2] | 0) + 84) >> 2] | 0);
											a[((a[f >> 2] | 0) + 84) >> 2] = 0;
											break;
										}
										t = (e + 16) | 0;
										if (Sr(r, a[t >> 2] | 0) | 0) {
											un(a[((a[f >> 2] | 0) + 40) >> 2] | 0);
											a[((a[f >> 2] | 0) + 40) >> 2] = 0;
											un(a[((a[f >> 2] | 0) + 84) >> 2] | 0);
											a[((a[f >> 2] | 0) + 84) >> 2] = 0;
											a[i >> 2] = 33;
											a[(e + 4) >> 2] = 257;
											a[t >> 2] = 0;
											a[(e + 12) >> 2] = 0;
											break;
										}
										i = (r + 40) | 0;
										un(a[i >> 2] | 0);
										a[i >> 2] = 0;
										i = (r + 84) | 0;
										un(a[i >> 2] | 0);
										a[i >> 2] = 0;
										i = 0;
										c = o;
										return i | 0;
									}
								while (0);
								t = ((a[f >> 2] | 0) + 0) | 0;
								i = (r + 0) | 0;
								n = (t + 92) | 0;
								do {
									a[t >> 2] = a[i >> 2];
									t = (t + 4) | 0;
									i = (i + 4) | 0;
								} while ((t | 0) < (n | 0));
								i = 0;
								c = o;
								return i | 0;
							}
							function li(e, r) {
								e = e | 0;
								r = r | 0;
								var i = 0,
									n = 0,
									t = 0,
									f = 0,
									o = 0;
								o = c;
								t = a[r >> 2] | 0;
								f = (e + (t << 2) + 148) | 0;
								i = a[f >> 2] | 0;
								do
									if (!i) {
										i = sn(72) | 0;
										a[f >> 2] = i;
										if (!i) {
											i = 65535;
											c = o;
											return i | 0;
										}
									} else {
										n = (e + 4) | 0;
										if ((t | 0) != (a[n >> 2] | 0)) {
											un(a[(i + 20) >> 2] | 0);
											a[((a[f >> 2] | 0) + 20) >> 2] = 0;
											un(a[((a[f >> 2] | 0) + 24) >> 2] | 0);
											a[((a[f >> 2] | 0) + 24) >> 2] = 0;
											un(a[((a[f >> 2] | 0) + 28) >> 2] | 0);
											a[((a[f >> 2] | 0) + 28) >> 2] = 0;
											un(a[((a[f >> 2] | 0) + 44) >> 2] | 0);
											a[((a[f >> 2] | 0) + 44) >> 2] = 0;
											break;
										}
										if ((a[(r + 4) >> 2] | 0) != (a[(e + 8) >> 2] | 0)) {
											a[n >> 2] = 257;
											i = a[f >> 2] | 0;
										}
										un(a[(i + 20) >> 2] | 0);
										a[((a[f >> 2] | 0) + 20) >> 2] = 0;
										un(a[((a[f >> 2] | 0) + 24) >> 2] | 0);
										a[((a[f >> 2] | 0) + 24) >> 2] = 0;
										un(a[((a[f >> 2] | 0) + 28) >> 2] | 0);
										a[((a[f >> 2] | 0) + 28) >> 2] = 0;
										un(a[((a[f >> 2] | 0) + 44) >> 2] | 0);
										a[((a[f >> 2] | 0) + 44) >> 2] = 0;
									}
								while (0);
								t = ((a[f >> 2] | 0) + 0) | 0;
								i = (r + 0) | 0;
								n = (t + 72) | 0;
								do {
									a[t >> 2] = a[i >> 2];
									t = (t + 4) | 0;
									i = (i + 4) | 0;
								} while ((t | 0) < (n | 0));
								i = 0;
								c = o;
								return i | 0;
							}
							function ci(e, r, i) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								var n = 0,
									t = 0,
									f = 0,
									o = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0;
								k = c;
								h = (e + (r << 2) + 148) | 0;
								t = a[h >> 2] | 0;
								if (!t) {
									h = 1;
									c = k;
									return h | 0;
								}
								d = a[(t + 4) >> 2] | 0;
								f = a[(e + (d << 2) + 20) >> 2] | 0;
								if (!f) {
									h = 1;
									c = k;
									return h | 0;
								}
								l = a[(f + 52) >> 2] | 0;
								b = ee(a[(f + 56) >> 2] | 0, l) | 0;
								o = a[(t + 12) >> 2] | 0;
								e: do
									if (o >>> 0 > 1) {
										f = a[(t + 16) >> 2] | 0;
										if ((f | 0) == 2) {
											u = a[(t + 24) >> 2] | 0;
											s = a[(t + 28) >> 2] | 0;
											o = (o + -1) | 0;
											n = 0;
											while (1) {
												t = a[(u + (n << 2)) >> 2] | 0;
												f = a[(s + (n << 2)) >> 2] | 0;
												if (!((t >>> 0 <= f >>> 0) & (f >>> 0 < b >>> 0))) {
													n = 1;
													f = 33;
													break;
												}
												n = (n + 1) | 0;
												if (
													((t >>> 0) % (l >>> 0) | 0) >>> 0 >
													((f >>> 0) % (l >>> 0) | 0) >>> 0
												) {
													n = 1;
													f = 33;
													break;
												}
												if (n >>> 0 >= o >>> 0) break e;
											}
											if ((f | 0) == 33) {
												c = k;
												return n | 0;
											}
										} else if (!f) {
											f = a[(t + 20) >> 2] | 0;
											t = 0;
											while (1) {
												if ((a[(f + (t << 2)) >> 2] | 0) >>> 0 > b >>> 0) {
													n = 1;
													break;
												}
												t = (t + 1) | 0;
												if (t >>> 0 >= o >>> 0) break e;
											}
											c = k;
											return n | 0;
										} else {
											if (((f + -3) | 0) >>> 0 < 3) {
												if ((a[(t + 36) >> 2] | 0) >>> 0 > b >>> 0) n = 1;
												else break;
												c = k;
												return n | 0;
											}
											if ((f | 0) != 6) break;
											if ((a[(t + 40) >> 2] | 0) >>> 0 < b >>> 0) n = 1;
											else break;
											c = k;
											return n | 0;
										}
									}
								while (0);
								t = (e + 4) | 0;
								f = a[t >> 2] | 0;
								do
									if ((f | 0) != 256) {
										n = (e + 3380) | 0;
										if (!(a[n >> 2] | 0)) {
											if ((f | 0) == (r | 0)) break;
											f = (e + 8) | 0;
											if ((d | 0) == (a[f >> 2] | 0)) {
												a[t >> 2] = r;
												a[(e + 12) >> 2] = a[h >> 2];
												break;
											}
											if (!i) {
												h = 1;
												c = k;
												return h | 0;
											} else {
												a[t >> 2] = r;
												h = a[h >> 2] | 0;
												a[(e + 12) >> 2] = h;
												h = a[(h + 4) >> 2] | 0;
												a[f >> 2] = h;
												h = a[(e + (h << 2) + 20) >> 2] | 0;
												a[(e + 16) >> 2] = h;
												d = a[(h + 52) >> 2] | 0;
												h = a[(h + 56) >> 2] | 0;
												a[(e + 1176) >> 2] = ee(h, d) | 0;
												a[(e + 1340) >> 2] = d;
												a[(e + 1344) >> 2] = h;
												a[n >> 2] = 1;
												break;
											}
										}
										a[n >> 2] = 0;
										n = (e + 1212) | 0;
										un(a[n >> 2] | 0);
										a[n >> 2] = 0;
										t = (e + 1172) | 0;
										un(a[t >> 2] | 0);
										a[t >> 2] = 0;
										f = (e + 1176) | 0;
										a[n >> 2] = sn(((a[f >> 2] | 0) * 216) | 0) | 0;
										h = sn(a[f >> 2] << 2) | 0;
										a[t >> 2] = h;
										t = a[n >> 2] | 0;
										if (((t | 0) == 0) | ((h | 0) == 0)) {
											h = 65535;
											c = k;
											return h | 0;
										}
										cn(t, 0, ((a[f >> 2] | 0) * 216) | 0);
										t = (e + 16) | 0;
										ri(
											a[n >> 2] | 0,
											a[((a[t >> 2] | 0) + 52) >> 2] | 0,
											a[f >> 2] | 0
										);
										t = a[t >> 2] | 0;
										do
											if (
												(a[(e + 1216) >> 2] | 0) == 0
													? (a[(t + 16) >> 2] | 0) != 2
													: 0
											) {
												if (
													(
														(a[(t + 80) >> 2] | 0) != 0
															? ((p = a[(t + 84) >> 2] | 0),
															  (a[(p + 920) >> 2] | 0) != 0)
															: 0
													)
														? (a[(p + 944) >> 2] | 0) == 0
														: 0
												) {
													n = 1;
													break;
												}
												n = 0;
											} else n = 1;
										while (0);
										h = ee(a[(t + 56) >> 2] | 0, a[(t + 52) >> 2] | 0) | 0;
										n =
											Ge(
												(e + 1220) | 0,
												h,
												a[(t + 88) >> 2] | 0,
												a[(t + 44) >> 2] | 0,
												a[(t + 12) >> 2] | 0,
												n
											) | 0;
										if (n) {
											h = n;
											c = k;
											return h | 0;
										}
									} else {
										a[t >> 2] = r;
										h = a[h >> 2] | 0;
										a[(e + 12) >> 2] = h;
										h = a[(h + 4) >> 2] | 0;
										a[(e + 8) >> 2] = h;
										h = a[(e + (h << 2) + 20) >> 2] | 0;
										a[(e + 16) >> 2] = h;
										d = a[(h + 52) >> 2] | 0;
										h = a[(h + 56) >> 2] | 0;
										a[(e + 1176) >> 2] = ee(h, d) | 0;
										a[(e + 1340) >> 2] = d;
										a[(e + 1344) >> 2] = h;
										a[(e + 3380) >> 2] = 1;
									}
								while (0);
								h = 0;
								c = k;
								return h | 0;
							}
							function bi(e) {
								e = e | 0;
								var r = 0,
									i = 0,
									n = 0;
								n = c;
								a[(e + 1196) >> 2] = 0;
								a[(e + 1192) >> 2] = 0;
								i = a[(e + 1176) >> 2] | 0;
								if (!i) {
									c = n;
									return;
								}
								e = a[(e + 1212) >> 2] | 0;
								r = 0;
								do {
									a[(e + ((r * 216) | 0) + 4) >> 2] = 0;
									a[(e + ((r * 216) | 0) + 196) >> 2] = 0;
									r = (r + 1) | 0;
								} while (r >>> 0 < i >>> 0);
								c = n;
								return;
							}
							function di(e) {
								e = e | 0;
								return ((a[(e + 1188) >> 2] | 0) == 0) | 0;
							}
							function hi(e) {
								e = e | 0;
								var r = 0,
									i = 0,
									n = 0,
									t = 0;
								t = c;
								if (!(a[(e + 1404) >> 2] | 0)) {
									if ((a[(e + 1196) >> 2] | 0) == (a[(e + 1176) >> 2] | 0)) {
										e = 1;
										c = t;
										return e | 0;
									}
								} else {
									n = a[(e + 1176) >> 2] | 0;
									if (!n) {
										e = 1;
										c = t;
										return e | 0;
									}
									e = a[(e + 1212) >> 2] | 0;
									r = 0;
									i = 0;
									do {
										i =
											((((a[(e + ((r * 216) | 0) + 196) >> 2] | 0) != 0) & 1) +
												i) |
											0;
										r = (r + 1) | 0;
									} while (r >>> 0 < n >>> 0);
									if ((i | 0) == (n | 0)) {
										e = 1;
										c = t;
										return e | 0;
									}
								}
								e = 0;
								c = t;
								return e | 0;
							}
							function pi(e, r) {
								e = e | 0;
								r = r | 0;
								var i = 0,
									n = 0;
								i = c;
								n = a[(e + 16) >> 2] | 0;
								mi(
									a[(e + 1172) >> 2] | 0,
									a[(e + 12) >> 2] | 0,
									r,
									a[(n + 52) >> 2] | 0,
									a[(n + 56) >> 2] | 0
								);
								c = i;
								return;
							}
							function ki(e, r, i, n) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								n = n | 0;
								var t = 0,
									f = 0,
									o = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0;
								v = c;
								c = (c + 32) | 0;
								f = (v + 24) | 0;
								s = (v + 20) | 0;
								u = (v + 16) | 0;
								d = (v + 12) | 0;
								w = (v + 8) | 0;
								k = v;
								a[n >> 2] = 0;
								switch (a[r >> 2] | 0) {
									case 5:
									case 1: {
										m = (i + 1300) | 0;
										o = (i + 1332) | 0;
										if (a[o >> 2] | 0) {
											a[n >> 2] = 1;
											a[o >> 2] = 0;
										}
										o = Er(e, f) | 0;
										if (o) {
											h = o;
											c = v;
											return h | 0;
										}
										l = a[(i + (a[f >> 2] << 2) + 148) >> 2] | 0;
										if (!l) {
											h = 65520;
											c = v;
											return h | 0;
										}
										o = a[(l + 4) >> 2] | 0;
										b = a[(i + (o << 2) + 20) >> 2] | 0;
										if (!b) {
											h = 65520;
											c = v;
											return h | 0;
										}
										f = a[(i + 8) >> 2] | 0;
										if (
											!(((f | 0) == 32) | ((o | 0) == (f | 0)))
												? (a[r >> 2] | 0) != 5
												: 0
										) {
											h = 65520;
											c = v;
											return h | 0;
										}
										f = a[(i + 1304) >> 2] | 0;
										o = a[(r + 4) >> 2] | 0;
										if (
											(f | 0) != (o | 0) ? ((f | 0) == 0) | ((o | 0) == 0) : 0
										)
											a[n >> 2] = 1;
										o = (a[r >> 2] | 0) == 5;
										if ((a[m >> 2] | 0) == 5) {
											if (!o) t = 16;
										} else if (o) t = 16;
										if ((t | 0) == 16) a[n >> 2] = 1;
										f = (b + 12) | 0;
										if (Fr(e, a[f >> 2] | 0, s) | 0) {
											h = 1;
											c = v;
											return h | 0;
										}
										t = (i + 1308) | 0;
										o = a[s >> 2] | 0;
										if ((a[t >> 2] | 0) != (o | 0)) {
											a[t >> 2] = o;
											a[n >> 2] = 1;
										}
										if ((a[r >> 2] | 0) == 5) {
											if (Lr(e, a[f >> 2] | 0, 5, u) | 0) {
												h = 1;
												c = v;
												return h | 0;
											}
											if ((a[m >> 2] | 0) == 5) {
												o = (i + 1312) | 0;
												t = a[o >> 2] | 0;
												f = a[u >> 2] | 0;
												if ((t | 0) == (f | 0)) f = t;
												else a[n >> 2] = 1;
											} else {
												f = a[u >> 2] | 0;
												o = (i + 1312) | 0;
											}
											a[o >> 2] = f;
										}
										f = a[(b + 16) >> 2] | 0;
										if ((f | 0) == 1) {
											if (!(a[(b + 24) >> 2] | 0)) {
												o = (l + 8) | 0;
												f = Pr(e, b, a[r >> 2] | 0, a[o >> 2] | 0, k) | 0;
												if (f) {
													h = f;
													c = v;
													return h | 0;
												}
												t = (i + 1324) | 0;
												f = a[k >> 2] | 0;
												if ((a[t >> 2] | 0) != (f | 0)) {
													a[t >> 2] = f;
													a[n >> 2] = 1;
												}
												if (
													(a[o >> 2] | 0) != 0
														? ((p = (i + 1328) | 0),
														  (h = a[(k + 4) >> 2] | 0),
														  (a[p >> 2] | 0) != (h | 0))
														: 0
												) {
													a[p >> 2] = h;
													a[n >> 2] = 1;
												}
											}
										} else if (!f) {
											if (Cr(e, b, a[r >> 2] | 0, d) | 0) {
												h = 1;
												c = v;
												return h | 0;
											}
											t = (i + 1316) | 0;
											f = a[d >> 2] | 0;
											if ((a[t >> 2] | 0) != (f | 0)) {
												a[t >> 2] = f;
												a[n >> 2] = 1;
											}
											if (a[(l + 8) >> 2] | 0) {
												t = Dr(e, b, a[r >> 2] | 0, w) | 0;
												if (t) {
													h = t;
													c = v;
													return h | 0;
												}
												f = (i + 1320) | 0;
												t = a[w >> 2] | 0;
												if ((a[f >> 2] | 0) != (t | 0)) {
													a[f >> 2] = t;
													a[n >> 2] = 1;
												}
											}
										}
										d = r;
										e = a[(d + 4) >> 2] | 0;
										h = m;
										a[h >> 2] = a[d >> 2];
										a[(h + 4) >> 2] = e;
										h = 0;
										c = v;
										return h | 0;
									}
									case 6:
									case 7:
									case 8:
									case 9:
									case 10:
									case 11:
									case 13:
									case 14:
									case 15:
									case 16:
									case 17:
									case 18: {
										a[n >> 2] = 1;
										h = 0;
										c = v;
										return h | 0;
									}
									default: {
										h = 0;
										c = v;
										return h | 0;
									}
								}
								return 0;
							}
							function wi(e) {
								e = e | 0;
								var r = 0,
									i = 0,
									n = 0,
									t = 0,
									f = 0,
									o = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0,
									d = 0;
								d = c;
								l = 0;
								e: while (1) {
									r = a[(e + (l << 2) + 148) >> 2] | 0;
									r: do
										if (
											(r | 0) != 0
												? ((u = a[(e + (a[(r + 4) >> 2] << 2) + 20) >> 2] | 0),
												  (u | 0) != 0)
												: 0
										) {
											s = a[(u + 52) >> 2] | 0;
											b = ee(a[(u + 56) >> 2] | 0, s) | 0;
											t = a[(r + 12) >> 2] | 0;
											if (t >>> 0 <= 1) {
												r = 0;
												i = 18;
												break e;
											}
											i = a[(r + 16) >> 2] | 0;
											if ((i | 0) == 2) {
												o = a[(r + 24) >> 2] | 0;
												f = a[(r + 28) >> 2] | 0;
												t = (t + -1) | 0;
												n = 0;
												while (1) {
													r = a[(o + (n << 2)) >> 2] | 0;
													i = a[(f + (n << 2)) >> 2] | 0;
													if (!((r >>> 0 <= i >>> 0) & (i >>> 0 < b >>> 0)))
														break r;
													n = (n + 1) | 0;
													if (
														((r >>> 0) % (s >>> 0) | 0) >>> 0 >
														((i >>> 0) % (s >>> 0) | 0) >>> 0
													)
														break r;
													if (n >>> 0 >= t >>> 0) {
														r = 0;
														i = 18;
														break e;
													}
												}
											} else if (i) {
												if (((i + -3) | 0) >>> 0 < 3)
													if ((a[(r + 36) >> 2] | 0) >>> 0 > b >>> 0) break;
													else {
														r = 0;
														i = 18;
														break e;
													}
												if ((i | 0) != 6) {
													r = 0;
													i = 18;
													break e;
												}
												if ((a[(r + 40) >> 2] | 0) >>> 0 < b >>> 0) break;
												else {
													r = 0;
													i = 18;
													break e;
												}
											} else {
												i = a[(r + 20) >> 2] | 0;
												r = 0;
												while (1) {
													if ((a[(i + (r << 2)) >> 2] | 0) >>> 0 > b >>> 0)
														break r;
													r = (r + 1) | 0;
													if (r >>> 0 >= t >>> 0) {
														r = 0;
														i = 18;
														break e;
													}
												}
											}
										}
									while (0);
									l = (l + 1) | 0;
									if (l >>> 0 >= 256) {
										r = 1;
										i = 18;
										break;
									}
								}
								if ((i | 0) == 18) {
									c = d;
									return r | 0;
								}
								return 0;
							}
							function mi(e, r, i, n, t) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								n = n | 0;
								t = t | 0;
								var f = 0,
									o = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0,
									g = 0,
									y = 0;
								y = c;
								v = ee(t, n) | 0;
								h = a[(r + 12) >> 2] | 0;
								if ((h | 0) == 1) {
									cn(e, 0, v << 2);
									c = y;
									return;
								}
								u = a[(r + 16) >> 2] | 0;
								if (((u + -3) | 0) >>> 0 < 3) {
									i = ee(a[(r + 36) >> 2] | 0, i) | 0;
									i = i >>> 0 < v >>> 0 ? i : v;
									if (((u & -2) | 0) == 4) {
										d = (a[(r + 32) >> 2] | 0) == 0 ? i : (v - i) | 0;
										g = i;
									} else {
										d = 0;
										g = i;
									}
								} else {
									d = 0;
									g = 0;
								}
								switch (u | 0) {
									case 0: {
										l = a[(r + 20) >> 2] | 0;
										if (!v) {
											c = y;
											return;
										} else {
											o = 0;
											s = 0;
										}
										while (1) {
											while (1)
												if (o >>> 0 < h >>> 0) break;
												else o = 0;
											r = (l + (o << 2)) | 0;
											i = a[r >> 2] | 0;
											e: do
												if (!i) i = 0;
												else {
													u = 0;
													do {
														f = (u + s) | 0;
														if (f >>> 0 >= v >>> 0) break e;
														a[(e + (f << 2)) >> 2] = o;
														u = (u + 1) | 0;
														i = a[r >> 2] | 0;
													} while (u >>> 0 < i >>> 0);
												}
											while (0);
											s = (i + s) | 0;
											if (s >>> 0 >= v >>> 0) break;
											else o = (o + 1) | 0;
										}
										c = y;
										return;
									}
									case 4: {
										o = a[(r + 32) >> 2] | 0;
										if (!v) {
											c = y;
											return;
										}
										i = (1 - o) | 0;
										f = 0;
										do {
											a[(e + (f << 2)) >> 2] = f >>> 0 < d >>> 0 ? o : i;
											f = (f + 1) | 0;
										} while ((f | 0) != (v | 0));
										c = y;
										return;
									}
									case 1: {
										if (!v) {
											c = y;
											return;
										} else o = 0;
										do {
											a[(e + (o << 2)) >> 2] =
												(((((ee(((o >>> 0) / (n >>> 0)) | 0, h) | 0) >>> 1) +
													((o >>> 0) % (n >>> 0) | 0)) |
													0) >>>
													0) %
													(h >>> 0) |
												0;
											o = (o + 1) | 0;
										} while ((o | 0) != (v | 0));
										c = y;
										return;
									}
									case 2: {
										d = a[(r + 24) >> 2] | 0;
										b = a[(r + 28) >> 2] | 0;
										o = (h + -1) | 0;
										if (v) {
											i = 0;
											do {
												a[(e + (i << 2)) >> 2] = o;
												i = (i + 1) | 0;
											} while ((i | 0) != (v | 0));
										}
										if (!o) {
											c = y;
											return;
										}
										f = (h + -2) | 0;
										while (1) {
											s = a[(d + (f << 2)) >> 2] | 0;
											i = ((s >>> 0) / (n >>> 0)) | 0;
											s = (s >>> 0) % (n >>> 0) | 0;
											o = a[(b + (f << 2)) >> 2] | 0;
											l = ((o >>> 0) / (n >>> 0)) | 0;
											o = (o >>> 0) % (n >>> 0) | 0;
											e: do
												if (i >>> 0 <= l >>> 0) {
													if (s >>> 0 > o >>> 0)
														while (1) {
															i = (i + 1) | 0;
															if (i >>> 0 > l >>> 0) break e;
														}
													do {
														u = ee(i, n) | 0;
														r = s;
														do {
															a[(e + ((r + u) << 2)) >> 2] = f;
															r = (r + 1) | 0;
														} while (r >>> 0 <= o >>> 0);
														i = (i + 1) | 0;
													} while (i >>> 0 <= l >>> 0);
												}
											while (0);
											if (!f) break;
											else f = (f + -1) | 0;
										}
										c = y;
										return;
									}
									case 5: {
										i = a[(r + 32) >> 2] | 0;
										if (!n) {
											c = y;
											return;
										}
										u = (1 - i) | 0;
										if (!t) {
											c = y;
											return;
										} else {
											f = 0;
											s = 0;
										}
										while (1) {
											o = 0;
											r = s;
											while (1) {
												b = (e + (((ee(o, n) | 0) + f) << 2)) | 0;
												a[b >> 2] = r >>> 0 < d >>> 0 ? i : u;
												o = (o + 1) | 0;
												if ((o | 0) == (t | 0)) break;
												else r = (r + 1) | 0;
											}
											f = (f + 1) | 0;
											if ((f | 0) == (n | 0)) break;
											else s = (s + t) | 0;
										}
										c = y;
										return;
									}
									case 3: {
										b = a[(r + 32) >> 2] | 0;
										if (v) {
											i = 0;
											do {
												a[(e + (i << 2)) >> 2] = 1;
												i = (i + 1) | 0;
											} while ((i | 0) != (v | 0));
										}
										l = ((n - b) | 0) >>> 1;
										d = ((t - b) | 0) >>> 1;
										if (!g) {
											c = y;
											return;
										}
										v = b << 1;
										w = (v + -1) | 0;
										m = (n + -1) | 0;
										v = (1 - v) | 0;
										k = (t + -1) | 0;
										h = d;
										p = 0;
										f = l;
										t = l;
										u = d;
										r = l;
										s = (b + -1) | 0;
										i = d;
										while (1) {
											d = (e + (((ee(i, n) | 0) + r) << 2)) | 0;
											l = (a[d >> 2] | 0) == 1;
											o = l & 1;
											if (l) a[d >> 2] = 0;
											do
												if (!(((s | 0) == -1) & ((r | 0) == (f | 0)))) {
													if (((s | 0) == 1) & ((r | 0) == (t | 0))) {
														r = (t + 1) | 0;
														r = (r | 0) < (m | 0) ? r : m;
														d = h;
														l = f;
														t = r;
														s = 0;
														b = v;
														break;
													}
													if (((b | 0) == -1) & ((i | 0) == (u | 0))) {
														i = (u + -1) | 0;
														i = (i | 0) > 0 ? i : 0;
														d = h;
														l = f;
														u = i;
														s = v;
														b = 0;
														break;
													}
													if (((b | 0) == 1) & ((i | 0) == (h | 0))) {
														i = (h + 1) | 0;
														i = (i | 0) < (k | 0) ? i : k;
														d = i;
														l = f;
														s = w;
														b = 0;
														break;
													} else {
														d = h;
														l = f;
														r = (r + s) | 0;
														i = (i + b) | 0;
														break;
													}
												} else {
													r = (f + -1) | 0;
													r = (r | 0) > 0 ? r : 0;
													d = h;
													l = r;
													s = 0;
													b = w;
												}
											while (0);
											p = (o + p) | 0;
											if (p >>> 0 >= g >>> 0) break;
											else {
												h = d;
												f = l;
											}
										}
										c = y;
										return;
									}
									default: {
										if (!v) {
											c = y;
											return;
										}
										f = a[(r + 44) >> 2] | 0;
										o = 0;
										do {
											a[(e + (o << 2)) >> 2] = a[(f + (o << 2)) >> 2];
											o = (o + 1) | 0;
										} while ((o | 0) != (v | 0));
										c = y;
										return;
									}
								}
							}
							function vi() {
								return 3472;
							}
							function gi(e, r, i, n, t, f) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								n = n | 0;
								t = t | 0;
								f = f | 0;
								var o = 0,
									s = 0,
									u = 0;
								u = c;
								c = (c + 80) | 0;
								o = (u + 32) | 0;
								s = u;
								yi(i, o, s, n);
								if ((zr(a[e >> 2] | 0) | 0) == 1) {
									n = Bi(e, f, (r + 328) | 0, o, s, t) | 0;
									if (n) {
										c = u;
										return n | 0;
									}
								} else {
									n = Ai(e, f, r, o, s, t) | 0;
									if (n) {
										c = u;
										return n | 0;
									}
								}
								n =
									Ui(
										e,
										(f + 256) | 0,
										(r + 1352) | 0,
										(o + 21) | 0,
										(s + 16) | 0,
										a[(r + 140) >> 2] | 0,
										t
									) | 0;
								if (n) {
									c = u;
									return n | 0;
								}
								if ((a[(e + 196) >> 2] | 0) >>> 0 > 1) {
									n = 0;
									c = u;
									return n | 0;
								}
								er(i, f);
								n = 0;
								c = u;
								return n | 0;
							}
							function yi(e, r, i, t) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								t = t | 0;
								var f = 0,
									o = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0;
								m = c;
								if (!t) {
									c = m;
									return;
								}
								p = a[(e + 4) >> 2] | 0;
								k = ee(a[(e + 8) >> 2] | 0, p) | 0;
								d = ((t >>> 0) / (p >>> 0)) | 0;
								f = ee(d, p) | 0;
								h = (t - f) | 0;
								u = p << 4;
								o = a[e >> 2] | 0;
								s = ((h << 4) + (ee(p << 8, d) | 0)) | 0;
								w = (d | 0) != 0;
								if (w) {
									b = (s - (u | 1)) | 0;
									n[r >> 0] = n[(o + b) >> 0] | 0;
									n[(r + 1) >> 0] = n[(o + (b + 1)) >> 0] | 0;
									n[(r + 2) >> 0] = n[(o + (b + 2)) >> 0] | 0;
									n[(r + 3) >> 0] = n[(o + (b + 3)) >> 0] | 0;
									n[(r + 4) >> 0] = n[(o + (b + 4)) >> 0] | 0;
									n[(r + 5) >> 0] = n[(o + (b + 5)) >> 0] | 0;
									n[(r + 6) >> 0] = n[(o + (b + 6)) >> 0] | 0;
									n[(r + 7) >> 0] = n[(o + (b + 7)) >> 0] | 0;
									n[(r + 8) >> 0] = n[(o + (b + 8)) >> 0] | 0;
									n[(r + 9) >> 0] = n[(o + (b + 9)) >> 0] | 0;
									n[(r + 10) >> 0] = n[(o + (b + 10)) >> 0] | 0;
									n[(r + 11) >> 0] = n[(o + (b + 11)) >> 0] | 0;
									n[(r + 12) >> 0] = n[(o + (b + 12)) >> 0] | 0;
									n[(r + 13) >> 0] = n[(o + (b + 13)) >> 0] | 0;
									n[(r + 14) >> 0] = n[(o + (b + 14)) >> 0] | 0;
									n[(r + 15) >> 0] = n[(o + (b + 15)) >> 0] | 0;
									n[(r + 16) >> 0] = n[(o + (b + 16)) >> 0] | 0;
									n[(r + 17) >> 0] = n[(o + (b + 17)) >> 0] | 0;
									n[(r + 18) >> 0] = n[(o + (b + 18)) >> 0] | 0;
									n[(r + 19) >> 0] = n[(o + (b + 19)) >> 0] | 0;
									n[(r + 20) >> 0] = n[(o + (b + 20)) >> 0] | 0;
									b = (r + 21) | 0;
								} else b = r;
								l = (f | 0) != (t | 0);
								if (l) {
									s = (s + -1) | 0;
									n[i >> 0] = n[(o + s) >> 0] | 0;
									s = (s + u) | 0;
									n[(i + 1) >> 0] = n[(o + s) >> 0] | 0;
									s = (s + u) | 0;
									n[(i + 2) >> 0] = n[(o + s) >> 0] | 0;
									s = (s + u) | 0;
									n[(i + 3) >> 0] = n[(o + s) >> 0] | 0;
									s = (s + u) | 0;
									n[(i + 4) >> 0] = n[(o + s) >> 0] | 0;
									s = (s + u) | 0;
									n[(i + 5) >> 0] = n[(o + s) >> 0] | 0;
									s = (s + u) | 0;
									n[(i + 6) >> 0] = n[(o + s) >> 0] | 0;
									s = (s + u) | 0;
									n[(i + 7) >> 0] = n[(o + s) >> 0] | 0;
									s = (s + u) | 0;
									n[(i + 8) >> 0] = n[(o + s) >> 0] | 0;
									s = (s + u) | 0;
									n[(i + 9) >> 0] = n[(o + s) >> 0] | 0;
									s = (s + u) | 0;
									n[(i + 10) >> 0] = n[(o + s) >> 0] | 0;
									s = (s + u) | 0;
									n[(i + 11) >> 0] = n[(o + s) >> 0] | 0;
									s = (s + u) | 0;
									n[(i + 12) >> 0] = n[(o + s) >> 0] | 0;
									s = (s + u) | 0;
									n[(i + 13) >> 0] = n[(o + s) >> 0] | 0;
									s = (s + u) | 0;
									n[(i + 14) >> 0] = n[(o + s) >> 0] | 0;
									n[(i + 15) >> 0] = n[(o + (s + u)) >> 0] | 0;
									i = (i + 16) | 0;
								}
								r = (p << 3) & 2147483640;
								t = a[e >> 2] | 0;
								f = ((ee(d << 3, r) | 0) + (k << 8) + (h << 3)) | 0;
								if (w) {
									e = (f - (r | 1)) | 0;
									n[b >> 0] = n[(t + e) >> 0] | 0;
									n[(b + 1) >> 0] = n[(t + (e + 1)) >> 0] | 0;
									n[(b + 2) >> 0] = n[(t + (e + 2)) >> 0] | 0;
									n[(b + 3) >> 0] = n[(t + (e + 3)) >> 0] | 0;
									n[(b + 4) >> 0] = n[(t + (e + 4)) >> 0] | 0;
									n[(b + 5) >> 0] = n[(t + (e + 5)) >> 0] | 0;
									n[(b + 6) >> 0] = n[(t + (e + 6)) >> 0] | 0;
									n[(b + 7) >> 0] = n[(t + (e + 7)) >> 0] | 0;
									n[(b + 8) >> 0] = n[(t + (e + 8)) >> 0] | 0;
									e = (e + (k << 6)) | 0;
									n[(b + 9) >> 0] = n[(t + e) >> 0] | 0;
									n[(b + 10) >> 0] = n[(t + (e + 1)) >> 0] | 0;
									n[(b + 11) >> 0] = n[(t + (e + 2)) >> 0] | 0;
									n[(b + 12) >> 0] = n[(t + (e + 3)) >> 0] | 0;
									n[(b + 13) >> 0] = n[(t + (e + 4)) >> 0] | 0;
									n[(b + 14) >> 0] = n[(t + (e + 5)) >> 0] | 0;
									n[(b + 15) >> 0] = n[(t + (e + 6)) >> 0] | 0;
									n[(b + 16) >> 0] = n[(t + (e + 7)) >> 0] | 0;
									n[(b + 17) >> 0] = n[(t + (e + 8)) >> 0] | 0;
								}
								if (!l) {
									c = m;
									return;
								}
								b = (f + -1) | 0;
								n[i >> 0] = n[(t + b) >> 0] | 0;
								b = (b + r) | 0;
								n[(i + 1) >> 0] = n[(t + b) >> 0] | 0;
								b = (b + r) | 0;
								n[(i + 2) >> 0] = n[(t + b) >> 0] | 0;
								b = (b + r) | 0;
								n[(i + 3) >> 0] = n[(t + b) >> 0] | 0;
								b = (b + r) | 0;
								n[(i + 4) >> 0] = n[(t + b) >> 0] | 0;
								b = (b + r) | 0;
								n[(i + 5) >> 0] = n[(t + b) >> 0] | 0;
								b = (b + r) | 0;
								n[(i + 6) >> 0] = n[(t + b) >> 0] | 0;
								b = (b + r) | 0;
								n[(i + 7) >> 0] = n[(t + b) >> 0] | 0;
								b = (b + (r + ((k << 6) - (p << 6)))) | 0;
								n[(i + 8) >> 0] = n[(t + b) >> 0] | 0;
								b = (b + r) | 0;
								n[(i + 9) >> 0] = n[(t + b) >> 0] | 0;
								b = (b + r) | 0;
								n[(i + 10) >> 0] = n[(t + b) >> 0] | 0;
								b = (b + r) | 0;
								n[(i + 11) >> 0] = n[(t + b) >> 0] | 0;
								b = (b + r) | 0;
								n[(i + 12) >> 0] = n[(t + b) >> 0] | 0;
								b = (b + r) | 0;
								n[(i + 13) >> 0] = n[(t + b) >> 0] | 0;
								b = (b + r) | 0;
								n[(i + 14) >> 0] = n[(t + b) >> 0] | 0;
								n[(i + 15) >> 0] = n[(t + (b + r)) >> 0] | 0;
								c = m;
								return;
							}
							function Bi(e, r, i, t, o, s) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								t = t | 0;
								o = o | 0;
								s = s | 0;
								var u = 0,
									l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0,
									g = 0,
									y = 0,
									B = 0,
									A = 0,
									U = 0,
									S = 0;
								S = c;
								u = (e + 200) | 0;
								l = oi(e, a[u >> 2] | 0) | 0;
								h = (s | 0) != 0;
								if (((l | 0) != 0) & h) {
									d = (zr(a[a[u >> 2] >> 2] | 0) | 0) == 2;
									d = d ? 0 : l;
								} else d = l;
								s = (e + 204) | 0;
								l = oi(e, a[s >> 2] | 0) | 0;
								if (((l | 0) != 0) & h) {
									p = (zr(a[a[s >> 2] >> 2] | 0) | 0) == 2;
									p = p ? 0 : l;
								} else p = l;
								s = (e + 212) | 0;
								l = oi(e, a[s >> 2] | 0) | 0;
								if (((l | 0) != 0) & h) {
									w = (zr(a[a[s >> 2] >> 2] | 0) | 0) == 2;
									l = w ? 0 : l;
								}
								s = jr(a[e >> 2] | 0) | 0;
								if (!s) {
									if (!p) {
										w = 1;
										c = S;
										return w | 0;
									}
									e = (t + 1) | 0;
									b = (t + 2) | 0;
									m = (t + 3) | 0;
									v = (t + 4) | 0;
									g = (t + 5) | 0;
									y = (t + 6) | 0;
									B = (t + 7) | 0;
									A = (t + 8) | 0;
									U = (t + 9) | 0;
									o = (t + 10) | 0;
									l = (t + 11) | 0;
									s = (t + 12) | 0;
									u = (t + 13) | 0;
									k = (t + 14) | 0;
									w = (t + 15) | 0;
									p = (t + 16) | 0;
									h = r;
									d = 0;
									while (1) {
										n[h >> 0] = n[e >> 0] | 0;
										n[(h + 1) >> 0] = n[b >> 0] | 0;
										n[(h + 2) >> 0] = n[m >> 0] | 0;
										n[(h + 3) >> 0] = n[v >> 0] | 0;
										n[(h + 4) >> 0] = n[g >> 0] | 0;
										n[(h + 5) >> 0] = n[y >> 0] | 0;
										n[(h + 6) >> 0] = n[B >> 0] | 0;
										n[(h + 7) >> 0] = n[A >> 0] | 0;
										n[(h + 8) >> 0] = n[U >> 0] | 0;
										n[(h + 9) >> 0] = n[o >> 0] | 0;
										n[(h + 10) >> 0] = n[l >> 0] | 0;
										n[(h + 11) >> 0] = n[s >> 0] | 0;
										n[(h + 12) >> 0] = n[u >> 0] | 0;
										n[(h + 13) >> 0] = n[k >> 0] | 0;
										n[(h + 14) >> 0] = n[w >> 0] | 0;
										n[(h + 15) >> 0] = n[p >> 0] | 0;
										d = (d + 1) | 0;
										if ((d | 0) == 16) break;
										else h = (h + 16) | 0;
									}
								} else if ((s | 0) == 2) {
									l = (t + 1) | 0;
									u = (d | 0) != 0;
									s = (p | 0) != 0;
									do
										if (!(u & s)) {
											if (u) {
												u =
													(((f[o >> 0] | 0) +
														8 +
														(f[(o + 1) >> 0] | 0) +
														(f[(o + 2) >> 0] | 0) +
														(f[(o + 3) >> 0] | 0) +
														(f[(o + 4) >> 0] | 0) +
														(f[(o + 5) >> 0] | 0) +
														(f[(o + 6) >> 0] | 0) +
														(f[(o + 7) >> 0] | 0) +
														(f[(o + 8) >> 0] | 0) +
														(f[(o + 9) >> 0] | 0) +
														(f[(o + 10) >> 0] | 0) +
														(f[(o + 11) >> 0] | 0) +
														(f[(o + 12) >> 0] | 0) +
														(f[(o + 13) >> 0] | 0) +
														(f[(o + 14) >> 0] | 0) +
														(f[(o + 15) >> 0] | 0)) |
														0) >>>
													4;
												break;
											}
											if (s)
												u =
													(((f[l >> 0] | 0) +
														8 +
														(f[(t + 2) >> 0] | 0) +
														(f[(t + 3) >> 0] | 0) +
														(f[(t + 4) >> 0] | 0) +
														(f[(t + 5) >> 0] | 0) +
														(f[(t + 6) >> 0] | 0) +
														(f[(t + 7) >> 0] | 0) +
														(f[(t + 8) >> 0] | 0) +
														(f[(t + 9) >> 0] | 0) +
														(f[(t + 10) >> 0] | 0) +
														(f[(t + 11) >> 0] | 0) +
														(f[(t + 12) >> 0] | 0) +
														(f[(t + 13) >> 0] | 0) +
														(f[(t + 14) >> 0] | 0) +
														(f[(t + 15) >> 0] | 0) +
														(f[(t + 16) >> 0] | 0)) |
														0) >>>
													4;
											else u = 128;
										} else {
											s = 0;
											u = 0;
											do {
												w = s;
												s = (s + 1) | 0;
												u =
													((f[(t + s) >> 0] | 0) + u + (f[(o + w) >> 0] | 0)) |
													0;
											} while ((s | 0) != 16);
											u = ((u + 16) | 0) >>> 5;
										}
									while (0);
									kn(r | 0, (u & 255) | 0, 256) | 0;
								} else if ((s | 0) == 1)
									if (!d) {
										w = 1;
										c = S;
										return w | 0;
									} else {
										u = r;
										s = 0;
										while (1) {
											w = (o + s) | 0;
											n[u >> 0] = n[w >> 0] | 0;
											n[(u + 1) >> 0] = n[w >> 0] | 0;
											n[(u + 2) >> 0] = n[w >> 0] | 0;
											n[(u + 3) >> 0] = n[w >> 0] | 0;
											n[(u + 4) >> 0] = n[w >> 0] | 0;
											n[(u + 5) >> 0] = n[w >> 0] | 0;
											n[(u + 6) >> 0] = n[w >> 0] | 0;
											n[(u + 7) >> 0] = n[w >> 0] | 0;
											n[(u + 8) >> 0] = n[w >> 0] | 0;
											n[(u + 9) >> 0] = n[w >> 0] | 0;
											n[(u + 10) >> 0] = n[w >> 0] | 0;
											n[(u + 11) >> 0] = n[w >> 0] | 0;
											n[(u + 12) >> 0] = n[w >> 0] | 0;
											n[(u + 13) >> 0] = n[w >> 0] | 0;
											n[(u + 14) >> 0] = n[w >> 0] | 0;
											n[(u + 15) >> 0] = n[w >> 0] | 0;
											s = (s + 1) | 0;
											if ((s | 0) == 16) break;
											else u = (u + 16) | 0;
										}
									}
								else {
									if (!(((d | 0) != 0) & ((p | 0) != 0) & ((l | 0) != 0))) {
										w = 1;
										c = S;
										return w | 0;
									}
									s = f[(t + 16) >> 0] | 0;
									b = f[(o + 15) >> 0] | 0;
									h = f[t >> 0] | 0;
									p =
										((((((f[(t + 9) >> 0] | 0) -
											(f[(t + 7) >> 0] | 0) +
											(((f[(t + 10) >> 0] | 0) - (f[(t + 6) >> 0] | 0)) << 1) +
											(((((f[(t + 11) >> 0] | 0) - (f[(t + 5) >> 0] | 0)) | 0) *
												3) |
												0) +
											(((f[(t + 12) >> 0] | 0) - (f[(t + 4) >> 0] | 0)) << 2) +
											(((((f[(t + 13) >> 0] | 0) - (f[(t + 3) >> 0] | 0)) | 0) *
												5) |
												0) +
											(((((f[(t + 14) >> 0] | 0) - (f[(t + 2) >> 0] | 0)) | 0) *
												6) |
												0) +
											(((((f[(t + 15) >> 0] | 0) - (f[(t + 1) >> 0] | 0)) | 0) *
												7) |
												0) +
											((s - h) << 3)) |
											0) *
											5) |
											0) +
											32) >>
										6;
									h =
										((((((f[(o + 8) >> 0] | 0) -
											(f[(o + 6) >> 0] | 0) +
											((b - h) << 3) +
											(((f[(o + 9) >> 0] | 0) - (f[(o + 5) >> 0] | 0)) << 1) +
											(((((f[(o + 10) >> 0] | 0) - (f[(o + 4) >> 0] | 0)) | 0) *
												3) |
												0) +
											(((f[(o + 11) >> 0] | 0) - (f[(o + 3) >> 0] | 0)) << 2) +
											(((((f[(o + 12) >> 0] | 0) - (f[(o + 2) >> 0] | 0)) | 0) *
												5) |
												0) +
											(((((f[(o + 13) >> 0] | 0) - (f[(o + 1) >> 0] | 0)) | 0) *
												6) |
												0) +
											(((((f[(o + 14) >> 0] | 0) - (f[o >> 0] | 0)) | 0) * 7) |
												0)) |
											0) *
											5) |
											0) +
											32) >>
										6;
									s = (((b + s) << 4) + 16) | 0;
									b = 0;
									do {
										u = (s + (ee((b + -7) | 0, h) | 0)) | 0;
										d = b << 4;
										e = 0;
										do {
											l = (u + (ee((e + -7) | 0, p) | 0)) >> 5;
											if ((l | 0) < 0) l = 0;
											else l = (l | 0) > 255 ? -1 : l & 255;
											n[(r + (e + d)) >> 0] = l;
											e = (e + 1) | 0;
										} while ((e | 0) != 16);
										b = (b + 1) | 0;
									} while ((b | 0) != 16);
								}
								Si(r, i, 0);
								Si(r, (i + 64) | 0, 1);
								Si(r, (i + 128) | 0, 2);
								Si(r, (i + 192) | 0, 3);
								Si(r, (i + 256) | 0, 4);
								Si(r, (i + 320) | 0, 5);
								Si(r, (i + 384) | 0, 6);
								Si(r, (i + 448) | 0, 7);
								Si(r, (i + 512) | 0, 8);
								Si(r, (i + 576) | 0, 9);
								Si(r, (i + 640) | 0, 10);
								Si(r, (i + 704) | 0, 11);
								Si(r, (i + 768) | 0, 12);
								Si(r, (i + 832) | 0, 13);
								Si(r, (i + 896) | 0, 14);
								Si(r, (i + 960) | 0, 15);
								w = 0;
								c = S;
								return w | 0;
							}
							function Ai(e, r, i, t, o, s) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								t = t | 0;
								o = o | 0;
								s = s | 0;
								var u = 0,
									l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0,
									g = 0,
									y = 0,
									B = 0,
									A = 0,
									U = 0,
									S = 0,
									_ = 0,
									M = 0,
									E = 0,
									F = 0,
									L = 0,
									C = 0,
									D = 0,
									P = 0,
									R = 0,
									O = 0,
									I = 0,
									T = 0,
									z = 0,
									N = 0;
								N = c;
								z = (s | 0) != 0;
								T = 0;
								e: while (1) {
									l = ni(T) | 0;
									d = a[(l + 4) >> 2] | 0;
									l = ii(e, a[l >> 2] | 0) | 0;
									s = oi(e, l) | 0;
									if (((s | 0) != 0) & z) {
										L = (zr(a[l >> 2] | 0) | 0) == 2;
										s = L ? 0 : s;
									}
									h = ti(T) | 0;
									b = a[(h + 4) >> 2] | 0;
									h = ii(e, a[h >> 2] | 0) | 0;
									u = oi(e, h) | 0;
									if (((u | 0) != 0) & z) {
										L = (zr(a[h >> 2] | 0) | 0) == 2;
										u = L ? 0 : u;
									}
									D = (s | 0) != 0;
									P = (u | 0) != 0;
									R = D & P;
									if (R) {
										if (!(zr(a[l >> 2] | 0) | 0))
											d = f[(l + (d & 255) + 82) >> 0] | 0;
										else d = 2;
										if (!(zr(a[h >> 2] | 0) | 0))
											s = f[(h + (b & 255) + 82) >> 0] | 0;
										else s = 2;
										s = d >>> 0 < s >>> 0 ? d : s;
									} else s = 2;
									if (!(a[(i + (T << 2) + 12) >> 2] | 0)) {
										L = a[(i + (T << 2) + 76) >> 2] | 0;
										s = (((L >>> 0 >= s >>> 0) & 1) + L) | 0;
									}
									n[(e + T + 82) >> 0] = s;
									l = a[(ai(T) | 0) >> 2] | 0;
									l = ii(e, l) | 0;
									b = oi(e, l) | 0;
									if (((b | 0) != 0) & z) {
										L = (zr(a[l >> 2] | 0) | 0) == 2;
										b = L ? 0 : b;
									}
									l = a[(fi(T) | 0) >> 2] | 0;
									l = ii(e, l) | 0;
									d = oi(e, l) | 0;
									if (((d | 0) != 0) & z) {
										L = (zr(a[l >> 2] | 0) | 0) == 2;
										d = L ? 0 : d;
									}
									O = a[(3344 + (T << 2)) >> 2] | 0;
									I = a[(3408 + (T << 2)) >> 2] | 0;
									w = (((1285 >>> T) & 1) | 0) != 0;
									if (w) {
										h = (o + I) | 0;
										l = (o + (I + 1)) | 0;
										p = (o + (I + 2)) | 0;
										k = (o + (I + 3)) | 0;
									} else {
										k = ((I << 4) + O) | 0;
										h = (r + (k + -1)) | 0;
										l = (r + (k + 15)) | 0;
										p = (r + (k + 31)) | 0;
										k = (r + (k + 47)) | 0;
									}
									_ = n[h >> 0] | 0;
									U = n[l >> 0] | 0;
									C = n[p >> 0] | 0;
									L = n[k >> 0] | 0;
									do
										if (!((51 >>> T) & 1)) {
											A = (I + -1) | 0;
											B = ((A << 4) + O) | 0;
											h = n[(r + B) >> 0] | 0;
											k = n[(r + (B + 1)) >> 0] | 0;
											m = n[(r + (B + 2)) >> 0] | 0;
											g = n[(r + (B + 3)) >> 0] | 0;
											v = n[(r + (B + 4)) >> 0] | 0;
											l = n[(r + (B + 5)) >> 0] | 0;
											y = n[(r + (B + 6)) >> 0] | 0;
											p = n[(r + (B + 7)) >> 0] | 0;
											if (w) {
												F = y;
												E = g;
												g = p;
												M = k;
												S = m;
												y = (o + A) | 0;
												break;
											} else {
												F = y;
												E = g;
												g = p;
												M = k;
												S = m;
												y = (r + (B + -1)) | 0;
												break;
											}
										} else {
											F = n[(t + (O + 7)) >> 0] | 0;
											E = n[(t + (O + 4)) >> 0] | 0;
											v = n[(t + (O + 5)) >> 0] | 0;
											l = n[(t + (O + 6)) >> 0] | 0;
											h = n[(t + (O + 1)) >> 0] | 0;
											g = n[(t + (O + 8)) >> 0] | 0;
											M = n[(t + (O + 2)) >> 0] | 0;
											S = n[(t + (O + 3)) >> 0] | 0;
											y = (t + O) | 0;
										}
									while (0);
									y = n[y >> 0] | 0;
									switch (s | 0) {
										case 4: {
											if (!(R & ((d | 0) != 0))) {
												u = 1;
												s = 51;
												break e;
											}
											s = h & 255;
											h = y & 255;
											k = _ & 255;
											m = (s + 2) | 0;
											F = ((m + k + (h << 1)) | 0) >>> 2;
											g = F & 255;
											u = M & 255;
											h = (h + 2) | 0;
											y = ((((s << 1) + u + h) | 0) >>> 2) & 255;
											s = S & 255;
											m = ((((u << 1) + s + m) | 0) >>> 2) & 255;
											S = U & 255;
											h = ((S + (k << 1) + h) | 0) >>> 2;
											v = h & 255;
											_ = C & 255;
											M = ((k + 2 + (S << 1) + _) | 0) >>> 2;
											k = g;
											p = v;
											d = M & 255;
											b = y;
											l = m;
											s = ((((E & 255) + 2 + u + (s << 1)) | 0) >>> 2) & 255;
											u = g;
											w = y;
											h =
												((((S + 2 + (_ << 1) + (L & 255)) | 0) >>> 2) & 255) |
												((M << 8) & 65280) |
												(F << 24) |
												((h << 16) & 16711680);
											break;
										}
										case 6: {
											if (!(R & ((d | 0) != 0))) {
												u = 1;
												s = 51;
												break e;
											}
											l = y & 255;
											m = _ & 255;
											g = (m + 1) | 0;
											w = (((g + l) | 0) >>> 1) & 255;
											E = U & 255;
											y = ((((m << 1) + 2 + E + l) | 0) >>> 2) & 255;
											g = (((g + E) | 0) >>> 1) & 255;
											F = C & 255;
											m = (m + 2) | 0;
											U = ((m + (E << 1) + F) | 0) >>> 2;
											_ = ((E + 1 + F) | 0) >>> 1;
											L = L & 255;
											s = h & 255;
											m = (((m + s + (l << 1)) | 0) >>> 2) & 255;
											u = M & 255;
											k = w;
											p = g;
											d = _ & 255;
											b = m;
											l = (((u + 2 + (s << 1) + l) | 0) >>> 2) & 255;
											s = ((((S & 255) + 2 + (u << 1) + s) | 0) >>> 2) & 255;
											u = y;
											v = U & 255;
											h =
												(U << 24) |
												((_ << 16) & 16711680) |
												((((F + 1 + L) | 0) >>> 1) & 255) |
												(((E + 2 + (F << 1) + L) << 6) & 65280);
											break;
										}
										case 2: {
											do
												if (!R) {
													if (D) {
														s =
															(((_ & 255) +
																2 +
																(U & 255) +
																(C & 255) +
																(L & 255)) |
																0) >>>
															2;
														break;
													}
													if (P)
														s =
															(((E & 255) +
																2 +
																(S & 255) +
																(M & 255) +
																(h & 255)) |
																0) >>>
															2;
													else s = 128;
												} else
													s =
														(((_ & 255) +
															4 +
															(U & 255) +
															(C & 255) +
															(L & 255) +
															(E & 255) +
															(S & 255) +
															(M & 255) +
															(h & 255)) |
															0) >>>
														3;
											while (0);
											h = ee(s & 255, 16843009) | 0;
											d = h & 255;
											v = (h >>> 8) & 255;
											g = (h >>> 16) & 255;
											y = (h >>> 24) & 255;
											k = d;
											p = d;
											b = v;
											l = g;
											s = y;
											u = v;
											w = g;
											m = y;
											break;
										}
										case 0: {
											if (!u) {
												u = 1;
												s = 51;
												break e;
											}
											k = h;
											p = h;
											d = h;
											b = M;
											l = S;
											s = E;
											u = M;
											w = S;
											m = E;
											v = M;
											g = S;
											y = E;
											h =
												((S & 255) << 16) |
												((E & 255) << 24) |
												((M & 255) << 8) |
												(h & 255);
											break;
										}
										case 1: {
											if (!D) {
												u = 1;
												s = 51;
												break e;
											}
											s = ee(_ & 255, 16843009) | 0;
											m = ee(U & 255, 16843009) | 0;
											y = ee(C & 255, 16843009) | 0;
											k = s & 255;
											p = m & 255;
											d = y & 255;
											b = (s >>> 8) & 255;
											l = (s >>> 16) & 255;
											s = (s >>> 24) & 255;
											u = (m >>> 8) & 255;
											w = (m >>> 16) & 255;
											m = (m >>> 24) & 255;
											v = (y >>> 8) & 255;
											g = (y >>> 16) & 255;
											y = (y >>> 24) & 255;
											h = ee(L & 255, 16843009) | 0;
											break;
										}
										case 7: {
											if (!u) {
												u = 1;
												s = 51;
												break e;
											}
											_ = (b | 0) == 0;
											d = h & 255;
											p = M & 255;
											S = S & 255;
											b = (((S + 1 + p) | 0) >>> 1) & 255;
											h = E & 255;
											g = (h + 1) | 0;
											y = (((g + S) | 0) >>> 1) & 255;
											M = (_ ? E : v) & 255;
											g = (((g + M) | 0) >>> 1) & 255;
											s = (S + 2) | 0;
											U = (h + 2) | 0;
											S = ((U + p + (S << 1)) | 0) >>> 2;
											h = ((s + (h << 1) + M) | 0) >>> 2;
											L = (_ ? E : l) & 255;
											U = ((U + L + (M << 1)) | 0) >>> 2;
											k = (((p + 1 + d) | 0) >>> 1) & 255;
											p = (((s + d + (p << 1)) | 0) >>> 2) & 255;
											d = b;
											l = y;
											s = g;
											u = S & 255;
											w = h & 255;
											m = U & 255;
											v = y;
											y = (((M + 1 + L) | 0) >>> 1) & 255;
											h =
												((U << 16) & 16711680) |
												(S & 255) |
												((((M + 2 + ((_ ? E : F) & 255) + (L << 1)) | 0) >>>
													2) <<
													24) |
												((h << 8) & 65280);
											break;
										}
										case 3: {
											if (!u) {
												u = 1;
												s = 51;
												break e;
											}
											d = (b | 0) == 0;
											k = M & 255;
											b = S & 255;
											p = (b + 2) | 0;
											u = E & 255;
											M = (u + 2) | 0;
											b = (((M + k + (b << 1)) | 0) >>> 2) & 255;
											y = (d ? E : v) & 255;
											u = (((p + (u << 1) + y) | 0) >>> 2) & 255;
											L = (d ? E : l) & 255;
											M = ((M + L + (y << 1)) | 0) >>> 2;
											v = M & 255;
											_ = (d ? E : F) & 255;
											F = ((y + 2 + _ + (L << 1)) | 0) >>> 2;
											y = F & 255;
											E = (d ? E : g) & 255;
											L = ((L + 2 + E + (_ << 1)) | 0) >>> 2;
											k = (((p + (h & 255) + (k << 1)) | 0) >>> 2) & 255;
											p = b;
											d = u;
											l = u;
											s = v;
											w = v;
											m = y;
											g = y;
											y = L & 255;
											h =
												((((_ + 2 + ((E * 3) | 0)) | 0) >>> 2) << 24) |
												(M & 255) |
												((F << 8) & 65280) |
												((L << 16) & 16711680);
											break;
										}
										case 5: {
											if (!(R & ((d | 0) != 0))) {
												u = 1;
												s = 51;
												break e;
											}
											d = y & 255;
											g = h & 255;
											v = (((g + 1 + d) | 0) >>> 1) & 255;
											A = M & 255;
											L = ((A + 2 + (g << 1) + d) | 0) >>> 2;
											M = _ & 255;
											_ = (g + 2) | 0;
											h = ((_ + M + (d << 1)) | 0) >>> 2;
											g = (((A + 1 + g) | 0) >>> 1) & 255;
											m = S & 255;
											_ = (((A << 1) + m + _) | 0) >>> 2;
											y = (((m + 1 + A) | 0) >>> 1) & 255;
											E = E & 255;
											F = U & 255;
											k = v;
											p = h & 255;
											d = (((F + 2 + (M << 1) + d) | 0) >>> 2) & 255;
											b = g;
											l = y;
											s = (((E + 1 + m) | 0) >>> 1) & 255;
											u = L & 255;
											w = _ & 255;
											m = (((E + 2 + A + (m << 1)) | 0) >>> 2) & 255;
											h =
												(_ << 24) |
												((((M + 2 + (C & 255) + (F << 1)) | 0) >>> 2) & 255) |
												((L << 16) & 16711680) |
												((h << 8) & 65280);
											break;
										}
										default: {
											if (!D) {
												u = 1;
												s = 51;
												break e;
											}
											m = _ & 255;
											s = U & 255;
											b = C & 255;
											l = (((s + 1 + b) | 0) >>> 1) & 255;
											h = L & 255;
											u = (((s + 2 + (b << 1) + h) | 0) >>> 2) & 255;
											w = (((b + 1 + h) | 0) >>> 1) & 255;
											v = (((b + 2 + ((h * 3) | 0)) | 0) >>> 2) & 255;
											k = (((m + 1 + s) | 0) >>> 1) & 255;
											p = l;
											d = w;
											b = (((m + 2 + (s << 1) + b) | 0) >>> 2) & 255;
											s = u;
											m = v;
											g = L;
											y = L;
											h = (h << 8) | h | (h << 16) | (h << 24);
										}
									}
									L = ((I << 4) + O) | 0;
									a[(r + L) >> 2] =
										((l & 255) << 16) |
										((s & 255) << 24) |
										((b & 255) << 8) |
										(k & 255);
									a[(r + (L + 16)) >> 2] =
										((w & 255) << 16) |
										((m & 255) << 24) |
										((u & 255) << 8) |
										(p & 255);
									a[(r + (L + 32)) >> 2] =
										((g & 255) << 16) |
										((y & 255) << 24) |
										((v & 255) << 8) |
										(d & 255);
									a[(r + (L + 48)) >> 2] = h;
									Si(r, (i + (T << 6) + 328) | 0, T);
									T = (T + 1) | 0;
									if (T >>> 0 >= 16) {
										u = 0;
										s = 51;
										break;
									}
								}
								if ((s | 0) == 51) {
									c = N;
									return u | 0;
								}
								return 0;
							}
							function Ui(e, r, i, t, o, s, u) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								t = t | 0;
								o = o | 0;
								s = s | 0;
								u = u | 0;
								var l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0,
									g = 0,
									y = 0,
									B = 0,
									A = 0,
									U = 0;
								U = c;
								b = (e + 200) | 0;
								l = oi(e, a[b >> 2] | 0) | 0;
								d = (u | 0) != 0;
								if (((l | 0) != 0) & d) {
									h = (zr(a[a[b >> 2] >> 2] | 0) | 0) == 2;
									l = h ? 0 : l;
								}
								b = (e + 204) | 0;
								u = oi(e, a[b >> 2] | 0) | 0;
								if (((u | 0) != 0) & d) {
									h = (zr(a[a[b >> 2] >> 2] | 0) | 0) == 2;
									h = h ? 0 : u;
								} else h = u;
								b = (e + 212) | 0;
								u = oi(e, a[b >> 2] | 0) | 0;
								if (((u | 0) != 0) & d) {
									d = (zr(a[a[b >> 2] >> 2] | 0) | 0) == 2;
									u = d ? 0 : u;
								}
								B = (l | 0) != 0;
								A = (h | 0) != 0;
								y = B & A;
								g = y & ((u | 0) != 0);
								v = (l | 0) == 0;
								m = (h | 0) == 0;
								p = t;
								k = 16;
								w = 0;
								while (1) {
									if ((s | 0) == 1) {
										if (v) {
											l = 1;
											u = 29;
											break;
										} else {
											d = r;
											e = 8;
											b = o;
										}
										while (1) {
											e = (e + -1) | 0;
											n[d >> 0] = n[b >> 0] | 0;
											n[(d + 1) >> 0] = n[b >> 0] | 0;
											n[(d + 2) >> 0] = n[b >> 0] | 0;
											n[(d + 3) >> 0] = n[b >> 0] | 0;
											n[(d + 4) >> 0] = n[b >> 0] | 0;
											n[(d + 5) >> 0] = n[b >> 0] | 0;
											n[(d + 6) >> 0] = n[b >> 0] | 0;
											n[(d + 7) >> 0] = n[b >> 0] | 0;
											if (!e) break;
											else {
												d = (d + 8) | 0;
												b = (b + 1) | 0;
											}
										}
									} else if ((s | 0) == 2) {
										if (m) {
											l = 1;
											u = 29;
											break;
										} else {
											d = p;
											e = r;
											b = 8;
										}
										while (1) {
											d = (d + 1) | 0;
											b = (b + -1) | 0;
											n[e >> 0] = n[d >> 0] | 0;
											n[(e + 8) >> 0] = n[d >> 0] | 0;
											n[(e + 16) >> 0] = n[d >> 0] | 0;
											n[(e + 24) >> 0] = n[d >> 0] | 0;
											n[(e + 32) >> 0] = n[d >> 0] | 0;
											n[(e + 40) >> 0] = n[d >> 0] | 0;
											n[(e + 48) >> 0] = n[d >> 0] | 0;
											n[(e + 56) >> 0] = n[d >> 0] | 0;
											if (!b) break;
											else e = (e + 1) | 0;
										}
									} else if (!s) {
										b = (p + 1) | 0;
										do
											if (!y) {
												if (A) {
													d =
														(((f[b >> 0] | 0) +
															2 +
															(f[(p + 2) >> 0] | 0) +
															(f[(p + 3) >> 0] | 0) +
															(f[(p + 4) >> 0] | 0)) |
															0) >>>
														2;
													e =
														(((f[(p + 5) >> 0] | 0) +
															2 +
															(f[(p + 6) >> 0] | 0) +
															(f[(p + 7) >> 0] | 0) +
															(f[(p + 8) >> 0] | 0)) |
															0) >>>
														2;
													break;
												}
												if (B) {
													e =
														(((f[o >> 0] | 0) +
															2 +
															(f[(o + 1) >> 0] | 0) +
															(f[(o + 2) >> 0] | 0) +
															(f[(o + 3) >> 0] | 0)) |
															0) >>>
														2;
													d = e;
												} else {
													d = 128;
													e = 128;
												}
											} else {
												d =
													(((f[b >> 0] | 0) +
														4 +
														(f[(p + 2) >> 0] | 0) +
														(f[(p + 3) >> 0] | 0) +
														(f[(p + 4) >> 0] | 0) +
														(f[o >> 0] | 0) +
														(f[(o + 1) >> 0] | 0) +
														(f[(o + 2) >> 0] | 0) +
														(f[(o + 3) >> 0] | 0)) |
														0) >>>
													3;
												e =
													(((f[(p + 5) >> 0] | 0) +
														2 +
														(f[(p + 6) >> 0] | 0) +
														(f[(p + 7) >> 0] | 0) +
														(f[(p + 8) >> 0] | 0)) |
														0) >>>
													2;
											}
										while (0);
										d = d & 255;
										h = e & 255;
										kn(r | 0, d | 0, 4) | 0;
										kn((r + 4) | 0, h | 0, 4) | 0;
										kn((r + 8) | 0, d | 0, 4) | 0;
										kn((r + 12) | 0, h | 0, 4) | 0;
										kn((r + 16) | 0, d | 0, 4) | 0;
										kn((r + 20) | 0, h | 0, 4) | 0;
										t = (r + 32) | 0;
										kn((r + 24) | 0, d | 0, 4) | 0;
										kn((r + 28) | 0, h | 0, 4) | 0;
										if (B) {
											h = f[(o + 4) >> 0] | 0;
											d = f[(o + 5) >> 0] | 0;
											e = f[(o + 6) >> 0] | 0;
											b = f[(o + 7) >> 0] | 0;
											u = ((h + 2 + d + e + b) | 0) >>> 2;
											if (A) {
												l = u;
												d =
													((h +
														4 +
														d +
														e +
														b +
														(f[(p + 5) >> 0] | 0) +
														(f[(p + 6) >> 0] | 0) +
														(f[(p + 7) >> 0] | 0) +
														(f[(p + 8) >> 0] | 0)) |
														0) >>>
													3;
											} else {
												l = u;
												d = u;
											}
										} else if (A) {
											l =
												(((f[b >> 0] | 0) +
													2 +
													(f[(p + 2) >> 0] | 0) +
													(f[(p + 3) >> 0] | 0) +
													(f[(p + 4) >> 0] | 0)) |
													0) >>>
												2;
											d =
												(((f[(p + 5) >> 0] | 0) +
													2 +
													(f[(p + 6) >> 0] | 0) +
													(f[(p + 7) >> 0] | 0) +
													(f[(p + 8) >> 0] | 0)) |
													0) >>>
												2;
										} else {
											l = 128;
											d = 128;
										}
										e = l & 255;
										h = d & 255;
										kn(t | 0, e | 0, 4) | 0;
										kn((r + 36) | 0, h | 0, 4) | 0;
										kn((r + 40) | 0, e | 0, 4) | 0;
										kn((r + 44) | 0, h | 0, 4) | 0;
										kn((r + 48) | 0, e | 0, 4) | 0;
										kn((r + 52) | 0, h | 0, 4) | 0;
										kn((r + 56) | 0, e | 0, 4) | 0;
										kn((r + 60) | 0, h | 0, 4) | 0;
									} else {
										if (!g) {
											l = 1;
											u = 29;
											break;
										}
										d = f[(p + 8) >> 0] | 0;
										e = f[(o + 7) >> 0] | 0;
										l = f[p >> 0] | 0;
										u =
											((((((f[(p + 5) >> 0] | 0) -
												(f[(p + 3) >> 0] | 0) +
												(((f[(p + 6) >> 0] | 0) - (f[(p + 2) >> 0] | 0)) << 1) +
												(((((f[(p + 7) >> 0] | 0) - (f[(p + 1) >> 0] | 0)) |
													0) *
													3) |
													0) +
												((d - l) << 2)) |
												0) *
												17) |
												0) +
												16) >>
											5;
										l =
											((((((f[(o + 4) >> 0] | 0) -
												(f[(o + 2) >> 0] | 0) +
												((e - l) << 2) +
												(((f[(o + 5) >> 0] | 0) - (f[(o + 1) >> 0] | 0)) << 1) +
												(((((f[(o + 6) >> 0] | 0) - (f[o >> 0] | 0)) | 0) * 3) |
													0)) |
												0) *
												17) |
												0) +
												16) >>
											5;
										h = ee(u, -3) | 0;
										d = (((e + d) << 4) + 16 + (ee(l, -3) | 0)) | 0;
										e = r;
										b = 8;
										while (1) {
											b = (b + -1) | 0;
											t = (d + h) | 0;
											n[e >> 0] = n[((t >> 5) + 3984) >> 0] | 0;
											t = (t + u) | 0;
											n[(e + 1) >> 0] = n[((t >> 5) + 3984) >> 0] | 0;
											t = (t + u) | 0;
											n[(e + 2) >> 0] = n[((t >> 5) + 3984) >> 0] | 0;
											t = (t + u) | 0;
											n[(e + 3) >> 0] = n[((t >> 5) + 3984) >> 0] | 0;
											t = (t + u) | 0;
											n[(e + 4) >> 0] = n[((t >> 5) + 3984) >> 0] | 0;
											t = (t + u) | 0;
											n[(e + 5) >> 0] = n[((t >> 5) + 3984) >> 0] | 0;
											t = (t + u) | 0;
											n[(e + 6) >> 0] = n[((t >> 5) + 3984) >> 0] | 0;
											n[(e + 7) >> 0] = n[(((t + u) >> 5) + 3984) >> 0] | 0;
											if (!b) break;
											else {
												d = (d + l) | 0;
												e = (e + 8) | 0;
											}
										}
									}
									Si(r, i, k);
									t = k | 1;
									Si(r, (i + 64) | 0, t);
									Si(r, (i + 128) | 0, (t + 1) | 0);
									Si(r, (i + 192) | 0, k | 3);
									w = (w + 1) | 0;
									if (w >>> 0 >= 2) {
										l = 0;
										u = 29;
										break;
									} else {
										p = (p + 9) | 0;
										k = (k + 4) | 0;
										r = (r + 64) | 0;
										o = (o + 8) | 0;
										i = (i + 256) | 0;
									}
								}
								if ((u | 0) == 29) {
									c = U;
									return l | 0;
								}
								return 0;
							}
							function Si(e, r, i) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								var t = 0,
									o = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0;
								o = c;
								t = a[r >> 2] | 0;
								if ((t | 0) == 16777215) {
									c = o;
									return;
								}
								b = i >>> 0 < 16;
								l = b ? 16 : 8;
								b = b ? i : i & 3;
								b =
									((ee(a[(3408 + (b << 2)) >> 2] | 0, l) | 0) +
										(a[(3344 + (b << 2)) >> 2] | 0)) |
									0;
								d = (e + b) | 0;
								p = a[(r + 4) >> 2] | 0;
								s = (e + (b + 1)) | 0;
								i = f[s >> 0] | 0;
								n[d >> 0] = n[(3472 + (t + 512 + (f[d >> 0] | 0))) >> 0] | 0;
								d = a[(r + 8) >> 2] | 0;
								u = (e + (b + 2)) | 0;
								h = f[u >> 0] | 0;
								n[s >> 0] = n[(3472 + (p + 512 + i)) >> 0] | 0;
								t = (e + (b + 3)) | 0;
								s =
									n[
										(3472 + ((a[(r + 12) >> 2] | 0) + 512 + (f[t >> 0] | 0))) >>
											0
									] | 0;
								n[u >> 0] = n[(3472 + (d + 512 + h)) >> 0] | 0;
								n[t >> 0] = s;
								t = (b + l) | 0;
								b = (e + t) | 0;
								s = a[(r + 20) >> 2] | 0;
								u = (e + (t + 1)) | 0;
								h = f[u >> 0] | 0;
								n[b >> 0] =
									n[
										(3472 + ((a[(r + 16) >> 2] | 0) + 512 + (f[b >> 0] | 0))) >>
											0
									] | 0;
								b = a[(r + 24) >> 2] | 0;
								d = (e + (t + 2)) | 0;
								i = f[d >> 0] | 0;
								n[u >> 0] = n[(3472 + (s + 512 + h)) >> 0] | 0;
								u = (e + (t + 3)) | 0;
								h =
									n[
										(3472 + ((a[(r + 28) >> 2] | 0) + 512 + (f[u >> 0] | 0))) >>
											0
									] | 0;
								n[d >> 0] = n[(3472 + (b + 512 + i)) >> 0] | 0;
								n[u >> 0] = h;
								t = (t + l) | 0;
								u = (e + t) | 0;
								h = a[(r + 36) >> 2] | 0;
								d = (e + (t + 1)) | 0;
								i = f[d >> 0] | 0;
								n[u >> 0] =
									n[
										(3472 + ((a[(r + 32) >> 2] | 0) + 512 + (f[u >> 0] | 0))) >>
											0
									] | 0;
								u = a[(r + 40) >> 2] | 0;
								b = (e + (t + 2)) | 0;
								s = f[b >> 0] | 0;
								n[d >> 0] = n[(3472 + (h + 512 + i)) >> 0] | 0;
								d = (e + (t + 3)) | 0;
								i =
									n[
										(3472 + ((a[(r + 44) >> 2] | 0) + 512 + (f[d >> 0] | 0))) >>
											0
									] | 0;
								n[b >> 0] = n[(3472 + (u + 512 + s)) >> 0] | 0;
								n[d >> 0] = i;
								t = (t + l) | 0;
								l = (e + t) | 0;
								d = a[(r + 52) >> 2] | 0;
								i = (e + (t + 1)) | 0;
								b = f[i >> 0] | 0;
								n[l >> 0] =
									n[
										(3472 + ((a[(r + 48) >> 2] | 0) + 512 + (f[l >> 0] | 0))) >>
											0
									] | 0;
								l = a[(r + 56) >> 2] | 0;
								s = (e + (t + 2)) | 0;
								u = f[s >> 0] | 0;
								n[i >> 0] = n[(3472 + (d + 512 + b)) >> 0] | 0;
								t = (e + (t + 3)) | 0;
								i =
									n[
										(3472 + ((a[(r + 60) >> 2] | 0) + 512 + (f[t >> 0] | 0))) >>
											0
									] | 0;
								n[s >> 0] = n[(3472 + (l + 512 + u)) >> 0] | 0;
								n[t >> 0] = i;
								c = o;
								return;
							}
							function _i(e, r, i, t) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								t = t | 0;
								var o = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0;
								k = c;
								l = (e + -1) | 0;
								u = n[(e + 1) >> 0] | 0;
								b = f[l >> 0] | 0;
								d = f[e >> 0] | 0;
								w = (b - d) | 0;
								p = (i + 4) | 0;
								do
									if (
										(
											((w | 0) > -1 ? w : (0 - w) | 0) >>> 0 <
											(a[p >> 2] | 0) >>> 0
												? ((h = f[(e + -2) >> 0] | 0),
												  (w = (h - b) | 0),
												  (s = a[(i + 8) >> 2] | 0),
												  ((w | 0) > -1 ? w : (0 - w) | 0) >>> 0 < s >>> 0)
												: 0
										)
											? ((o = u & 255),
											  (u = (o - d) | 0),
											  ((u | 0) > -1 ? u : (0 - u) | 0) >>> 0 < s >>> 0)
											: 0
									)
										if (r >>> 0 < 4) {
											u = f[((a[i >> 2] | 0) + (r + -1)) >> 0] | 0;
											u =
												Br(~u, (u + 1) | 0, (4 - o + ((d - b) << 2) + h) >> 3) |
												0;
											h = n[(3472 + ((d | 512) - u)) >> 0] | 0;
											n[l >> 0] = n[(3472 + ((b | 512) + u)) >> 0] | 0;
											n[e >> 0] = h;
											break;
										} else {
											n[l >> 0] = ((b + 2 + o + (h << 1)) | 0) >>> 2;
											n[e >> 0] = ((d + 2 + (o << 1) + h) | 0) >>> 2;
											break;
										}
								while (0);
								l = (e + t) | 0;
								b = (e + (t + -1)) | 0;
								h = f[b >> 0] | 0;
								d = f[l >> 0] | 0;
								u = (h - d) | 0;
								if (
									((u | 0) > -1 ? u : (0 - u) | 0) >>> 0 >=
									(a[p >> 2] | 0) >>> 0
								) {
									c = k;
									return;
								}
								u = f[(e + (t + -2)) >> 0] | 0;
								p = (u - h) | 0;
								s = a[(i + 8) >> 2] | 0;
								if (((p | 0) > -1 ? p : (0 - p) | 0) >>> 0 >= s >>> 0) {
									c = k;
									return;
								}
								o = f[(e + (t + 1)) >> 0] | 0;
								t = (o - d) | 0;
								if (((t | 0) > -1 ? t : (0 - t) | 0) >>> 0 >= s >>> 0) {
									c = k;
									return;
								}
								if (r >>> 0 < 4) {
									e = f[((a[i >> 2] | 0) + (r + -1)) >> 0] | 0;
									e =
										Br(~e, (e + 1) | 0, (4 - o + ((d - h) << 2) + u) >> 3) | 0;
									t = n[(3472 + ((d | 512) - e)) >> 0] | 0;
									n[b >> 0] = n[(3472 + ((h | 512) + e)) >> 0] | 0;
									n[l >> 0] = t;
									c = k;
									return;
								} else {
									n[b >> 0] = ((h + 2 + o + (u << 1)) | 0) >>> 2;
									n[l >> 0] = ((d + 2 + (o << 1) + u) | 0) >>> 2;
									c = k;
									return;
								}
							}
							function Mi(e, r, i, t) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								t = t | 0;
								var o = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0,
									g = 0,
									y = 0;
								y = c;
								if (r >>> 0 < 4) {
									d = f[((a[i >> 2] | 0) + (r + -1)) >> 0] | 0;
									o = (d + 1) | 0;
									k = (0 - t) | 0;
									r = (i + 4) | 0;
									p = k << 1;
									h = (i + 8) | 0;
									d = ~d;
									s = 8;
									while (1) {
										b = (e + k) | 0;
										i = n[(e + t) >> 0] | 0;
										l = f[b >> 0] | 0;
										u = f[e >> 0] | 0;
										w = (l - u) | 0;
										if (
											(
												((w | 0) > -1 ? w : (0 - w) | 0) >>> 0 <
												(a[r >> 2] | 0) >>> 0
													? ((v = f[(e + p) >> 0] | 0),
													  (w = (v - l) | 0),
													  (m = a[h >> 2] | 0),
													  ((w | 0) > -1 ? w : (0 - w) | 0) >>> 0 < m >>> 0)
													: 0
											)
												? ((g = i & 255),
												  (i = (g - u) | 0),
												  ((i | 0) > -1 ? i : (0 - i) | 0) >>> 0 < m >>> 0)
												: 0
										) {
											w = Br(d, o, (4 - g + ((u - l) << 2) + v) >> 3) | 0;
											i = n[(3472 + ((u | 512) - w)) >> 0] | 0;
											n[b >> 0] = n[(3472 + ((l | 512) + w)) >> 0] | 0;
											n[e >> 0] = i;
										}
										s = (s + -1) | 0;
										if (!s) break;
										else e = (e + 1) | 0;
									}
									c = y;
									return;
								} else {
									h = (0 - t) | 0;
									b = (i + 4) | 0;
									d = h << 1;
									i = (i + 8) | 0;
									l = 8;
									while (1) {
										o = (e + h) | 0;
										r = n[(e + t) >> 0] | 0;
										s = f[o >> 0] | 0;
										u = f[e >> 0] | 0;
										m = (s - u) | 0;
										if (
											(
												((m | 0) > -1 ? m : (0 - m) | 0) >>> 0 <
												(a[b >> 2] | 0) >>> 0
													? ((p = f[(e + d) >> 0] | 0),
													  (m = (p - s) | 0),
													  (k = a[i >> 2] | 0),
													  ((m | 0) > -1 ? m : (0 - m) | 0) >>> 0 < k >>> 0)
													: 0
											)
												? ((w = r & 255),
												  (r = (w - u) | 0),
												  ((r | 0) > -1 ? r : (0 - r) | 0) >>> 0 < k >>> 0)
												: 0
										) {
											n[o >> 0] = ((s + 2 + w + (p << 1)) | 0) >>> 2;
											n[e >> 0] = ((u + 2 + (w << 1) + p) | 0) >>> 2;
										}
										l = (l + -1) | 0;
										if (!l) break;
										else e = (e + 1) | 0;
									}
									c = y;
									return;
								}
							}
							function Ei(e, r, i, t) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								t = t | 0;
								var o = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0,
									g = 0;
								v = c;
								w = f[((a[i >> 2] | 0) + (r + -1)) >> 0] | 0;
								m = (w + 1) | 0;
								l = (0 - t) | 0;
								o = (i + 4) | 0;
								k = l << 1;
								r = (i + 8) | 0;
								w = ~w;
								l = (e + l) | 0;
								b = n[(e + t) >> 0] | 0;
								u = f[l >> 0] | 0;
								s = f[e >> 0] | 0;
								g = (u - s) | 0;
								i = a[o >> 2] | 0;
								if (
									(
										((g | 0) > -1 ? g : (0 - g) | 0) >>> 0 < i >>> 0
											? ((h = f[(e + k) >> 0] | 0),
											  (g = (h - u) | 0),
											  (d = a[r >> 2] | 0),
											  ((g | 0) > -1 ? g : (0 - g) | 0) >>> 0 < d >>> 0)
											: 0
									)
										? ((p = b & 255),
										  (b = (p - s) | 0),
										  ((b | 0) > -1 ? b : (0 - b) | 0) >>> 0 < d >>> 0)
										: 0
								) {
									p = Br(w, m, (4 - p + ((s - u) << 2) + h) >> 3) | 0;
									i = n[(3472 + ((s | 512) - p)) >> 0] | 0;
									n[l >> 0] = n[(3472 + ((u | 512) + p)) >> 0] | 0;
									n[e >> 0] = i;
									i = a[o >> 2] | 0;
								}
								b = (e + 1) | 0;
								s = (e + (1 - t)) | 0;
								u = f[s >> 0] | 0;
								l = f[b >> 0] | 0;
								p = (u - l) | 0;
								if (((p | 0) > -1 ? p : (0 - p) | 0) >>> 0 >= i >>> 0) {
									c = v;
									return;
								}
								o = f[(e + (k | 1)) >> 0] | 0;
								p = (o - u) | 0;
								i = a[r >> 2] | 0;
								if (((p | 0) > -1 ? p : (0 - p) | 0) >>> 0 >= i >>> 0) {
									c = v;
									return;
								}
								r = f[(e + (t + 1)) >> 0] | 0;
								p = (r - l) | 0;
								if (((p | 0) > -1 ? p : (0 - p) | 0) >>> 0 >= i >>> 0) {
									c = v;
									return;
								}
								h = Br(w, m, (4 - r + ((l - u) << 2) + o) >> 3) | 0;
								p = n[(3472 + ((l | 512) - h)) >> 0] | 0;
								n[s >> 0] = n[(3472 + ((u | 512) + h)) >> 0] | 0;
								n[b >> 0] = p;
								c = v;
								return;
							}
							function Fi(e, r, i) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								var n = 0,
									t = 0,
									f = 0,
									o = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0;
								w = c;
								p = a[(r + 4) >> 2] | 0;
								k = a[(r + 8) >> 2] | 0;
								if (
									!(((i | 0) == 0) | ((i | 0) == 5))
										? (a[(e + 3384) >> 2] | 0) == 0
										: 0
								)
									t = 0;
								else {
									f = (e + 1220) | 0;
									n = 0;
									do {
										t = Ye(f, n) | 0;
										n = (n + 1) | 0;
									} while ((n >>> 0 < 16) & ((t | 0) == 0));
								}
								l = (e + 1176) | 0;
								d = a[l >> 2] | 0;
								if (d) {
									b = a[(e + 1212) >> 2] | 0;
									n = 0;
									s = 0;
									f = 0;
									do {
										if (a[(b + ((s * 216) | 0) + 196) >> 2] | 0) break;
										s = (s + 1) | 0;
										n = (n + 1) | 0;
										h = (n | 0) == (p | 0);
										f = ((h & 1) + f) | 0;
										n = h ? 0 : n;
									} while (s >>> 0 < d >>> 0);
									if ((s | 0) != (d | 0)) {
										h = (e + 1212) | 0;
										d = a[h >> 2] | 0;
										s = ee(f, p) | 0;
										if (n) {
											l = (e + 1204) | 0;
											o = n;
											do {
												o = (o + -1) | 0;
												b = (o + s) | 0;
												Li((d + ((b * 216) | 0)) | 0, r, f, o, i, t);
												a[(d + ((b * 216) | 0) + 196) >> 2] = 1;
												a[l >> 2] = (a[l >> 2] | 0) + 1;
											} while ((o | 0) != 0);
										}
										n = (n + 1) | 0;
										if (n >>> 0 < p >>> 0) {
											b = (e + 1204) | 0;
											do {
												l = (n + s) | 0;
												u = (d + ((l * 216) | 0) + 196) | 0;
												if (!(a[u >> 2] | 0)) {
													Li((d + ((l * 216) | 0)) | 0, r, f, n, i, t);
													a[u >> 2] = 1;
													a[b >> 2] = (a[b >> 2] | 0) + 1;
												}
												n = (n + 1) | 0;
											} while ((n | 0) != (p | 0));
										}
										if (f) {
											if (p) {
												d = (f + -1) | 0;
												o = ee(d, p) | 0;
												n = (e + 1204) | 0;
												l = (0 - p) | 0;
												u = 0;
												do {
													b = d;
													s =
														((a[h >> 2] | 0) + ((((u + o) | 0) * 216) | 0)) | 0;
													while (1) {
														Li(s, r, b, u, i, t);
														a[(s + 196) >> 2] = 1;
														a[n >> 2] = (a[n >> 2] | 0) + 1;
														if (!b) break;
														else {
															b = (b + -1) | 0;
															s = (s + ((l * 216) | 0)) | 0;
														}
													}
													u = (u + 1) | 0;
												} while ((u | 0) != (p | 0));
											}
										} else f = 0;
										f = (f + 1) | 0;
										if (f >>> 0 >= k >>> 0) {
											c = w;
											return 0;
										}
										b = (e + 1204) | 0;
										if (!p) {
											c = w;
											return 0;
										}
										do {
											n = a[h >> 2] | 0;
											l = ee(f, p) | 0;
											u = 0;
											do {
												o = (u + l) | 0;
												s = (n + ((o * 216) | 0) + 196) | 0;
												if (!(a[s >> 2] | 0)) {
													Li((n + ((o * 216) | 0)) | 0, r, f, u, i, t);
													a[s >> 2] = 1;
													a[b >> 2] = (a[b >> 2] | 0) + 1;
												}
												u = (u + 1) | 0;
											} while ((u | 0) != (p | 0));
											f = (f + 1) | 0;
										} while ((f | 0) != (k | 0));
										c = w;
										return 0;
									}
								}
								if (((i | 0) == 2) | ((i | 0) == 7))
									if (((a[(e + 3384) >> 2] | 0) == 0) | ((t | 0) == 0)) f = 13;
									else f = 14;
								else if (!t) f = 13;
								else f = 14;
								if ((f | 0) == 13)
									cn(a[r >> 2] | 0, 128, ee((p * 384) | 0, k) | 0);
								else if ((f | 0) == 14)
									ln(a[r >> 2] | 0, t, ee((p * 384) | 0, k) | 0);
								f = a[l >> 2] | 0;
								a[(e + 1204) >> 2] = f;
								if (!f) {
									c = w;
									return 0;
								}
								n = a[(e + 1212) >> 2] | 0;
								t = 0;
								do {
									a[(n + ((t * 216) | 0) + 8) >> 2] = 1;
									t = (t + 1) | 0;
								} while (t >>> 0 < f >>> 0);
								c = w;
								return 0;
							}
							function Li(e, r, i, t, o, s) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								t = t | 0;
								o = o | 0;
								s = s | 0;
								var u = 0,
									l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0,
									g = 0,
									y = 0,
									B = 0,
									A = 0,
									U = 0,
									S = 0,
									_ = 0,
									M = 0,
									E = 0,
									F = 0,
									L = 0,
									C = 0,
									D = 0,
									P = 0,
									R = 0,
									O = 0,
									I = 0,
									T = 0,
									z = 0,
									N = 0,
									x = 0,
									j = 0,
									H = 0,
									q = 0,
									Y = 0,
									K = 0,
									V = 0,
									G = 0,
									Z = 0,
									$ = 0,
									X = 0,
									W = 0,
									J = 0,
									Q = 0,
									re = 0,
									ie = 0,
									ne = 0,
									te = 0,
									ae = 0,
									fe = 0,
									oe = 0,
									se = 0,
									ue = 0,
									le = 0,
									ce = 0,
									be = 0,
									de = 0,
									he = 0,
									pe = 0,
									ke = 0,
									we = 0,
									me = 0,
									ve = 0;
								me = c;
								c = (c + 480) | 0;
								ke = (me + 96) | 0;
								we = (me + 32) | 0;
								b = (me + 24) | 0;
								d = me;
								de = a[(r + 4) >> 2] | 0;
								g = a[(r + 8) >> 2] | 0;
								yr(r, ((ee(de, i) | 0) + t) | 0);
								p = a[r >> 2] | 0;
								u = i << 4;
								l = t << 4;
								h = ((ee(i << 8, de) | 0) + l) | 0;
								a[(e + 20) >> 2] = 40;
								a[(e + 8) >> 2] = 0;
								a[e >> 2] = 6;
								a[(e + 12) >> 2] = 0;
								a[(e + 16) >> 2] = 0;
								a[(e + 24) >> 2] = 0;
								do
									if (((o | 0) == 2) | ((o | 0) == 7)) cn(ke, 0, 384);
									else {
										a[b >> 2] = 0;
										a[(d + 4) >> 2] = de;
										a[(d + 8) >> 2] = g;
										a[d >> 2] = s;
										if (!s) {
											cn(ke, 0, 384);
											break;
										}
										Ne(ke, b, d, l, u, 0, 0, 16, 16);
										er(r, ke);
										c = me;
										return;
									}
								while (0);
								cn(we, 0, 64);
								if (
									(i | 0) != 0
										? (a[(e + ((((0 - de) | 0) * 216) | 0) + 196) >> 2] | 0) !=
										  0
										: 0
								) {
									y = (h - (de << 4)) | 0;
									L = y | 1;
									F = y | 3;
									L =
										((f[(p + L) >> 0] | 0) +
											(f[(p + y) >> 0] | 0) +
											(f[(p + (L + 1)) >> 0] | 0) +
											(f[(p + F) >> 0] | 0)) |
										0;
									J = y | 7;
									F =
										((f[(p + (F + 2)) >> 0] | 0) +
											(f[(p + (F + 1)) >> 0] | 0) +
											(f[(p + (F + 3)) >> 0] | 0) +
											(f[(p + J) >> 0] | 0)) |
										0;
									C =
										((f[(p + (J + 2)) >> 0] | 0) +
											(f[(p + (J + 1)) >> 0] | 0) +
											(f[(p + (J + 3)) >> 0] | 0) +
											(f[(p + (J + 4)) >> 0] | 0)) |
										0;
									y =
										((f[(p + (J + 6)) >> 0] | 0) +
											(f[(p + (J + 5)) >> 0] | 0) +
											(f[(p + (J + 7)) >> 0] | 0) +
											(f[(p + (y | 15)) >> 0] | 0)) |
										0;
									J = (F + L) | 0;
									a[we >> 2] = C + J + (a[we >> 2] | 0) + y;
									m = (we + 4) | 0;
									a[m >> 2] = J - C - y + (a[m >> 2] | 0);
									m = 1;
								} else {
									L = 0;
									F = 0;
									C = 0;
									y = 0;
									m = 0;
								}
								if (
									((g + -1) | 0) != (i | 0)
										? (a[(e + ((de * 216) | 0) + 196) >> 2] | 0) != 0
										: 0
								) {
									S = (h + (de << 8)) | 0;
									B = S | 1;
									A = S | 3;
									B =
										((f[(p + B) >> 0] | 0) +
											(f[(p + S) >> 0] | 0) +
											(f[(p + (B + 1)) >> 0] | 0) +
											(f[(p + A) >> 0] | 0)) |
										0;
									w = S | 7;
									A =
										((f[(p + (A + 2)) >> 0] | 0) +
											(f[(p + (A + 1)) >> 0] | 0) +
											(f[(p + (A + 3)) >> 0] | 0) +
											(f[(p + w) >> 0] | 0)) |
										0;
									U =
										((f[(p + (w + 2)) >> 0] | 0) +
											(f[(p + (w + 1)) >> 0] | 0) +
											(f[(p + (w + 3)) >> 0] | 0) +
											(f[(p + (w + 4)) >> 0] | 0)) |
										0;
									S =
										((f[(p + (w + 6)) >> 0] | 0) +
											(f[(p + (w + 5)) >> 0] | 0) +
											(f[(p + (w + 7)) >> 0] | 0) +
											(f[(p + (S | 15)) >> 0] | 0)) |
										0;
									w = (A + B) | 0;
									a[we >> 2] = U + w + (a[we >> 2] | 0) + S;
									v = (we + 4) | 0;
									a[v >> 2] = w - U - S + (a[v >> 2] | 0);
									v = 1;
									w = (m + 1) | 0;
								} else {
									v = 0;
									B = 0;
									A = 0;
									U = 0;
									S = 0;
									w = m;
								}
								if ((t | 0) != 0 ? (a[(e + -20) >> 2] | 0) != 0 : 0) {
									W = (h + -1) | 0;
									J = de << 4;
									s = de << 5;
									be = (de * 48) | 0;
									E =
										((f[(p + (W + J)) >> 0] | 0) +
											(f[(p + W) >> 0] | 0) +
											(f[(p + (W + s)) >> 0] | 0) +
											(f[(p + (W + be)) >> 0] | 0)) |
										0;
									o = de << 6;
									W = (W + o) | 0;
									M =
										((f[(p + (W + J)) >> 0] | 0) +
											(f[(p + W) >> 0] | 0) +
											(f[(p + (W + s)) >> 0] | 0) +
											(f[(p + (W + be)) >> 0] | 0)) |
										0;
									W = (W + o) | 0;
									_ =
										((f[(p + (W + J)) >> 0] | 0) +
											(f[(p + W) >> 0] | 0) +
											(f[(p + (W + s)) >> 0] | 0) +
											(f[(p + (W + be)) >> 0] | 0)) |
										0;
									o = (W + o) | 0;
									be =
										((f[(p + (o + J)) >> 0] | 0) +
											(f[(p + o) >> 0] | 0) +
											(f[(p + (o + s)) >> 0] | 0) +
											(f[(p + (o + be)) >> 0] | 0)) |
										0;
									o = (M + E) | 0;
									a[we >> 2] = _ + o + (a[we >> 2] | 0) + be;
									s = (we + 16) | 0;
									a[s >> 2] = o - _ - be + (a[s >> 2] | 0);
									s = (w + 1) | 0;
									o = 1;
								} else {
									s = w;
									E = 0;
									M = 0;
									_ = 0;
									be = 0;
									o = 0;
								}
								do
									if (
										((de + -1) | 0) != (t | 0)
											? (a[(e + 412) >> 2] | 0) != 0
											: 0
									) {
										J = (h + 16) | 0;
										d = de << 4;
										b = de << 5;
										h = (de * 48) | 0;
										e =
											((f[(p + (J + d)) >> 0] | 0) +
												(f[(p + J) >> 0] | 0) +
												(f[(p + (J + b)) >> 0] | 0) +
												(f[(p + (J + h)) >> 0] | 0)) |
											0;
										k = de << 6;
										J = (J + k) | 0;
										l =
											((f[(p + (J + d)) >> 0] | 0) +
												(f[(p + J) >> 0] | 0) +
												(f[(p + (J + b)) >> 0] | 0) +
												(f[(p + (J + h)) >> 0] | 0)) |
											0;
										J = (J + k) | 0;
										u =
											((f[(p + (J + d)) >> 0] | 0) +
												(f[(p + J) >> 0] | 0) +
												(f[(p + (J + b)) >> 0] | 0) +
												(f[(p + (J + h)) >> 0] | 0)) |
											0;
										k = (J + k) | 0;
										h =
											((f[(p + (k + d)) >> 0] | 0) +
												(f[(p + k) >> 0] | 0) +
												(f[(p + (k + b)) >> 0] | 0) +
												(f[(p + (k + h)) >> 0] | 0)) |
											0;
										p = (s + 1) | 0;
										k = (o + 1) | 0;
										s = (l + e) | 0;
										a[we >> 2] = u + s + (a[we >> 2] | 0) + h;
										b = (we + 16) | 0;
										s = (s - u - h + (a[b >> 2] | 0)) | 0;
										a[b >> 2] = s;
										b = (w | 0) == 0;
										d = (o | 0) != 0;
										if (!(b & d)) {
											if (!b) {
												b = 1;
												s = p;
												o = k;
												l = 21;
												break;
											}
										} else
											a[(we + 4) >> 2] = (_ + be + M + E - e - l - u - h) >> 5;
										b = 1;
										h = (m | 0) != 0;
										e = (v | 0) != 0;
										o = k;
										l = 27;
									} else l = 17;
								while (0);
								if ((l | 0) == 17) {
									d = (o | 0) != 0;
									if (!w) {
										b = 0;
										p = s;
										l = 23;
									} else {
										b = 0;
										l = 21;
									}
								}
								if ((l | 0) == 21) {
									p = (we + 4) | 0;
									a[p >> 2] = a[p >> 2] >> (w + 3);
									p = s;
									l = 23;
								}
								do
									if ((l | 0) == 23) {
										s = (o | 0) == 0;
										h = (m | 0) != 0;
										e = (v | 0) != 0;
										if (s & h & e) {
											a[(we + 16) >> 2] = (C + y + F + L - S - U - A - B) >> 5;
											pe = b;
											o = p;
											he = d;
											h = 1;
											e = 1;
											break;
										}
										if (s) {
											pe = b;
											o = p;
											he = d;
										} else {
											s = a[(we + 16) >> 2] | 0;
											l = 27;
										}
									}
								while (0);
								if ((l | 0) == 27) {
									a[(we + 16) >> 2] = s >> (o + 3);
									pe = b;
									o = p;
									he = d;
								}
								if ((o | 0) == 1) a[we >> 2] = a[we >> 2] >> 4;
								else if ((o | 0) == 2) a[we >> 2] = a[we >> 2] >> 5;
								else if ((o | 0) == 3)
									a[we >> 2] = ((a[we >> 2] | 0) * 21) >> 10;
								else a[we >> 2] = a[we >> 2] >> 6;
								Ci(we);
								d = 0;
								s = ke;
								b = we;
								while (1) {
									o = a[(b + (((d >>> 2) & 3) << 2)) >> 2] | 0;
									if ((o | 0) < 0) o = 0;
									else o = (o | 0) > 255 ? -1 : o & 255;
									n[s >> 0] = o;
									o = (d + 1) | 0;
									if ((o | 0) == 256) break;
									else {
										d = o;
										s = (s + 1) | 0;
										b = ((o & 63) | 0) == 0 ? (b + 16) | 0 : b;
									}
								}
								ve = ee(g, de) | 0;
								G = de << 3;
								X = (0 - G) | 0;
								D = X | 1;
								W = (D + 1) | 0;
								J = X | 3;
								Q = (J + 1) | 0;
								re = (J + 2) | 0;
								ie = (J + 3) | 0;
								ne = X | 7;
								Z = (we + 4) | 0;
								le = de << 6;
								P = le | 1;
								te = (P + 1) | 0;
								ae = le | 3;
								fe = (ae + 1) | 0;
								oe = (ae + 2) | 0;
								se = (ae + 3) | 0;
								ue = le | 7;
								R = (G + -1) | 0;
								V = de << 4;
								O = (V + -1) | 0;
								I = (O + G) | 0;
								T = (O + V) | 0;
								z = (T + G) | 0;
								N = (T + V) | 0;
								x = (N + G) | 0;
								$ = (we + 16) | 0;
								j = (G + 8) | 0;
								H = V | 8;
								q = (H + G) | 0;
								Y = (H + V) | 0;
								K = (Y + G) | 0;
								V = (Y + V) | 0;
								G = (V + G) | 0;
								ce = ve << 6;
								k = L;
								p = F;
								o = C;
								v = y;
								d = B;
								s = A;
								l = U;
								g = S;
								C = 0;
								b = E;
								u = M;
								w = _;
								m = be;
								L =
									((a[r >> 2] | 0) +
										((ee(i << 6, de) | 0) + (t << 3) + (ve << 8))) |
									0;
								while (1) {
									cn(we, 0, 64);
									if (h) {
										k = ((f[(L + D) >> 0] | 0) + (f[(L + X) >> 0] | 0)) | 0;
										p = ((f[(L + J) >> 0] | 0) + (f[(L + W) >> 0] | 0)) | 0;
										S = ((f[(L + re) >> 0] | 0) + (f[(L + Q) >> 0] | 0)) | 0;
										_ = ((f[(L + ne) >> 0] | 0) + (f[(L + ie) >> 0] | 0)) | 0;
										v = (p + k) | 0;
										a[we >> 2] = S + v + (a[we >> 2] | 0) + _;
										a[Z >> 2] = v - S - _ + (a[Z >> 2] | 0);
										v = 1;
									} else {
										S = o;
										_ = v;
										v = 0;
									}
									if (e) {
										M = ((f[(L + P) >> 0] | 0) + (f[(L + le) >> 0] | 0)) | 0;
										E = ((f[(L + ae) >> 0] | 0) + (f[(L + te) >> 0] | 0)) | 0;
										F = ((f[(L + oe) >> 0] | 0) + (f[(L + fe) >> 0] | 0)) | 0;
										g = ((f[(L + ue) >> 0] | 0) + (f[(L + se) >> 0] | 0)) | 0;
										o = (E + M) | 0;
										a[we >> 2] = F + o + (a[we >> 2] | 0) + g;
										a[Z >> 2] = o - F - g + (a[Z >> 2] | 0);
										o = (v + 1) | 0;
									} else {
										M = d;
										E = s;
										F = l;
										o = v;
									}
									if (he) {
										y = ((f[(L + R) >> 0] | 0) + (f[(L + -1) >> 0] | 0)) | 0;
										B = ((f[(L + I) >> 0] | 0) + (f[(L + O) >> 0] | 0)) | 0;
										A = ((f[(L + z) >> 0] | 0) + (f[(L + T) >> 0] | 0)) | 0;
										U = ((f[(L + x) >> 0] | 0) + (f[(L + N) >> 0] | 0)) | 0;
										v = (B + y) | 0;
										a[we >> 2] = A + v + (a[we >> 2] | 0) + U;
										a[$ >> 2] = v - A - U + (a[$ >> 2] | 0);
										v = (o + 1) | 0;
										m = 1;
									} else {
										v = o;
										y = b;
										B = u;
										A = w;
										U = m;
										m = 0;
									}
									do
										if (pe) {
											l = ((f[(L + j) >> 0] | 0) + (f[(L + 8) >> 0] | 0)) | 0;
											b = ((f[(L + q) >> 0] | 0) + (f[(L + H) >> 0] | 0)) | 0;
											s = ((f[(L + K) >> 0] | 0) + (f[(L + Y) >> 0] | 0)) | 0;
											d = ((f[(L + G) >> 0] | 0) + (f[(L + V) >> 0] | 0)) | 0;
											v = (v + 1) | 0;
											m = (m + 1) | 0;
											u = (b + l) | 0;
											a[we >> 2] = s + u + (a[we >> 2] | 0) + d;
											u = (u - s - d + (a[$ >> 2] | 0)) | 0;
											a[$ >> 2] = u;
											w = (o | 0) == 0;
											if (!(w & he))
												if (w) {
													l = 54;
													break;
												} else {
													l = 49;
													break;
												}
											else {
												a[Z >> 2] = (A + U + B + y - l - b - s - d) >> 4;
												l = 54;
												break;
											}
										} else if (!o) {
											w = m;
											l = 50;
										} else l = 49;
									while (0);
									if ((l | 0) == 49) {
										a[Z >> 2] = a[Z >> 2] >> (o + 2);
										w = m;
										l = 50;
									}
									do
										if ((l | 0) == 50) {
											l = 0;
											m = (w | 0) == 0;
											if (m & h & e) {
												a[$ >> 2] = (S + _ + p + k - g - F - E - M) >> 4;
												break;
											}
											if (!m) {
												u = a[$ >> 2] | 0;
												m = w;
												l = 54;
											}
										}
									while (0);
									if ((l | 0) == 54) a[$ >> 2] = u >> (m + 2);
									if ((v | 0) == 1) a[we >> 2] = a[we >> 2] >> 3;
									else if ((v | 0) == 2) a[we >> 2] = a[we >> 2] >> 4;
									else if ((v | 0) == 3)
										a[we >> 2] = ((a[we >> 2] | 0) * 21) >> 9;
									else a[we >> 2] = a[we >> 2] >> 5;
									Ci(we);
									m = 0;
									w = (ke + ((C << 6) + 256)) | 0;
									u = we;
									while (1) {
										v = a[(u + (((m >>> 1) & 3) << 2)) >> 2] | 0;
										if ((v | 0) < 0) v = 0;
										else v = (v | 0) > 255 ? -1 : v & 255;
										n[w >> 0] = v;
										v = (m + 1) | 0;
										if ((v | 0) == 64) break;
										else {
											m = v;
											w = (w + 1) | 0;
											u = ((v & 15) | 0) == 0 ? (u + 16) | 0 : u;
										}
									}
									C = (C + 1) | 0;
									if ((C | 0) == 2) break;
									else {
										o = S;
										v = _;
										d = M;
										s = E;
										l = F;
										b = y;
										u = B;
										w = A;
										m = U;
										L = (L + ce) | 0;
									}
								}
								er(r, ke);
								c = me;
								return;
							}
							function Ci(e) {
								e = e | 0;
								var r = 0,
									i = 0,
									n = 0,
									t = 0,
									f = 0,
									o = 0,
									s = 0,
									u = 0;
								o = c;
								t = (e + 4) | 0;
								r = a[t >> 2] | 0;
								f = (e + 16) | 0;
								i = a[f >> 2] | 0;
								n = a[e >> 2] | 0;
								if (!(r | i)) {
									a[(e + 60) >> 2] = n;
									a[(e + 56) >> 2] = n;
									a[(e + 52) >> 2] = n;
									a[(e + 48) >> 2] = n;
									a[(e + 44) >> 2] = n;
									a[(e + 40) >> 2] = n;
									a[(e + 36) >> 2] = n;
									a[(e + 32) >> 2] = n;
									a[(e + 28) >> 2] = n;
									a[(e + 24) >> 2] = n;
									a[(e + 20) >> 2] = n;
									a[f >> 2] = n;
									a[(e + 12) >> 2] = n;
									a[(e + 8) >> 2] = n;
									a[t >> 2] = n;
									c = o;
									return;
								} else {
									u = (r + n) | 0;
									f = r >> 1;
									s = (f + n) | 0;
									f = (n - f) | 0;
									r = (n - r) | 0;
									a[e >> 2] = i + u;
									n = i >> 1;
									a[(e + 16) >> 2] = n + u;
									a[(e + 32) >> 2] = u - n;
									a[(e + 48) >> 2] = u - i;
									a[t >> 2] = i + s;
									a[(e + 20) >> 2] = n + s;
									a[(e + 36) >> 2] = s - n;
									a[(e + 52) >> 2] = s - i;
									a[(e + 8) >> 2] = i + f;
									a[(e + 24) >> 2] = n + f;
									a[(e + 40) >> 2] = f - n;
									a[(e + 56) >> 2] = f - i;
									a[(e + 12) >> 2] = i + r;
									a[(e + 28) >> 2] = n + r;
									a[(e + 44) >> 2] = r - n;
									a[(e + 60) >> 2] = r - i;
									c = o;
									return;
								}
							}
							function Di(e, r) {
								e = e | 0;
								r = r | 0;
								var i = 0,
									n = 0,
									t = 0,
									f = 0,
									o = 0;
								o = c;
								cn(r, 0, 952);
								i = Kr(e, 1) | 0;
								if ((i | 0) == -1) {
									i = 1;
									c = o;
									return i | 0;
								}
								i = (i | 0) == 1;
								a[r >> 2] = i & 1;
								do
									if (i) {
										i = Kr(e, 8) | 0;
										if ((i | 0) == -1) {
											i = 1;
											c = o;
											return i | 0;
										}
										a[(r + 4) >> 2] = i;
										if ((i | 0) == 255) {
											i = Kr(e, 16) | 0;
											if ((i | 0) == -1) {
												i = 1;
												c = o;
												return i | 0;
											}
											a[(r + 8) >> 2] = i;
											i = Kr(e, 16) | 0;
											if ((i | 0) == -1) {
												i = 1;
												c = o;
												return i | 0;
											} else {
												a[(r + 12) >> 2] = i;
												break;
											}
										}
									}
								while (0);
								i = Kr(e, 1) | 0;
								if ((i | 0) == -1) {
									i = 1;
									c = o;
									return i | 0;
								}
								i = (i | 0) == 1;
								a[(r + 16) >> 2] = i & 1;
								do
									if (i) {
										i = Kr(e, 1) | 0;
										if ((i | 0) == -1) {
											i = 1;
											c = o;
											return i | 0;
										} else {
											a[(r + 20) >> 2] = ((i | 0) == 1) & 1;
											break;
										}
									}
								while (0);
								i = Kr(e, 1) | 0;
								if ((i | 0) == -1) {
									i = 1;
									c = o;
									return i | 0;
								}
								i = (i | 0) == 1;
								a[(r + 24) >> 2] = i & 1;
								do
									if (i) {
										i = Kr(e, 3) | 0;
										if ((i | 0) == -1) {
											i = 1;
											c = o;
											return i | 0;
										}
										a[(r + 28) >> 2] = i;
										i = Kr(e, 1) | 0;
										if ((i | 0) == -1) {
											i = 1;
											c = o;
											return i | 0;
										}
										a[(r + 32) >> 2] = ((i | 0) == 1) & 1;
										i = Kr(e, 1) | 0;
										if ((i | 0) == -1) {
											i = 1;
											c = o;
											return i | 0;
										}
										i = (i | 0) == 1;
										a[(r + 36) >> 2] = i & 1;
										if (!i) {
											a[(r + 40) >> 2] = 2;
											a[(r + 44) >> 2] = 2;
											a[(r + 48) >> 2] = 2;
											break;
										}
										i = Kr(e, 8) | 0;
										if ((i | 0) == -1) {
											i = 1;
											c = o;
											return i | 0;
										}
										a[(r + 40) >> 2] = i;
										i = Kr(e, 8) | 0;
										if ((i | 0) == -1) {
											i = 1;
											c = o;
											return i | 0;
										}
										a[(r + 44) >> 2] = i;
										i = Kr(e, 8) | 0;
										if ((i | 0) == -1) {
											i = 1;
											c = o;
											return i | 0;
										} else {
											a[(r + 48) >> 2] = i;
											break;
										}
									} else {
										a[(r + 28) >> 2] = 5;
										a[(r + 40) >> 2] = 2;
										a[(r + 44) >> 2] = 2;
										a[(r + 48) >> 2] = 2;
									}
								while (0);
								i = Kr(e, 1) | 0;
								if ((i | 0) == -1) {
									i = 1;
									c = o;
									return i | 0;
								}
								i = (i | 0) == 1;
								a[(r + 52) >> 2] = i & 1;
								if (i) {
									i = (r + 56) | 0;
									n = $r(e, i) | 0;
									if (n) {
										i = n;
										c = o;
										return i | 0;
									}
									if ((a[i >> 2] | 0) >>> 0 > 5) {
										i = 1;
										c = o;
										return i | 0;
									}
									i = (r + 60) | 0;
									n = $r(e, i) | 0;
									if (n) {
										i = n;
										c = o;
										return i | 0;
									}
									if ((a[i >> 2] | 0) >>> 0 > 5) {
										i = 1;
										c = o;
										return i | 0;
									}
								}
								i = Kr(e, 1) | 0;
								if ((i | 0) == -1) {
									i = 1;
									c = o;
									return i | 0;
								}
								i = (i | 0) == 1;
								a[(r + 64) >> 2] = i & 1;
								do
									if (i) {
										i = Vr(e) | 0;
										if (((Gr(e, 32) | 0) == -1) | ((i | 0) == 0)) {
											i = 1;
											c = o;
											return i | 0;
										}
										a[(r + 68) >> 2] = i;
										i = Vr(e) | 0;
										if (((Gr(e, 32) | 0) == -1) | ((i | 0) == 0)) {
											i = 1;
											c = o;
											return i | 0;
										}
										a[(r + 72) >> 2] = i;
										i = Kr(e, 1) | 0;
										if ((i | 0) == -1) {
											i = 1;
											c = o;
											return i | 0;
										} else {
											a[(r + 76) >> 2] = ((i | 0) == 1) & 1;
											break;
										}
									}
								while (0);
								i = Kr(e, 1) | 0;
								if ((i | 0) == -1) {
									i = 1;
									c = o;
									return i | 0;
								}
								i = (i | 0) == 1;
								t = (r + 80) | 0;
								a[t >> 2] = i & 1;
								if (i) {
									n = Pi(e, (r + 84) | 0) | 0;
									if (n) {
										i = n;
										c = o;
										return i | 0;
									}
								} else {
									a[(r + 84) >> 2] = 1;
									a[(r + 96) >> 2] = 288000001;
									a[(r + 224) >> 2] = 288000001;
									a[(r + 480) >> 2] = 24;
									a[(r + 484) >> 2] = 24;
									a[(r + 488) >> 2] = 24;
									a[(r + 492) >> 2] = 24;
								}
								n = Kr(e, 1) | 0;
								if ((n | 0) == -1) {
									i = 1;
									c = o;
									return i | 0;
								}
								n = (n | 0) == 1;
								i = (r + 496) | 0;
								a[i >> 2] = n & 1;
								if (n) {
									n = Pi(e, (r + 500) | 0) | 0;
									if (n) {
										i = n;
										c = o;
										return i | 0;
									}
								} else {
									a[(r + 500) >> 2] = 1;
									a[(r + 512) >> 2] = 240000001;
									a[(r + 640) >> 2] = 240000001;
									a[(r + 896) >> 2] = 24;
									a[(r + 900) >> 2] = 24;
									a[(r + 904) >> 2] = 24;
									a[(r + 908) >> 2] = 24;
								}
								if (!((a[t >> 2] | 0) == 0 ? (a[i >> 2] | 0) == 0 : 0)) f = 46;
								do
									if ((f | 0) == 46) {
										i = Kr(e, 1) | 0;
										if ((i | 0) == -1) {
											i = 1;
											c = o;
											return i | 0;
										} else {
											a[(r + 912) >> 2] = ((i | 0) == 1) & 1;
											break;
										}
									}
								while (0);
								i = Kr(e, 1) | 0;
								if ((i | 0) == -1) {
									i = 1;
									c = o;
									return i | 0;
								}
								a[(r + 916) >> 2] = ((i | 0) == 1) & 1;
								i = Kr(e, 1) | 0;
								if ((i | 0) == -1) {
									i = 1;
									c = o;
									return i | 0;
								}
								i = (i | 0) == 1;
								a[(r + 920) >> 2] = i & 1;
								do
									if (i) {
										i = Kr(e, 1) | 0;
										if ((i | 0) == -1) {
											i = 1;
											c = o;
											return i | 0;
										}
										a[(r + 924) >> 2] = ((i | 0) == 1) & 1;
										n = (r + 928) | 0;
										i = $r(e, n) | 0;
										if (i) {
											c = o;
											return i | 0;
										}
										if ((a[n >> 2] | 0) >>> 0 > 16) {
											i = 1;
											c = o;
											return i | 0;
										}
										n = (r + 932) | 0;
										i = $r(e, n) | 0;
										if (i) {
											c = o;
											return i | 0;
										}
										if ((a[n >> 2] | 0) >>> 0 > 16) {
											i = 1;
											c = o;
											return i | 0;
										}
										n = (r + 936) | 0;
										i = $r(e, n) | 0;
										if (i) {
											c = o;
											return i | 0;
										}
										if ((a[n >> 2] | 0) >>> 0 > 16) {
											i = 1;
											c = o;
											return i | 0;
										}
										n = (r + 940) | 0;
										i = $r(e, n) | 0;
										if (i) {
											c = o;
											return i | 0;
										}
										if ((a[n >> 2] | 0) >>> 0 > 16) {
											i = 1;
											c = o;
											return i | 0;
										}
										i = $r(e, (r + 944) | 0) | 0;
										if (i) {
											c = o;
											return i | 0;
										}
										i = $r(e, (r + 948) | 0) | 0;
										if (!i) break;
										c = o;
										return i | 0;
									} else {
										a[(r + 924) >> 2] = 1;
										a[(r + 928) >> 2] = 2;
										a[(r + 932) >> 2] = 1;
										a[(r + 936) >> 2] = 16;
										a[(r + 940) >> 2] = 16;
										a[(r + 944) >> 2] = 16;
										a[(r + 948) >> 2] = 16;
									}
								while (0);
								i = 0;
								c = o;
								return i | 0;
							}
							function Pi(e, r) {
								e = e | 0;
								r = r | 0;
								var i = 0,
									n = 0,
									t = 0,
									f = 0,
									o = 0,
									s = 0,
									u = 0;
								u = c;
								i = $r(e, r) | 0;
								if (i) {
									c = u;
									return i | 0;
								}
								i = ((a[r >> 2] | 0) + 1) | 0;
								a[r >> 2] = i;
								if (i >>> 0 > 32) {
									i = 1;
									c = u;
									return i | 0;
								}
								i = Kr(e, 4) | 0;
								if ((i | 0) == -1) {
									i = 1;
									c = u;
									return i | 0;
								}
								s = (r + 4) | 0;
								a[s >> 2] = i;
								n = Kr(e, 4) | 0;
								if ((n | 0) == -1) {
									i = 1;
									c = u;
									return i | 0;
								}
								o = (r + 8) | 0;
								a[o >> 2] = n;
								e: do
									if (a[r >> 2] | 0) {
										f = 0;
										while (1) {
											t = (r + (f << 2) + 12) | 0;
											i = $r(e, t) | 0;
											if (i) {
												n = 17;
												break;
											}
											n = a[t >> 2] | 0;
											if ((n | 0) == -1) {
												i = 1;
												n = 17;
												break;
											}
											i = (n + 1) | 0;
											a[t >> 2] = i;
											a[t >> 2] = i << ((a[s >> 2] | 0) + 6);
											t = (r + (f << 2) + 140) | 0;
											i = $r(e, t) | 0;
											if (i) {
												n = 17;
												break;
											}
											n = a[t >> 2] | 0;
											if ((n | 0) == -1) {
												i = 1;
												n = 17;
												break;
											}
											n = (n + 1) | 0;
											a[t >> 2] = n;
											a[t >> 2] = n << ((a[o >> 2] | 0) + 4);
											n = Kr(e, 1) | 0;
											if ((n | 0) == -1) {
												i = 1;
												n = 17;
												break;
											}
											a[(r + (f << 2) + 268) >> 2] = ((n | 0) == 1) & 1;
											f = (f + 1) | 0;
											if (f >>> 0 >= (a[r >> 2] | 0) >>> 0) break e;
										}
										if ((n | 0) == 17) {
											c = u;
											return i | 0;
										}
									}
								while (0);
								i = Kr(e, 5) | 0;
								if ((i | 0) == -1) {
									i = 1;
									c = u;
									return i | 0;
								}
								a[(r + 396) >> 2] = i + 1;
								i = Kr(e, 5) | 0;
								if ((i | 0) == -1) {
									i = 1;
									c = u;
									return i | 0;
								}
								a[(r + 400) >> 2] = i + 1;
								i = Kr(e, 5) | 0;
								if ((i | 0) == -1) {
									i = 1;
									c = u;
									return i | 0;
								}
								a[(r + 404) >> 2] = i + 1;
								i = Kr(e, 5) | 0;
								if ((i | 0) == -1) {
									i = 1;
									c = u;
									return i | 0;
								}
								a[(r + 408) >> 2] = i;
								i = 0;
								c = u;
								return i | 0;
							}
							function Ri(e, r, i, n) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								n = n | 0;
								var t = 0,
									f = 0,
									o = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0;
								p = c;
								e: do
									if (!(a[(i + 284) >> 2] | 0)) h = 0;
									else {
										o = 0;
										while (1) {
											s = a[(i + ((o * 20) | 0) + 288) >> 2] | 0;
											if ((s | 0) == 5) {
												h = 1;
												break e;
											} else if (!s) break;
											o = (o + 1) | 0;
										}
										h = 0;
									}
								while (0);
								s = a[(r + 16) >> 2] | 0;
								if ((s | 0) == 1) {
									if ((a[n >> 2] | 0) != 5) {
										t = a[(e + 12) >> 2] | 0;
										if (
											(a[(e + 8) >> 2] | 0) >>> 0 >
											(a[(i + 12) >> 2] | 0) >>> 0
										)
											t = ((a[(r + 12) >> 2] | 0) + t) | 0;
									} else t = 0;
									b = a[(r + 36) >> 2] | 0;
									o = (b | 0) == 0;
									if (o) s = 0;
									else s = ((a[(i + 12) >> 2] | 0) + t) | 0;
									n = (a[(n + 4) >> 2] | 0) == 0;
									u = ((((n & ((s | 0) != 0)) << 31) >> 31) + s) | 0;
									l = (u | 0) != 0;
									if (l) {
										f = (u + -1) | 0;
										d = (f >>> 0) % (b >>> 0) | 0;
										f = ((f >>> 0) / (b >>> 0)) | 0;
									} else {
										d = 0;
										f = 0;
									}
									if (o) s = 0;
									else {
										u = a[(r + 40) >> 2] | 0;
										s = 0;
										o = 0;
										do {
											s = ((a[(u + (o << 2)) >> 2] | 0) + s) | 0;
											o = (o + 1) | 0;
										} while (o >>> 0 < b >>> 0);
									}
									if (l) {
										f = ee(s, f) | 0;
										u = a[(r + 40) >> 2] | 0;
										s = 0;
										do {
											f = ((a[(u + (s << 2)) >> 2] | 0) + f) | 0;
											s = (s + 1) | 0;
										} while (s >>> 0 <= d >>> 0);
									} else f = 0;
									if (n) s = ((a[(r + 28) >> 2] | 0) + f) | 0;
									else s = f;
									f = ((a[(i + 32) >> 2] | 0) + (a[(r + 32) >> 2] | 0)) | 0;
									o = (e + 12) | 0;
									if (!h) {
										r =
											(((f | 0) < 0 ? f : 0) + s + (a[(i + 28) >> 2] | 0)) | 0;
										a[o >> 2] = t;
										a[(e + 8) >> 2] = a[(i + 12) >> 2];
										c = p;
										return r | 0;
									} else {
										a[o >> 2] = 0;
										a[(e + 8) >> 2] = 0;
										r = 0;
										c = p;
										return r | 0;
									}
								} else if (!s) {
									if ((a[n >> 2] | 0) != 5) {
										o = a[e >> 2] | 0;
										s = a[(i + 20) >> 2] | 0;
										if (
											o >>> 0 > s >>> 0
												? ((u = a[(r + 20) >> 2] | 0),
												  ((o - s) | 0) >>> 0 >= (u >>> 1) >>> 0)
												: 0
										) {
											o = ((a[(e + 4) >> 2] | 0) + u) | 0;
											u = e;
										} else {
											u = e;
											b = 11;
										}
									} else {
										a[(e + 4) >> 2] = 0;
										a[e >> 2] = 0;
										s = a[(i + 20) >> 2] | 0;
										o = 0;
										u = e;
										b = 11;
									}
									do
										if ((b | 0) == 11) {
											if (
												s >>> 0 > o >>> 0
													? ((f = a[(r + 20) >> 2] | 0),
													  ((s - o) | 0) >>> 0 > (f >>> 1) >>> 0)
													: 0
											) {
												o = ((a[(e + 4) >> 2] | 0) - f) | 0;
												break;
											}
											o = a[(e + 4) >> 2] | 0;
										}
									while (0);
									if (!(a[(n + 4) >> 2] | 0)) {
										r = a[(i + 24) >> 2] | 0;
										r = (s + o + ((r | 0) < 0 ? r : 0)) | 0;
										c = p;
										return r | 0;
									}
									a[(e + 4) >> 2] = o;
									t = a[(i + 24) >> 2] | 0;
									f = (t | 0) < 0;
									if (!h) {
										a[u >> 2] = s;
										r = (s + o + (f ? t : 0)) | 0;
										c = p;
										return r | 0;
									} else {
										a[(e + 4) >> 2] = 0;
										a[u >> 2] = f ? (0 - t) | 0 : 0;
										r = 0;
										c = p;
										return r | 0;
									}
								} else {
									if ((a[n >> 2] | 0) == 5) {
										u = 0;
										f = 0;
										t = (e + 12) | 0;
									} else {
										s = a[(i + 12) >> 2] | 0;
										t = (e + 12) | 0;
										o = a[t >> 2] | 0;
										if ((a[(e + 8) >> 2] | 0) >>> 0 > s >>> 0)
											o = ((a[(r + 12) >> 2] | 0) + o) | 0;
										u = o;
										f =
											(((s + o) << 1) +
												((((a[(n + 4) >> 2] | 0) == 0) << 31) >> 31)) |
											0;
									}
									if (!h) {
										a[t >> 2] = u;
										a[(e + 8) >> 2] = a[(i + 12) >> 2];
										r = f;
										c = p;
										return r | 0;
									} else {
										a[t >> 2] = 0;
										a[(e + 8) >> 2] = 0;
										r = 0;
										c = p;
										return r | 0;
									}
								}
								return 0;
							}
							function Oi(e, r) {
								e = e | 0;
								r = r | 0;
								var i = 0,
									n = 0;
								i = c;
								si(e);
								n = sn(2112) | 0;
								a[(e + 3376) >> 2] = n;
								if (n)
									if (!r) r = 0;
									else {
										a[(e + 1216) >> 2] = 1;
										r = 0;
									}
								else r = 1;
								c = i;
								return r | 0;
							}
							function Ii(e, r, i, n, t) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								n = n | 0;
								t = t | 0;
								var f = 0,
									o = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0;
								w = c;
								c = (c + 208) | 0;
								l = (w + 204) | 0;
								p = w;
								f = (w + 112) | 0;
								o = (w + 40) | 0;
								k = (w + 16) | 0;
								s = (w + 12) | 0;
								d = (w + 8) | 0;
								a[s >> 2] = 0;
								h = (e + 3344) | 0;
								if (
									(a[h >> 2] | 0) != 0 ? (a[(e + 3348) >> 2] | 0) == (r | 0) : 0
								) {
									r = (e + 3356) | 0;
									a[(k + 0) >> 2] = a[(r + 0) >> 2];
									a[(k + 4) >> 2] = a[(r + 4) >> 2];
									a[(k + 8) >> 2] = a[(r + 8) >> 2];
									a[(k + 12) >> 2] = a[(r + 12) >> 2];
									a[(k + 4) >> 2] = a[k >> 2];
									a[(k + 8) >> 2] = 0;
									a[(k + 16) >> 2] = 0;
									a[t >> 2] = a[(e + 3352) >> 2];
								} else u = 4;
								do
									if ((u | 0) == 4)
										if (!(Ar(r, i, k, t) | 0)) {
											i = (e + 3356) | 0;
											a[(i + 0) >> 2] = a[(k + 0) >> 2];
											a[(i + 4) >> 2] = a[(k + 4) >> 2];
											a[(i + 8) >> 2] = a[(k + 8) >> 2];
											a[(i + 12) >> 2] = a[(k + 12) >> 2];
											a[(i + 16) >> 2] = a[(k + 16) >> 2];
											a[(e + 3352) >> 2] = a[t >> 2];
											a[(e + 3348) >> 2] = r;
											break;
										} else {
											d = 3;
											c = w;
											return d | 0;
										}
								while (0);
								a[h >> 2] = 0;
								if (ei(k, p) | 0) {
									d = 3;
									c = w;
									return d | 0;
								}
								if ((((a[p >> 2] | 0) + -1) | 0) >>> 0 > 11) {
									d = 0;
									c = w;
									return d | 0;
								}
								r = ki(k, p, e, s) | 0;
								if (!r) {
									do
										if (!(a[s >> 2] | 0)) u = 19;
										else {
											if (
												(a[(e + 1184) >> 2] | 0) != 0
													? (a[(e + 16) >> 2] | 0) != 0
													: 0
											) {
												if (a[(e + 3380) >> 2] | 0) {
													d = 3;
													c = w;
													return d | 0;
												}
												if (!(a[(e + 1188) >> 2] | 0)) {
													b = (e + 1220) | 0;
													d = (e + 1336) | 0;
													a[d >> 2] = Ke(b) | 0;
													$e(b);
													Fi(e, d, 0) | 0;
												} else
													Fi(e, (e + 1336) | 0, a[(e + 1372) >> 2] | 0) | 0;
												a[t >> 2] = 0;
												a[h >> 2] = 1;
												a[(e + 1180) >> 2] = 0;
												f = (e + 1336) | 0;
												r = (e + 1360) | 0;
												break;
											}
											a[(e + 1188) >> 2] = 0;
											a[(e + 1180) >> 2] = 0;
											u = 19;
										}
									while (0);
									do
										if ((u | 0) == 19) {
											r = a[p >> 2] | 0;
											if ((r | 0) == 7)
												if (!(Ur(k, f) | 0)) {
													ui(e, f) | 0;
													d = 0;
													c = w;
													return d | 0;
												} else {
													d = (f + 40) | 0;
													un(a[d >> 2] | 0);
													a[d >> 2] = 0;
													d = (f + 84) | 0;
													un(a[d >> 2] | 0);
													a[d >> 2] = 0;
													d = 3;
													c = w;
													return d | 0;
												}
											else if (((r | 0) == 1) | ((r | 0) == 5)) {
												u = (e + 1180) | 0;
												if (a[(e + 1180) >> 2] | 0) {
													d = 0;
													c = w;
													return d | 0;
												}
												a[(e + 1184) >> 2] = 1;
												if (di(e) | 0) {
													a[(e + 1204) >> 2] = 0;
													a[(e + 1208) >> 2] = n;
													Er(k, l) | 0;
													s = (e + 8) | 0;
													i = a[s >> 2] | 0;
													r =
														ci(e, a[l >> 2] | 0, ((a[p >> 2] | 0) == 5) & 1) |
														0;
													if (r) {
														a[(e + 4) >> 2] = 256;
														a[(e + 12) >> 2] = 0;
														a[s >> 2] = 32;
														a[(e + 16) >> 2] = 0;
														a[(e + 3380) >> 2] = 0;
														d = (r | 0) == 65535 ? 5 : 4;
														c = w;
														return d | 0;
													}
													if ((i | 0) != (a[s >> 2] | 0)) {
														i = a[(e + 16) >> 2] | 0;
														a[d >> 2] = 1;
														r = a[e >> 2] | 0;
														if (r >>> 0 < 32)
															r = a[(e + (r << 2) + 20) >> 2] | 0;
														else r = 0;
														a[t >> 2] = 0;
														a[h >> 2] = 1;
														if (
															(
																(
																	(
																		(
																			(a[p >> 2] | 0) == 5
																				? ((l =
																						Rr(
																							d,
																							k,
																							i,
																							a[(e + 12) >> 2] | 0,
																							5
																						) | 0),
																				  (a[d >> 2] | l | 0) == 0)
																				: 0
																		)
																			? ((b = (e + 1220) | 0),
																			  !(
																					((a[(e + 1276) >> 2] | 0) != 0) |
																					((r | 0) == 0)
																			  ))
																			: 0
																	)
																		? (a[(r + 52) >> 2] | 0) ==
																		  (a[(i + 52) >> 2] | 0)
																		: 0
																)
																	? (a[(r + 56) >> 2] | 0) ==
																	  (a[(i + 56) >> 2] | 0)
																	: 0
															)
																? (a[(r + 88) >> 2] | 0) ==
																  (a[(i + 88) >> 2] | 0)
																: 0
														)
															Je(b);
														else a[(e + 1280) >> 2] = 0;
														a[e >> 2] = a[s >> 2];
														d = 2;
														c = w;
														return d | 0;
													}
												}
												if (a[(e + 3380) >> 2] | 0) {
													d = 3;
													c = w;
													return d | 0;
												}
												o = (e + 1368) | 0;
												s = (e + 2356) | 0;
												r = (e + 16) | 0;
												if (
													Mr(k, s, a[r >> 2] | 0, a[(e + 12) >> 2] | 0, p) | 0
												) {
													d = 3;
													c = w;
													return d | 0;
												}
												if (!(di(e) | 0)) i = (e + 1220) | 0;
												else {
													i = (e + 1220) | 0;
													if (
														(a[p >> 2] | 0) != 5
															? (Xe(
																	i,
																	a[(e + 2368) >> 2] | 0,
																	((a[(p + 4) >> 2] | 0) != 0) & 1,
																	a[((a[r >> 2] | 0) + 48) >> 2] | 0
															  ) |
																	0) !=
															  0
															: 0
													) {
														d = 3;
														c = w;
														return d | 0;
													}
													a[(e + 1336) >> 2] = Ke(i) | 0;
												}
												wn(o | 0, s | 0, 988) | 0;
												a[(e + 1188) >> 2] = 1;
												r = (e + 1360) | 0;
												l = p;
												b = a[(l + 4) >> 2] | 0;
												d = r;
												a[d >> 2] = a[l >> 2];
												a[(d + 4) >> 2] = b;
												pi(e, a[(e + 1432) >> 2] | 0);
												$e(i);
												if (
													He(
														i,
														(e + 1436) | 0,
														a[(e + 1380) >> 2] | 0,
														a[(e + 1412) >> 2] | 0
													) | 0
												) {
													d = 3;
													c = w;
													return d | 0;
												}
												f = (e + 1336) | 0;
												if (Or(k, e, f, o) | 0) {
													Ir(e, a[o >> 2] | 0);
													d = 3;
													c = w;
													return d | 0;
												}
												if (!(hi(e) | 0)) {
													d = 0;
													c = w;
													return d | 0;
												} else {
													a[u >> 2] = 1;
													break;
												}
											} else if ((r | 0) == 8)
												if (!(_r(k, o) | 0)) {
													li(e, o) | 0;
													d = 0;
													c = w;
													return d | 0;
												} else {
													d = (o + 20) | 0;
													un(a[d >> 2] | 0);
													a[d >> 2] = 0;
													d = (o + 24) | 0;
													un(a[d >> 2] | 0);
													a[d >> 2] = 0;
													d = (o + 28) | 0;
													un(a[d >> 2] | 0);
													a[d >> 2] = 0;
													d = (o + 44) | 0;
													un(a[d >> 2] | 0);
													a[d >> 2] = 0;
													d = 3;
													c = w;
													return d | 0;
												}
											else {
												d = 0;
												c = w;
												return d | 0;
											}
										}
									while (0);
									ir(f, a[(e + 1212) >> 2] | 0);
									bi(e);
									s =
										Ri(
											(e + 1284) | 0,
											a[(e + 16) >> 2] | 0,
											(e + 1368) | 0,
											r
										) | 0;
									i = (e + 1188) | 0;
									do
										if (a[i >> 2] | 0) {
											o = (e + 1220) | 0;
											if (!(a[(e + 1364) >> 2] | 0)) {
												qe(
													o,
													0,
													f,
													a[(e + 1380) >> 2] | 0,
													s,
													((a[r >> 2] | 0) == 5) & 1,
													a[(e + 1208) >> 2] | 0,
													a[(e + 1204) >> 2] | 0
												) | 0;
												break;
											} else {
												qe(
													o,
													(e + 1644) | 0,
													f,
													a[(e + 1380) >> 2] | 0,
													s,
													((a[r >> 2] | 0) == 5) & 1,
													a[(e + 1208) >> 2] | 0,
													a[(e + 1204) >> 2] | 0
												) | 0;
												break;
											}
										}
									while (0);
									a[(e + 1184) >> 2] = 0;
									a[i >> 2] = 0;
									d = 1;
									c = w;
									return d | 0;
								} else if ((r | 0) == 65520) {
									d = 4;
									c = w;
									return d | 0;
								} else {
									d = 3;
									c = w;
									return d | 0;
								}
								return 0;
							}
							function Ti(e) {
								e = e | 0;
								var r = 0,
									i = 0,
									n = 0,
									t = 0;
								t = c;
								n = 0;
								do {
									i = (e + (n << 2) + 20) | 0;
									r = a[i >> 2] | 0;
									if (r) {
										un(a[(r + 40) >> 2] | 0);
										a[((a[i >> 2] | 0) + 40) >> 2] = 0;
										un(a[((a[i >> 2] | 0) + 84) >> 2] | 0);
										a[((a[i >> 2] | 0) + 84) >> 2] = 0;
										un(a[i >> 2] | 0);
										a[i >> 2] = 0;
									}
									n = (n + 1) | 0;
								} while ((n | 0) != 32);
								n = 0;
								do {
									i = (e + (n << 2) + 148) | 0;
									r = a[i >> 2] | 0;
									if (r) {
										un(a[(r + 20) >> 2] | 0);
										a[((a[i >> 2] | 0) + 20) >> 2] = 0;
										un(a[((a[i >> 2] | 0) + 24) >> 2] | 0);
										a[((a[i >> 2] | 0) + 24) >> 2] = 0;
										un(a[((a[i >> 2] | 0) + 28) >> 2] | 0);
										a[((a[i >> 2] | 0) + 28) >> 2] = 0;
										un(a[((a[i >> 2] | 0) + 44) >> 2] | 0);
										a[((a[i >> 2] | 0) + 44) >> 2] = 0;
										un(a[i >> 2] | 0);
										a[i >> 2] = 0;
									}
									n = (n + 1) | 0;
								} while ((n | 0) != 256);
								r = (e + 3376) | 0;
								un(a[r >> 2] | 0);
								a[r >> 2] = 0;
								r = (e + 1212) | 0;
								un(a[r >> 2] | 0);
								a[r >> 2] = 0;
								r = (e + 1172) | 0;
								un(a[r >> 2] | 0);
								a[r >> 2] = 0;
								Ze((e + 1220) | 0);
								c = t;
								return;
							}
							function zi(e, r, i, n) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								n = n | 0;
								var t = 0;
								t = c;
								e = We((e + 1220) | 0) | 0;
								if (!e) {
									e = 0;
									c = t;
									return e | 0;
								}
								a[r >> 2] = a[(e + 4) >> 2];
								a[i >> 2] = a[(e + 12) >> 2];
								a[n >> 2] = a[(e + 8) >> 2];
								e = a[e >> 2] | 0;
								c = t;
								return e | 0;
							}
							function Ni(e) {
								e = e | 0;
								var r = 0;
								r = c;
								e = a[(e + 16) >> 2] | 0;
								if (!e) {
									e = 0;
									c = r;
									return e | 0;
								}
								e = a[(e + 52) >> 2] | 0;
								c = r;
								return e | 0;
							}
							function xi(e) {
								e = e | 0;
								var r = 0;
								r = c;
								e = a[(e + 16) >> 2] | 0;
								if (!e) {
									e = 0;
									c = r;
									return e | 0;
								}
								e = a[(e + 56) >> 2] | 0;
								c = r;
								return e | 0;
							}
							function ji(e) {
								e = e | 0;
								var r = 0;
								r = c;
								Je((e + 1220) | 0);
								c = r;
								return;
							}
							function Hi(e) {
								e = e | 0;
								var r = 0;
								r = c;
								e = ((wi(e) | 0) == 0) & 1;
								c = r;
								return e | 0;
							}
							function qi(e) {
								e = e | 0;
								var r = 0,
									i = 0;
								i = c;
								e = a[(e + 16) >> 2] | 0;
								if (
									(
										(
											((e | 0) != 0 ? (a[(e + 80) >> 2] | 0) != 0 : 0)
												? ((r = a[(e + 84) >> 2] | 0), (r | 0) != 0)
												: 0
										)
											? (a[(r + 24) >> 2] | 0) != 0
											: 0
									)
										? (a[(r + 32) >> 2] | 0) != 0
										: 0
								) {
									e = 1;
									c = i;
									return e | 0;
								}
								e = 0;
								c = i;
								return e | 0;
							}
							function Yi(e) {
								e = e | 0;
								var r = 0,
									i = 0;
								i = c;
								e = a[(e + 16) >> 2] | 0;
								if (
									(
										(
											((e | 0) != 0 ? (a[(e + 80) >> 2] | 0) != 0 : 0)
												? ((r = a[(e + 84) >> 2] | 0), (r | 0) != 0)
												: 0
										)
											? (a[(r + 24) >> 2] | 0) != 0
											: 0
									)
										? (a[(r + 36) >> 2] | 0) != 0
										: 0
								)
									e = a[(r + 48) >> 2] | 0;
								else e = 2;
								c = i;
								return e | 0;
							}
							function Ki(e, r, i, n, t, f) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								n = n | 0;
								t = t | 0;
								f = f | 0;
								var o = 0;
								o = c;
								e = a[(e + 16) >> 2] | 0;
								if ((e | 0) != 0 ? (a[(e + 60) >> 2] | 0) != 0 : 0) {
									a[r >> 2] = 1;
									r = (e + 64) | 0;
									a[i >> 2] = a[r >> 2] << 1;
									a[n >> 2] =
										(a[(e + 52) >> 2] << 4) -
										(((a[(e + 68) >> 2] | 0) + (a[r >> 2] | 0)) << 1);
									r = (e + 72) | 0;
									a[t >> 2] = a[r >> 2] << 1;
									e =
										((a[(e + 56) >> 2] << 4) -
											(((a[(e + 76) >> 2] | 0) + (a[r >> 2] | 0)) << 1)) |
										0;
									a[f >> 2] = e;
									c = o;
									return;
								}
								a[r >> 2] = 0;
								a[i >> 2] = 0;
								a[n >> 2] = 0;
								a[t >> 2] = 0;
								e = 0;
								a[f >> 2] = e;
								c = o;
								return;
							}
							function Vi(e, r, i) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								var n = 0,
									t = 0,
									f = 0;
								t = c;
								e = a[(e + 16) >> 2] | 0;
								e: do
									if (
										(
											((e | 0) != 0 ? (a[(e + 80) >> 2] | 0) != 0 : 0)
												? ((n = a[(e + 84) >> 2] | 0), (n | 0) != 0)
												: 0
										)
											? (a[n >> 2] | 0) != 0
											: 0
									) {
										e = a[(n + 4) >> 2] | 0;
										do
											switch (e | 0) {
												case 8: {
													n = 11;
													e = 32;
													break e;
												}
												case 13: {
													n = 99;
													e = 160;
													break e;
												}
												case 12: {
													n = 33;
													e = 64;
													break e;
												}
												case 6: {
													n = 11;
													e = 24;
													break e;
												}
												case 7: {
													n = 11;
													e = 20;
													break e;
												}
												case 255: {
													e = a[(n + 8) >> 2] | 0;
													n = a[(n + 12) >> 2] | 0;
													f = ((e | 0) == 0) | ((n | 0) == 0);
													n = f ? 0 : n;
													e = f ? 0 : e;
													break e;
												}
												case 5: {
													n = 33;
													e = 40;
													break e;
												}
												case 4: {
													n = 11;
													e = 16;
													break e;
												}
												case 3: {
													n = 11;
													e = 10;
													break e;
												}
												case 1:
												case 0: {
													n = e;
													break e;
												}
												case 2: {
													n = 11;
													e = 12;
													break e;
												}
												case 10: {
													n = 11;
													e = 18;
													break e;
												}
												case 9: {
													n = 33;
													e = 80;
													break e;
												}
												case 11: {
													n = 11;
													e = 15;
													break e;
												}
												default: {
													n = 0;
													e = 0;
													break e;
												}
											}
										while (0);
									} else {
										n = 1;
										e = 1;
									}
								while (0);
								a[r >> 2] = e;
								a[i >> 2] = n;
								c = t;
								return;
							}
							function Gi(e) {
								e = e | 0;
								e = a[(e + 16) >> 2] | 0;
								if (!e) e = 0;
								else e = a[e >> 2] | 0;
								return e | 0;
							}
							function Zi(e, r) {
								e = e | 0;
								r = r | 0;
								var i = 0,
									n = 0,
									t = 0;
								t = c;
								do
									if (e) {
										i = sn(3396) | 0;
										if (i) {
											n = (i + 8) | 0;
											if (!(Oi(n, r) | 0)) {
												a[i >> 2] = 1;
												a[(i + 4) >> 2] = 0;
												a[e >> 2] = i;
												i = 0;
												break;
											} else {
												Ti(n);
												un(i);
												i = -4;
												break;
											}
										} else i = -4;
									} else i = -1;
								while (0);
								c = t;
								return i | 0;
							}
							function $i(e, r) {
								e = e | 0;
								r = r | 0;
								var i = 0,
									n = 0;
								n = c;
								if (((e | 0) == 0) | ((r | 0) == 0)) {
									e = -1;
									c = n;
									return e | 0;
								}
								i = (e + 8) | 0;
								if (!(a[(e + 24) >> 2] | 0)) {
									e = -6;
									c = n;
									return e | 0;
								}
								if (!(a[(e + 20) >> 2] | 0)) {
									e = -6;
									c = n;
									return e | 0;
								}
								a[(r + 4) >> 2] = (Ni(i) | 0) << 4;
								a[(r + 8) >> 2] = (xi(i) | 0) << 4;
								a[(r + 12) >> 2] = qi(i) | 0;
								a[(r + 16) >> 2] = Yi(i) | 0;
								Ki(
									i,
									(r + 28) | 0,
									(r + 32) | 0,
									(r + 36) | 0,
									(r + 40) | 0,
									(r + 44) | 0
								);
								Vi(i, (r + 20) | 0, (r + 24) | 0);
								a[r >> 2] = Gi(i) | 0;
								e = 0;
								c = n;
								return e | 0;
							}
							function Xi(e, r, i) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								var n = 0,
									t = 0,
									f = 0,
									o = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0,
									d = 0;
								b = c;
								c = (c + 16) | 0;
								s = b;
								e: do
									if (
										(
											!(((r | 0) == 0) | ((i | 0) == 0))
												? ((t = a[r >> 2] | 0), (t | 0) != 0)
												: 0
										)
											? ((f = a[(r + 4) >> 2] | 0), (f | 0) != 0)
											: 0
									)
										if (
											(e | 0) != 0 ? ((n = a[e >> 2] | 0), (n | 0) != 0) : 0
										) {
											a[i >> 2] = 0;
											a[s >> 2] = 0;
											u = (e + 8) | 0;
											a[(e + 3392) >> 2] = a[(r + 12) >> 2];
											o = (r + 8) | 0;
											r = 1;
											while (1) {
												if ((n | 0) == 2) {
													l = 8;
													break;
												}
												n = Ii(u, t, f, a[o >> 2] | 0, s) | 0;
												d = a[s >> 2] | 0;
												t = (t + d) | 0;
												f = (f - d) | 0;
												f = (f | 0) < 0 ? 0 : f;
												a[i >> 2] = t;
												if ((n | 0) == 5) {
													r = -4;
													break e;
												} else if ((n | 0) == 4) {
													n = (Hi(u) | 0 | f | 0) == 0;
													r = n ? -2 : r;
												} else if ((n | 0) == 2) break;
												else if ((n | 0) == 1) {
													l = 13;
													break;
												}
												if (!f) break e;
												n = a[e >> 2] | 0;
											}
											if ((l | 0) == 8) {
												a[e >> 2] = 1;
												a[i >> 2] = t + (a[s >> 2] | 0);
											} else if ((l | 0) == 13) {
												r = (e + 4) | 0;
												a[r >> 2] = (a[r >> 2] | 0) + 1;
												r = (f | 0) == 0 ? 2 : 3;
												break;
											}
											r = (e + 1288) | 0;
											if (
												(a[r >> 2] | 0) != 0
													? (a[(e + 1244) >> 2] | 0) != (a[(e + 1248) >> 2] | 0)
													: 0
											) {
												a[r >> 2] = 0;
												a[e >> 2] = 2;
												r = 3;
											} else r = 4;
										} else r = -3;
									else r = -1;
								while (0);
								c = b;
								return r | 0;
							}
							function Wi(e) {
								e = e | 0;
								a[e >> 2] = 2;
								a[(e + 4) >> 2] = 3;
								return;
							}
							function Ji(e, r, i) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								var n = 0,
									t = 0,
									f = 0,
									o = 0;
								o = c;
								c = (c + 16) | 0;
								t = (o + 8) | 0;
								n = (o + 4) | 0;
								f = o;
								if (((e | 0) == 0) | ((r | 0) == 0)) {
									e = -1;
									c = o;
									return e | 0;
								}
								e = (e + 8) | 0;
								if (i) ji(e);
								e = zi(e, f, n, t) | 0;
								if (!e) {
									e = 0;
									c = o;
									return e | 0;
								}
								a[r >> 2] = e;
								a[(r + 4) >> 2] = a[f >> 2];
								a[(r + 8) >> 2] = a[n >> 2];
								a[(r + 12) >> 2] = a[t >> 2];
								e = 2;
								c = o;
								return e | 0;
							}
							function Qi(e) {
								e = e | 0;
								var r = 0,
									i = 0;
								i = c;
								r = bn(e) | 0;
								a[1792] = r;
								a[1791] = r;
								a[1790] = e;
								a[1793] = r + e;
								c = i;
								return r | 0;
							}
							function en(e) {
								e = e | 0;
								a[1790] = e;
								return;
							}
							function rn() {
								var e = 0;
								e = c;
								a[1786] = a[1791];
								a[1787] = a[1790];
								do tn() | 0;
								while ((a[1787] | 0) != 0);
								c = e;
								return;
							}
							function nn() {
								var e = 0,
									r = 0;
								r = c;
								if (Zi(7176, 0) | 0) {
									fe(7280) | 0;
									e = a[1784] | 0;
									if (e) dn(e);
								} else {
									a[1796] = 1;
									a[1798] = 1;
								}
								c = r;
								return -1;
							}
							function tn() {
								var e = 0,
									r = 0,
									i = 0;
								r = c;
								a[1788] = a[1798];
								e = Xi(a[1794] | 0, 7144, 7200) | 0;
								switch (e | 0) {
									case 1:
									case -2: {
										a[1787] = 0;
										c = r;
										return e | 0;
									}
									case 4: {
										if ($i(a[1794] | 0, 7208) | 0) {
											e = -1;
											c = r;
											return e | 0;
										}
										a[1814] =
											(ee(((a[1803] | 0) * 3) | 0, a[1804] | 0) | 0) >>> 1;
										ge();
										e = a[1800] | 0;
										a[1787] = (a[1786] | 0) - e + (a[1787] | 0);
										a[1786] = e;
										e = 0;
										c = r;
										return e | 0;
									}
									case 2: {
										a[1787] = 0;
										break;
									}
									case 3: {
										i = a[1800] | 0;
										a[1787] = (a[1786] | 0) - i + (a[1787] | 0);
										a[1786] = i;
										break;
									}
									default: {
										c = r;
										return e | 0;
									}
								}
								a[1798] = (a[1798] | 0) + 1;
								if ((Ji(a[1794] | 0, 7264, 0) | 0) != 2) {
									c = r;
									return e | 0;
								}
								do {
									a[1796] = (a[1796] | 0) + 1;
									ae(a[1816] | 0, a[1803] | 0, a[1804] | 0);
								} while ((Ji(a[1794] | 0, 7264, 0) | 0) == 2);
								c = r;
								return e | 0;
							}
							function an() {
								var e = 0,
									r = 0;
								r = c;
								e = a[1784] | 0;
								if (e) dn(e);
								c = r;
								return;
							}
							function fn() {
								var e = 0,
									r = 0;
								r = c;
								c = (c + 16) | 0;
								e = r;
								Wi(e);
								c = r;
								return a[e >> 2] | 0;
							}
							function on() {
								var e = 0,
									r = 0;
								r = c;
								c = (c + 16) | 0;
								e = r;
								Wi(e);
								c = r;
								return a[(e + 4) >> 2] | 0;
							}
							function sn(e) {
								e = e | 0;
								var r = 0;
								r = c;
								e = bn(e) | 0;
								c = r;
								return e | 0;
							}
							function un(e) {
								e = e | 0;
								var r = 0;
								r = c;
								dn(e);
								c = r;
								return;
							}
							function ln(e, r, i) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								var n = 0;
								n = c;
								wn(e | 0, r | 0, i | 0) | 0;
								c = n;
								return;
							}
							function cn(e, r, i) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								var n = 0;
								n = c;
								kn(e | 0, (r & 255) | 0, i | 0) | 0;
								c = n;
								return;
							}
							function bn(e) {
								e = e | 0;
								var r = 0,
									i = 0,
									n = 0,
									t = 0,
									f = 0,
									o = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0,
									g = 0,
									y = 0,
									B = 0,
									A = 0,
									U = 0,
									S = 0,
									_ = 0,
									M = 0,
									E = 0,
									F = 0,
									L = 0,
									C = 0,
									D = 0,
									P = 0,
									R = 0,
									O = 0,
									I = 0,
									T = 0;
								T = c;
								do
									if (e >>> 0 < 245) {
										if (e >>> 0 < 11) p = 16;
										else p = (e + 11) & -8;
										e = p >>> 3;
										l = a[1828] | 0;
										u = l >>> e;
										if (u & 3) {
											f = (((u & 1) ^ 1) + e) | 0;
											r = f << 1;
											o = (7352 + (r << 2)) | 0;
											r = (7352 + ((r + 2) << 2)) | 0;
											n = a[r >> 2] | 0;
											s = (n + 8) | 0;
											t = a[s >> 2] | 0;
											do
												if ((o | 0) != (t | 0)) {
													if (t >>> 0 < (a[1832] | 0) >>> 0) de();
													i = (t + 12) | 0;
													if ((a[i >> 2] | 0) == (n | 0)) {
														a[i >> 2] = o;
														a[r >> 2] = t;
														break;
													} else de();
												} else a[1828] = l & ~(1 << f);
											while (0);
											A = f << 3;
											a[(n + 4) >> 2] = A | 3;
											A = (n + (A | 4)) | 0;
											a[A >> 2] = a[A >> 2] | 1;
											A = s;
											c = T;
											return A | 0;
										}
										s = a[1830] | 0;
										if (p >>> 0 > s >>> 0) {
											if (u) {
												f = 2 << e;
												f = (u << e) & (f | (0 - f));
												f = ((f & (0 - f)) + -1) | 0;
												e = (f >>> 12) & 16;
												f = f >>> e;
												o = (f >>> 5) & 8;
												f = f >>> o;
												i = (f >>> 2) & 4;
												f = f >>> i;
												n = (f >>> 1) & 2;
												f = f >>> n;
												t = (f >>> 1) & 1;
												t = ((o | e | i | n | t) + (f >>> t)) | 0;
												f = t << 1;
												n = (7352 + (f << 2)) | 0;
												f = (7352 + ((f + 2) << 2)) | 0;
												i = a[f >> 2] | 0;
												e = (i + 8) | 0;
												o = a[e >> 2] | 0;
												do
													if ((n | 0) != (o | 0)) {
														if (o >>> 0 < (a[1832] | 0) >>> 0) de();
														s = (o + 12) | 0;
														if ((a[s >> 2] | 0) == (i | 0)) {
															a[s >> 2] = n;
															a[f >> 2] = o;
															b = a[1830] | 0;
															break;
														} else de();
													} else {
														a[1828] = l & ~(1 << t);
														b = s;
													}
												while (0);
												A = t << 3;
												u = (A - p) | 0;
												a[(i + 4) >> 2] = p | 3;
												r = (i + p) | 0;
												a[(i + (p | 4)) >> 2] = u | 1;
												a[(i + A) >> 2] = u;
												if (b) {
													n = a[1833] | 0;
													f = b >>> 3;
													o = f << 1;
													t = (7352 + (o << 2)) | 0;
													s = a[1828] | 0;
													f = 1 << f;
													if (s & f) {
														s = (7352 + ((o + 2) << 2)) | 0;
														o = a[s >> 2] | 0;
														if (o >>> 0 < (a[1832] | 0) >>> 0) de();
														else {
															d = s;
															h = o;
														}
													} else {
														a[1828] = s | f;
														d = (7352 + ((o + 2) << 2)) | 0;
														h = t;
													}
													a[d >> 2] = n;
													a[(h + 12) >> 2] = n;
													a[(n + 8) >> 2] = h;
													a[(n + 12) >> 2] = t;
												}
												a[1830] = u;
												a[1833] = r;
												A = e;
												c = T;
												return A | 0;
											}
											u = a[1829] | 0;
											if (u) {
												l = ((u & (0 - u)) + -1) | 0;
												B = (l >>> 12) & 16;
												l = l >>> B;
												y = (l >>> 5) & 8;
												l = l >>> y;
												A = (l >>> 2) & 4;
												l = l >>> A;
												s = (l >>> 1) & 2;
												l = l >>> s;
												b = (l >>> 1) & 1;
												b =
													a[
														(7616 + (((y | B | A | s | b) + (l >>> b)) << 2)) >>
															2
													] | 0;
												l = ((a[(b + 4) >> 2] & -8) - p) | 0;
												s = b;
												while (1) {
													i = a[(s + 16) >> 2] | 0;
													if (!i) {
														i = a[(s + 20) >> 2] | 0;
														if (!i) break;
													}
													s = ((a[(i + 4) >> 2] & -8) - p) | 0;
													A = s >>> 0 < l >>> 0;
													l = A ? s : l;
													s = i;
													b = A ? i : b;
												}
												u = a[1832] | 0;
												if (b >>> 0 < u >>> 0) de();
												r = (b + p) | 0;
												if (b >>> 0 >= r >>> 0) de();
												e = a[(b + 24) >> 2] | 0;
												f = a[(b + 12) >> 2] | 0;
												do
													if ((f | 0) == (b | 0)) {
														o = (b + 20) | 0;
														s = a[o >> 2] | 0;
														if (!s) {
															o = (b + 16) | 0;
															s = a[o >> 2] | 0;
															if (!s) {
																n = 0;
																break;
															}
														}
														while (1) {
															t = (s + 20) | 0;
															f = a[t >> 2] | 0;
															if (f) {
																s = f;
																o = t;
																continue;
															}
															t = (s + 16) | 0;
															f = a[t >> 2] | 0;
															if (!f) break;
															else {
																s = f;
																o = t;
															}
														}
														if (o >>> 0 < u >>> 0) de();
														else {
															a[o >> 2] = 0;
															n = s;
															break;
														}
													} else {
														t = a[(b + 8) >> 2] | 0;
														if (t >>> 0 < u >>> 0) de();
														s = (t + 12) | 0;
														if ((a[s >> 2] | 0) != (b | 0)) de();
														o = (f + 8) | 0;
														if ((a[o >> 2] | 0) == (b | 0)) {
															a[s >> 2] = f;
															a[o >> 2] = t;
															n = f;
															break;
														} else de();
													}
												while (0);
												do
													if (e) {
														s = a[(b + 28) >> 2] | 0;
														o = (7616 + (s << 2)) | 0;
														if ((b | 0) == (a[o >> 2] | 0)) {
															a[o >> 2] = n;
															if (!n) {
																a[1829] = a[1829] & ~(1 << s);
																break;
															}
														} else {
															if (e >>> 0 < (a[1832] | 0) >>> 0) de();
															s = (e + 16) | 0;
															if ((a[s >> 2] | 0) == (b | 0)) a[s >> 2] = n;
															else a[(e + 20) >> 2] = n;
															if (!n) break;
														}
														o = a[1832] | 0;
														if (n >>> 0 < o >>> 0) de();
														a[(n + 24) >> 2] = e;
														s = a[(b + 16) >> 2] | 0;
														do
															if (s)
																if (s >>> 0 < o >>> 0) de();
																else {
																	a[(n + 16) >> 2] = s;
																	a[(s + 24) >> 2] = n;
																	break;
																}
														while (0);
														t = a[(b + 20) >> 2] | 0;
														if (t)
															if (t >>> 0 < (a[1832] | 0) >>> 0) de();
															else {
																a[(n + 20) >> 2] = t;
																a[(t + 24) >> 2] = n;
																break;
															}
													}
												while (0);
												if (l >>> 0 < 16) {
													A = (l + p) | 0;
													a[(b + 4) >> 2] = A | 3;
													A = (b + (A + 4)) | 0;
													a[A >> 2] = a[A >> 2] | 1;
												} else {
													a[(b + 4) >> 2] = p | 3;
													a[(b + (p | 4)) >> 2] = l | 1;
													a[(b + (l + p)) >> 2] = l;
													i = a[1830] | 0;
													if (i) {
														n = a[1833] | 0;
														f = i >>> 3;
														o = f << 1;
														t = (7352 + (o << 2)) | 0;
														s = a[1828] | 0;
														f = 1 << f;
														if (s & f) {
															s = (7352 + ((o + 2) << 2)) | 0;
															o = a[s >> 2] | 0;
															if (o >>> 0 < (a[1832] | 0) >>> 0) de();
															else {
																w = s;
																k = o;
															}
														} else {
															a[1828] = s | f;
															w = (7352 + ((o + 2) << 2)) | 0;
															k = t;
														}
														a[w >> 2] = n;
														a[(k + 12) >> 2] = n;
														a[(n + 8) >> 2] = k;
														a[(n + 12) >> 2] = t;
													}
													a[1830] = l;
													a[1833] = r;
												}
												A = (b + 8) | 0;
												c = T;
												return A | 0;
											}
										}
									} else if (e >>> 0 <= 4294967231) {
										e = (e + 11) | 0;
										p = e & -8;
										b = a[1829] | 0;
										if (b) {
											o = (0 - p) | 0;
											e = e >>> 8;
											if (e)
												if (p >>> 0 > 16777215) l = 31;
												else {
													k = (((e + 1048320) | 0) >>> 16) & 8;
													w = e << k;
													h = (((w + 520192) | 0) >>> 16) & 4;
													w = w << h;
													l = (((w + 245760) | 0) >>> 16) & 2;
													l = (14 - (h | k | l) + ((w << l) >>> 15)) | 0;
													l = ((p >>> ((l + 7) | 0)) & 1) | (l << 1);
												}
											else l = 0;
											s = a[(7616 + (l << 2)) >> 2] | 0;
											e: do
												if (!s) {
													e = 0;
													u = 0;
												} else {
													if ((l | 0) == 31) u = 0;
													else u = (25 - (l >>> 1)) | 0;
													t = o;
													e = 0;
													n = p << u;
													u = 0;
													while (1) {
														f = a[(s + 4) >> 2] & -8;
														o = (f - p) | 0;
														if (o >>> 0 < t >>> 0)
															if ((f | 0) == (p | 0)) {
																e = s;
																u = s;
																break e;
															} else u = s;
														else o = t;
														w = a[(s + 20) >> 2] | 0;
														s = a[(s + ((n >>> 31) << 2) + 16) >> 2] | 0;
														e = ((w | 0) == 0) | ((w | 0) == (s | 0)) ? e : w;
														if (!s) break;
														else {
															t = o;
															n = n << 1;
														}
													}
												}
											while (0);
											if (((e | 0) == 0) & ((u | 0) == 0)) {
												e = 2 << l;
												e = b & (e | (0 - e));
												if (!e) break;
												w = ((e & (0 - e)) + -1) | 0;
												d = (w >>> 12) & 16;
												w = w >>> d;
												b = (w >>> 5) & 8;
												w = w >>> b;
												h = (w >>> 2) & 4;
												w = w >>> h;
												k = (w >>> 1) & 2;
												w = w >>> k;
												e = (w >>> 1) & 1;
												e =
													a[
														(7616 + (((b | d | h | k | e) + (w >>> e)) << 2)) >>
															2
													] | 0;
											}
											if (!e) {
												d = o;
												b = u;
											} else
												while (1) {
													w = ((a[(e + 4) >> 2] & -8) - p) | 0;
													s = w >>> 0 < o >>> 0;
													o = s ? w : o;
													u = s ? e : u;
													s = a[(e + 16) >> 2] | 0;
													if (s) {
														e = s;
														continue;
													}
													e = a[(e + 20) >> 2] | 0;
													if (!e) {
														d = o;
														b = u;
														break;
													}
												}
											if (
												(b | 0) != 0
													? d >>> 0 < (((a[1830] | 0) - p) | 0) >>> 0
													: 0
											) {
												u = a[1832] | 0;
												if (b >>> 0 < u >>> 0) de();
												h = (b + p) | 0;
												if (b >>> 0 >= h >>> 0) de();
												e = a[(b + 24) >> 2] | 0;
												f = a[(b + 12) >> 2] | 0;
												do
													if ((f | 0) == (b | 0)) {
														o = (b + 20) | 0;
														s = a[o >> 2] | 0;
														if (!s) {
															o = (b + 16) | 0;
															s = a[o >> 2] | 0;
															if (!s) {
																r = 0;
																break;
															}
														}
														while (1) {
															t = (s + 20) | 0;
															f = a[t >> 2] | 0;
															if (f) {
																s = f;
																o = t;
																continue;
															}
															t = (s + 16) | 0;
															f = a[t >> 2] | 0;
															if (!f) break;
															else {
																s = f;
																o = t;
															}
														}
														if (o >>> 0 < u >>> 0) de();
														else {
															a[o >> 2] = 0;
															r = s;
															break;
														}
													} else {
														t = a[(b + 8) >> 2] | 0;
														if (t >>> 0 < u >>> 0) de();
														s = (t + 12) | 0;
														if ((a[s >> 2] | 0) != (b | 0)) de();
														o = (f + 8) | 0;
														if ((a[o >> 2] | 0) == (b | 0)) {
															a[s >> 2] = f;
															a[o >> 2] = t;
															r = f;
															break;
														} else de();
													}
												while (0);
												do
													if (e) {
														s = a[(b + 28) >> 2] | 0;
														o = (7616 + (s << 2)) | 0;
														if ((b | 0) == (a[o >> 2] | 0)) {
															a[o >> 2] = r;
															if (!r) {
																a[1829] = a[1829] & ~(1 << s);
																break;
															}
														} else {
															if (e >>> 0 < (a[1832] | 0) >>> 0) de();
															s = (e + 16) | 0;
															if ((a[s >> 2] | 0) == (b | 0)) a[s >> 2] = r;
															else a[(e + 20) >> 2] = r;
															if (!r) break;
														}
														o = a[1832] | 0;
														if (r >>> 0 < o >>> 0) de();
														a[(r + 24) >> 2] = e;
														s = a[(b + 16) >> 2] | 0;
														do
															if (s)
																if (s >>> 0 < o >>> 0) de();
																else {
																	a[(r + 16) >> 2] = s;
																	a[(s + 24) >> 2] = r;
																	break;
																}
														while (0);
														s = a[(b + 20) >> 2] | 0;
														if (s)
															if (s >>> 0 < (a[1832] | 0) >>> 0) de();
															else {
																a[(r + 20) >> 2] = s;
																a[(s + 24) >> 2] = r;
																break;
															}
													}
												while (0);
												e: do
													if (d >>> 0 >= 16) {
														a[(b + 4) >> 2] = p | 3;
														a[(b + (p | 4)) >> 2] = d | 1;
														a[(b + (d + p)) >> 2] = d;
														s = d >>> 3;
														if (d >>> 0 < 256) {
															f = s << 1;
															i = (7352 + (f << 2)) | 0;
															o = a[1828] | 0;
															s = 1 << s;
															do
																if (!(o & s)) {
																	a[1828] = o | s;
																	v = (7352 + ((f + 2) << 2)) | 0;
																	g = i;
																} else {
																	t = (7352 + ((f + 2) << 2)) | 0;
																	n = a[t >> 2] | 0;
																	if (n >>> 0 >= (a[1832] | 0) >>> 0) {
																		v = t;
																		g = n;
																		break;
																	}
																	de();
																}
															while (0);
															a[v >> 2] = h;
															a[(g + 12) >> 2] = h;
															a[(b + (p + 8)) >> 2] = g;
															a[(b + (p + 12)) >> 2] = i;
															break;
														}
														i = d >>> 8;
														if (i)
															if (d >>> 0 > 16777215) t = 31;
															else {
																B = (((i + 1048320) | 0) >>> 16) & 8;
																A = i << B;
																g = (((A + 520192) | 0) >>> 16) & 4;
																A = A << g;
																t = (((A + 245760) | 0) >>> 16) & 2;
																t = (14 - (g | B | t) + ((A << t) >>> 15)) | 0;
																t = ((d >>> ((t + 7) | 0)) & 1) | (t << 1);
															}
														else t = 0;
														o = (7616 + (t << 2)) | 0;
														a[(b + (p + 28)) >> 2] = t;
														a[(b + (p + 20)) >> 2] = 0;
														a[(b + (p + 16)) >> 2] = 0;
														s = a[1829] | 0;
														f = 1 << t;
														if (!(s & f)) {
															a[1829] = s | f;
															a[o >> 2] = h;
															a[(b + (p + 24)) >> 2] = o;
															a[(b + (p + 12)) >> 2] = h;
															a[(b + (p + 8)) >> 2] = h;
															break;
														}
														s = a[o >> 2] | 0;
														if ((t | 0) == 31) i = 0;
														else i = (25 - (t >>> 1)) | 0;
														r: do
															if (((a[(s + 4) >> 2] & -8) | 0) != (d | 0)) {
																t = d << i;
																while (1) {
																	f = (s + ((t >>> 31) << 2) + 16) | 0;
																	o = a[f >> 2] | 0;
																	if (!o) break;
																	if (((a[(o + 4) >> 2] & -8) | 0) == (d | 0)) {
																		y = o;
																		break r;
																	} else {
																		t = t << 1;
																		s = o;
																	}
																}
																if (f >>> 0 < (a[1832] | 0) >>> 0) de();
																else {
																	a[f >> 2] = h;
																	a[(b + (p + 24)) >> 2] = s;
																	a[(b + (p + 12)) >> 2] = h;
																	a[(b + (p + 8)) >> 2] = h;
																	break e;
																}
															} else y = s;
														while (0);
														r = (y + 8) | 0;
														i = a[r >> 2] | 0;
														A = a[1832] | 0;
														if ((y >>> 0 >= A >>> 0) & (i >>> 0 >= A >>> 0)) {
															a[(i + 12) >> 2] = h;
															a[r >> 2] = h;
															a[(b + (p + 8)) >> 2] = i;
															a[(b + (p + 12)) >> 2] = y;
															a[(b + (p + 24)) >> 2] = 0;
															break;
														} else de();
													} else {
														A = (d + p) | 0;
														a[(b + 4) >> 2] = A | 3;
														A = (b + (A + 4)) | 0;
														a[A >> 2] = a[A >> 2] | 1;
													}
												while (0);
												A = (b + 8) | 0;
												c = T;
												return A | 0;
											}
										}
									} else p = -1;
								while (0);
								u = a[1830] | 0;
								if (u >>> 0 >= p >>> 0) {
									i = (u - p) | 0;
									r = a[1833] | 0;
									if (i >>> 0 > 15) {
										a[1833] = r + p;
										a[1830] = i;
										a[(r + (p + 4)) >> 2] = i | 1;
										a[(r + u) >> 2] = i;
										a[(r + 4) >> 2] = p | 3;
									} else {
										a[1830] = 0;
										a[1833] = 0;
										a[(r + 4) >> 2] = u | 3;
										A = (r + (u + 4)) | 0;
										a[A >> 2] = a[A >> 2] | 1;
									}
									A = (r + 8) | 0;
									c = T;
									return A | 0;
								}
								u = a[1831] | 0;
								if (u >>> 0 > p >>> 0) {
									B = (u - p) | 0;
									a[1831] = B;
									A = a[1834] | 0;
									a[1834] = A + p;
									a[(A + (p + 4)) >> 2] = B | 1;
									a[(A + 4) >> 2] = p | 3;
									A = (A + 8) | 0;
									c = T;
									return A | 0;
								}
								do
									if (!(a[1946] | 0)) {
										u = Ae(30) | 0;
										if (!((u + -1) & u)) {
											a[1948] = u;
											a[1947] = u;
											a[1949] = -1;
											a[1950] = -1;
											a[1951] = 0;
											a[1939] = 0;
											a[1946] = ((Be(0) | 0) & -16) ^ 1431655768;
											break;
										} else de();
									}
								while (0);
								l = (p + 48) | 0;
								f = a[1948] | 0;
								t = (p + 47) | 0;
								o = (f + t) | 0;
								f = (0 - f) | 0;
								b = o & f;
								if (b >>> 0 <= p >>> 0) {
									A = 0;
									c = T;
									return A | 0;
								}
								e = a[1938] | 0;
								if (
									(e | 0) != 0
										? ((g = a[1936] | 0),
										  (y = (g + b) | 0),
										  (y >>> 0 <= g >>> 0) | (y >>> 0 > e >>> 0))
										: 0
								) {
									A = 0;
									c = T;
									return A | 0;
								}
								e: do
									if (!(a[1939] & 4)) {
										s = a[1834] | 0;
										r: do
											if (s) {
												e = 7760 | 0;
												while (1) {
													u = a[e >> 2] | 0;
													if (
														u >>> 0 <= s >>> 0
															? ((m = (e + 4) | 0),
															  ((u + (a[m >> 2] | 0)) | 0) >>> 0 > s >>> 0)
															: 0
													)
														break;
													e = a[(e + 8) >> 2] | 0;
													if (!e) {
														_ = 181;
														break r;
													}
												}
												if (e) {
													u = (o - (a[1831] | 0)) & f;
													if (u >>> 0 < 2147483647) {
														s = pe(u | 0) | 0;
														if (
															(s | 0) ==
															(((a[e >> 2] | 0) + (a[m >> 2] | 0)) | 0)
														)
															_ = 190;
														else _ = 191;
													} else u = 0;
												} else _ = 181;
											} else _ = 181;
										while (0);
										do
											if ((_ | 0) == 181) {
												s = pe(0) | 0;
												if ((s | 0) != (-1 | 0)) {
													e = s;
													u = a[1947] | 0;
													o = (u + -1) | 0;
													if (!(o & e)) u = b;
													else u = (b - e + ((o + e) & (0 - u))) | 0;
													e = a[1936] | 0;
													o = (e + u) | 0;
													if ((u >>> 0 > p >>> 0) & (u >>> 0 < 2147483647)) {
														y = a[1938] | 0;
														if (
															(y | 0) != 0
																? (o >>> 0 <= e >>> 0) | (o >>> 0 > y >>> 0)
																: 0
														) {
															u = 0;
															break;
														}
														o = pe(u | 0) | 0;
														if ((o | 0) == (s | 0)) _ = 190;
														else {
															s = o;
															_ = 191;
														}
													} else u = 0;
												} else u = 0;
											}
										while (0);
										r: do
											if ((_ | 0) == 190) {
												if ((s | 0) != (-1 | 0)) {
													B = s;
													m = u;
													_ = 201;
													break e;
												}
											} else if ((_ | 0) == 191) {
												e = (0 - u) | 0;
												do
													if (
														((s | 0) != (-1 | 0)) &
														(u >>> 0 < 2147483647) &
														(l >>> 0 > u >>> 0)
															? ((i = a[1948] | 0),
															  (i = (t - u + i) & (0 - i)),
															  i >>> 0 < 2147483647)
															: 0
													)
														if ((pe(i | 0) | 0) == (-1 | 0)) {
															pe(e | 0) | 0;
															u = 0;
															break r;
														} else {
															u = (i + u) | 0;
															break;
														}
												while (0);
												if ((s | 0) == (-1 | 0)) u = 0;
												else {
													B = s;
													m = u;
													_ = 201;
													break e;
												}
											}
										while (0);
										a[1939] = a[1939] | 4;
										_ = 198;
									} else {
										u = 0;
										_ = 198;
									}
								while (0);
								if (
									(
										((_ | 0) == 198 ? b >>> 0 < 2147483647 : 0)
											? ((B = pe(b | 0) | 0),
											  (A = pe(0) | 0),
											  ((B | 0) != (-1 | 0)) &
													((A | 0) != (-1 | 0)) &
													(B >>> 0 < A >>> 0))
											: 0
									)
										? ((S = (A - B) | 0),
										  (U = S >>> 0 > ((p + 40) | 0) >>> 0),
										  U)
										: 0
								) {
									m = U ? S : u;
									_ = 201;
								}
								if ((_ | 0) == 201) {
									s = ((a[1936] | 0) + m) | 0;
									a[1936] = s;
									if (s >>> 0 > (a[1937] | 0) >>> 0) a[1937] = s;
									h = a[1834] | 0;
									e: do
										if (h) {
											t = 7760 | 0;
											while (1) {
												u = a[t >> 2] | 0;
												f = (t + 4) | 0;
												s = a[f >> 2] | 0;
												if ((B | 0) == ((u + s) | 0)) {
													_ = 213;
													break;
												}
												o = a[(t + 8) >> 2] | 0;
												if (!o) break;
												else t = o;
											}
											if (
												((_ | 0) == 213 ? ((a[(t + 12) >> 2] & 8) | 0) == 0 : 0)
													? (h >>> 0 >= u >>> 0) & (h >>> 0 < B >>> 0)
													: 0
											) {
												a[f >> 2] = s + m;
												i = ((a[1831] | 0) + m) | 0;
												r = (h + 8) | 0;
												if (!(r & 7)) r = 0;
												else r = (0 - r) & 7;
												A = (i - r) | 0;
												a[1834] = h + r;
												a[1831] = A;
												a[(h + (r + 4)) >> 2] = A | 1;
												a[(h + (i + 4)) >> 2] = 40;
												a[1835] = a[1950];
												break;
											}
											u = a[1832] | 0;
											if (B >>> 0 < u >>> 0) {
												a[1832] = B;
												u = B;
											}
											o = (B + m) | 0;
											f = 7760 | 0;
											while (1) {
												if ((a[f >> 2] | 0) == (o | 0)) {
													_ = 223;
													break;
												}
												s = a[(f + 8) >> 2] | 0;
												if (!s) break;
												else f = s;
											}
											if (
												(_ | 0) == 223 ? ((a[(f + 12) >> 2] & 8) | 0) == 0 : 0
											) {
												a[f >> 2] = B;
												s = (f + 4) | 0;
												a[s >> 2] = (a[s >> 2] | 0) + m;
												s = (B + 8) | 0;
												if (!(s & 7)) w = 0;
												else w = (0 - s) & 7;
												s = (B + (m + 8)) | 0;
												if (!(s & 7)) r = 0;
												else r = (0 - s) & 7;
												s = (B + (r + m)) | 0;
												k = (w + p) | 0;
												d = (B + k) | 0;
												i = (s - (B + w) - p) | 0;
												a[(B + (w + 4)) >> 2] = p | 3;
												r: do
													if ((s | 0) != (h | 0)) {
														if ((s | 0) == (a[1833] | 0)) {
															A = ((a[1830] | 0) + i) | 0;
															a[1830] = A;
															a[1833] = d;
															a[(B + (k + 4)) >> 2] = A | 1;
															a[(B + (A + k)) >> 2] = A;
															break;
														}
														l = (m + 4) | 0;
														o = a[(B + (l + r)) >> 2] | 0;
														if (((o & 3) | 0) == 1) {
															b = o & -8;
															n = o >>> 3;
															i: do
																if (o >>> 0 >= 256) {
																	e = a[(B + ((r | 24) + m)) >> 2] | 0;
																	f = a[(B + (m + 12 + r)) >> 2] | 0;
																	do
																		if ((f | 0) == (s | 0)) {
																			f = r | 16;
																			t = (B + (l + f)) | 0;
																			o = a[t >> 2] | 0;
																			if (!o) {
																				f = (B + (f + m)) | 0;
																				o = a[f >> 2] | 0;
																				if (!o) {
																					P = 0;
																					break;
																				}
																			} else f = t;
																			while (1) {
																				n = (o + 20) | 0;
																				t = a[n >> 2] | 0;
																				if (t) {
																					o = t;
																					f = n;
																					continue;
																				}
																				n = (o + 16) | 0;
																				t = a[n >> 2] | 0;
																				if (!t) break;
																				else {
																					o = t;
																					f = n;
																				}
																			}
																			if (f >>> 0 < u >>> 0) de();
																			else {
																				a[f >> 2] = 0;
																				P = o;
																				break;
																			}
																		} else {
																			t = a[(B + ((r | 8) + m)) >> 2] | 0;
																			if (t >>> 0 < u >>> 0) de();
																			u = (t + 12) | 0;
																			if ((a[u >> 2] | 0) != (s | 0)) de();
																			o = (f + 8) | 0;
																			if ((a[o >> 2] | 0) == (s | 0)) {
																				a[u >> 2] = f;
																				a[o >> 2] = t;
																				P = f;
																				break;
																			} else de();
																		}
																	while (0);
																	if (!e) break;
																	u = a[(B + (m + 28 + r)) >> 2] | 0;
																	o = (7616 + (u << 2)) | 0;
																	do
																		if ((s | 0) != (a[o >> 2] | 0)) {
																			if (e >>> 0 < (a[1832] | 0) >>> 0) de();
																			u = (e + 16) | 0;
																			if ((a[u >> 2] | 0) == (s | 0))
																				a[u >> 2] = P;
																			else a[(e + 20) >> 2] = P;
																			if (!P) break i;
																		} else {
																			a[o >> 2] = P;
																			if (P) break;
																			a[1829] = a[1829] & ~(1 << u);
																			break i;
																		}
																	while (0);
																	o = a[1832] | 0;
																	if (P >>> 0 < o >>> 0) de();
																	a[(P + 24) >> 2] = e;
																	s = r | 16;
																	u = a[(B + (s + m)) >> 2] | 0;
																	do
																		if (u)
																			if (u >>> 0 < o >>> 0) de();
																			else {
																				a[(P + 16) >> 2] = u;
																				a[(u + 24) >> 2] = P;
																				break;
																			}
																	while (0);
																	s = a[(B + (l + s)) >> 2] | 0;
																	if (!s) break;
																	if (s >>> 0 < (a[1832] | 0) >>> 0) de();
																	else {
																		a[(P + 20) >> 2] = s;
																		a[(s + 24) >> 2] = P;
																		break;
																	}
																} else {
																	f = a[(B + ((r | 8) + m)) >> 2] | 0;
																	t = a[(B + (m + 12 + r)) >> 2] | 0;
																	o = (7352 + ((n << 1) << 2)) | 0;
																	do
																		if ((f | 0) != (o | 0)) {
																			if (f >>> 0 < u >>> 0) de();
																			if ((a[(f + 12) >> 2] | 0) == (s | 0))
																				break;
																			de();
																		}
																	while (0);
																	if ((t | 0) == (f | 0)) {
																		a[1828] = a[1828] & ~(1 << n);
																		break;
																	}
																	do
																		if ((t | 0) == (o | 0)) F = (t + 8) | 0;
																		else {
																			if (t >>> 0 < u >>> 0) de();
																			u = (t + 8) | 0;
																			if ((a[u >> 2] | 0) == (s | 0)) {
																				F = u;
																				break;
																			}
																			de();
																		}
																	while (0);
																	a[(f + 12) >> 2] = t;
																	a[F >> 2] = f;
																}
															while (0);
															s = (B + ((b | r) + m)) | 0;
															u = (b + i) | 0;
														} else u = i;
														s = (s + 4) | 0;
														a[s >> 2] = a[s >> 2] & -2;
														a[(B + (k + 4)) >> 2] = u | 1;
														a[(B + (u + k)) >> 2] = u;
														s = u >>> 3;
														if (u >>> 0 < 256) {
															f = s << 1;
															t = (7352 + (f << 2)) | 0;
															o = a[1828] | 0;
															s = 1 << s;
															do
																if (!(o & s)) {
																	a[1828] = o | s;
																	R = (7352 + ((f + 2) << 2)) | 0;
																	O = t;
																} else {
																	s = (7352 + ((f + 2) << 2)) | 0;
																	o = a[s >> 2] | 0;
																	if (o >>> 0 >= (a[1832] | 0) >>> 0) {
																		R = s;
																		O = o;
																		break;
																	}
																	de();
																}
															while (0);
															a[R >> 2] = d;
															a[(O + 12) >> 2] = d;
															a[(B + (k + 8)) >> 2] = O;
															a[(B + (k + 12)) >> 2] = t;
															break;
														}
														i = u >>> 8;
														do
															if (!i) t = 0;
															else {
																if (u >>> 0 > 16777215) {
																	t = 31;
																	break;
																}
																y = (((i + 1048320) | 0) >>> 16) & 8;
																A = i << y;
																g = (((A + 520192) | 0) >>> 16) & 4;
																A = A << g;
																t = (((A + 245760) | 0) >>> 16) & 2;
																t = (14 - (g | y | t) + ((A << t) >>> 15)) | 0;
																t = ((u >>> ((t + 7) | 0)) & 1) | (t << 1);
															}
														while (0);
														o = (7616 + (t << 2)) | 0;
														a[(B + (k + 28)) >> 2] = t;
														a[(B + (k + 20)) >> 2] = 0;
														a[(B + (k + 16)) >> 2] = 0;
														s = a[1829] | 0;
														f = 1 << t;
														if (!(s & f)) {
															a[1829] = s | f;
															a[o >> 2] = d;
															a[(B + (k + 24)) >> 2] = o;
															a[(B + (k + 12)) >> 2] = d;
															a[(B + (k + 8)) >> 2] = d;
															break;
														}
														s = a[o >> 2] | 0;
														if ((t | 0) == 31) o = 0;
														else o = (25 - (t >>> 1)) | 0;
														i: do
															if (((a[(s + 4) >> 2] & -8) | 0) != (u | 0)) {
																t = u << o;
																while (1) {
																	f = (s + ((t >>> 31) << 2) + 16) | 0;
																	o = a[f >> 2] | 0;
																	if (!o) break;
																	if (((a[(o + 4) >> 2] & -8) | 0) == (u | 0)) {
																		I = o;
																		break i;
																	} else {
																		t = t << 1;
																		s = o;
																	}
																}
																if (f >>> 0 < (a[1832] | 0) >>> 0) de();
																else {
																	a[f >> 2] = d;
																	a[(B + (k + 24)) >> 2] = s;
																	a[(B + (k + 12)) >> 2] = d;
																	a[(B + (k + 8)) >> 2] = d;
																	break r;
																}
															} else I = s;
														while (0);
														r = (I + 8) | 0;
														i = a[r >> 2] | 0;
														A = a[1832] | 0;
														if ((I >>> 0 >= A >>> 0) & (i >>> 0 >= A >>> 0)) {
															a[(i + 12) >> 2] = d;
															a[r >> 2] = d;
															a[(B + (k + 8)) >> 2] = i;
															a[(B + (k + 12)) >> 2] = I;
															a[(B + (k + 24)) >> 2] = 0;
															break;
														} else de();
													} else {
														A = ((a[1831] | 0) + i) | 0;
														a[1831] = A;
														a[1834] = d;
														a[(B + (k + 4)) >> 2] = A | 1;
													}
												while (0);
												A = (B + (w | 8)) | 0;
												c = T;
												return A | 0;
											}
											s = 7760 | 0;
											while (1) {
												o = a[s >> 2] | 0;
												if (
													o >>> 0 <= h >>> 0
														? ((M = a[(s + 4) >> 2] | 0),
														  (E = (o + M) | 0),
														  E >>> 0 > h >>> 0)
														: 0
												)
													break;
												s = a[(s + 8) >> 2] | 0;
											}
											s = (o + (M + -39)) | 0;
											if (!(s & 7)) s = 0;
											else s = (0 - s) & 7;
											f = (o + (M + -47 + s)) | 0;
											f = f >>> 0 < ((h + 16) | 0) >>> 0 ? h : f;
											o = (f + 8) | 0;
											s = (B + 8) | 0;
											if (!(s & 7)) s = 0;
											else s = (0 - s) & 7;
											t = (m + -40 - s) | 0;
											a[1834] = B + s;
											a[1831] = t;
											a[(B + (s + 4)) >> 2] = t | 1;
											a[(B + (m + -36)) >> 2] = 40;
											a[1835] = a[1950];
											a[(f + 4) >> 2] = 27;
											a[(o + 0) >> 2] = a[1940];
											a[(o + 4) >> 2] = a[1941];
											a[(o + 8) >> 2] = a[1942];
											a[(o + 12) >> 2] = a[1943];
											a[1940] = B;
											a[1941] = m;
											a[1943] = 0;
											a[1942] = o;
											t = (f + 28) | 0;
											a[t >> 2] = 7;
											if (((f + 32) | 0) >>> 0 < E >>> 0)
												do {
													A = t;
													t = (t + 4) | 0;
													a[t >> 2] = 7;
												} while (((A + 8) | 0) >>> 0 < E >>> 0);
											if ((f | 0) != (h | 0)) {
												u = (f - h) | 0;
												s = (h + (u + 4)) | 0;
												a[s >> 2] = a[s >> 2] & -2;
												a[(h + 4) >> 2] = u | 1;
												a[(h + u) >> 2] = u;
												s = u >>> 3;
												if (u >>> 0 < 256) {
													f = s << 1;
													t = (7352 + (f << 2)) | 0;
													o = a[1828] | 0;
													s = 1 << s;
													do
														if (!(o & s)) {
															a[1828] = o | s;
															L = (7352 + ((f + 2) << 2)) | 0;
															C = t;
														} else {
															i = (7352 + ((f + 2) << 2)) | 0;
															r = a[i >> 2] | 0;
															if (r >>> 0 >= (a[1832] | 0) >>> 0) {
																L = i;
																C = r;
																break;
															}
															de();
														}
													while (0);
													a[L >> 2] = h;
													a[(C + 12) >> 2] = h;
													a[(h + 8) >> 2] = C;
													a[(h + 12) >> 2] = t;
													break;
												}
												i = u >>> 8;
												if (i)
													if (u >>> 0 > 16777215) f = 31;
													else {
														B = (((i + 1048320) | 0) >>> 16) & 8;
														A = i << B;
														y = (((A + 520192) | 0) >>> 16) & 4;
														A = A << y;
														f = (((A + 245760) | 0) >>> 16) & 2;
														f = (14 - (y | B | f) + ((A << f) >>> 15)) | 0;
														f = ((u >>> ((f + 7) | 0)) & 1) | (f << 1);
													}
												else f = 0;
												o = (7616 + (f << 2)) | 0;
												a[(h + 28) >> 2] = f;
												a[(h + 20) >> 2] = 0;
												a[(h + 16) >> 2] = 0;
												n = a[1829] | 0;
												s = 1 << f;
												if (!(n & s)) {
													a[1829] = n | s;
													a[o >> 2] = h;
													a[(h + 24) >> 2] = o;
													a[(h + 12) >> 2] = h;
													a[(h + 8) >> 2] = h;
													break;
												}
												n = a[o >> 2] | 0;
												if ((f | 0) == 31) i = 0;
												else i = (25 - (f >>> 1)) | 0;
												r: do
													if (((a[(n + 4) >> 2] & -8) | 0) != (u | 0)) {
														s = u << i;
														while (1) {
															o = (n + ((s >>> 31) << 2) + 16) | 0;
															i = a[o >> 2] | 0;
															if (!i) break;
															if (((a[(i + 4) >> 2] & -8) | 0) == (u | 0)) {
																D = i;
																break r;
															} else {
																s = s << 1;
																n = i;
															}
														}
														if (o >>> 0 < (a[1832] | 0) >>> 0) de();
														else {
															a[o >> 2] = h;
															a[(h + 24) >> 2] = n;
															a[(h + 12) >> 2] = h;
															a[(h + 8) >> 2] = h;
															break e;
														}
													} else D = n;
												while (0);
												r = (D + 8) | 0;
												i = a[r >> 2] | 0;
												A = a[1832] | 0;
												if ((D >>> 0 >= A >>> 0) & (i >>> 0 >= A >>> 0)) {
													a[(i + 12) >> 2] = h;
													a[r >> 2] = h;
													a[(h + 8) >> 2] = i;
													a[(h + 12) >> 2] = D;
													a[(h + 24) >> 2] = 0;
													break;
												} else de();
											}
										} else {
											A = a[1832] | 0;
											if (((A | 0) == 0) | (B >>> 0 < A >>> 0)) a[1832] = B;
											a[1940] = B;
											a[1941] = m;
											a[1943] = 0;
											a[1837] = a[1946];
											a[1836] = -1;
											r = 0;
											do {
												A = r << 1;
												y = (7352 + (A << 2)) | 0;
												a[(7352 + ((A + 3) << 2)) >> 2] = y;
												a[(7352 + ((A + 2) << 2)) >> 2] = y;
												r = (r + 1) | 0;
											} while ((r | 0) != 32);
											r = (B + 8) | 0;
											if (!(r & 7)) r = 0;
											else r = (0 - r) & 7;
											A = (m + -40 - r) | 0;
											a[1834] = B + r;
											a[1831] = A;
											a[(B + (r + 4)) >> 2] = A | 1;
											a[(B + (m + -36)) >> 2] = 40;
											a[1835] = a[1950];
										}
									while (0);
									r = a[1831] | 0;
									if (r >>> 0 > p >>> 0) {
										B = (r - p) | 0;
										a[1831] = B;
										A = a[1834] | 0;
										a[1834] = A + p;
										a[(A + (p + 4)) >> 2] = B | 1;
										a[(A + 4) >> 2] = p | 3;
										A = (A + 8) | 0;
										c = T;
										return A | 0;
									}
								}
								a[(Ue() | 0) >> 2] = 12;
								A = 0;
								c = T;
								return A | 0;
							}
							function dn(e) {
								e = e | 0;
								var r = 0,
									i = 0,
									n = 0,
									t = 0,
									f = 0,
									o = 0,
									s = 0,
									u = 0,
									l = 0,
									b = 0,
									d = 0,
									h = 0,
									p = 0,
									k = 0,
									w = 0,
									m = 0,
									v = 0,
									g = 0,
									y = 0,
									B = 0;
								B = c;
								if (!e) {
									c = B;
									return;
								}
								t = (e + -8) | 0;
								o = a[1832] | 0;
								if (t >>> 0 < o >>> 0) de();
								f = a[(e + -4) >> 2] | 0;
								n = f & 3;
								if ((n | 0) == 1) de();
								k = f & -8;
								w = (e + (k + -8)) | 0;
								do
									if (!(f & 1)) {
										f = a[t >> 2] | 0;
										if (!n) {
											c = B;
											return;
										}
										s = (-8 - f) | 0;
										b = (e + s) | 0;
										d = (f + k) | 0;
										if (b >>> 0 < o >>> 0) de();
										if ((b | 0) == (a[1833] | 0)) {
											t = (e + (k + -4)) | 0;
											f = a[t >> 2] | 0;
											if (((f & 3) | 0) != 3) {
												y = b;
												l = d;
												break;
											}
											a[1830] = d;
											a[t >> 2] = f & -2;
											a[(e + (s + 4)) >> 2] = d | 1;
											a[w >> 2] = d;
											c = B;
											return;
										}
										i = f >>> 3;
										if (f >>> 0 < 256) {
											n = a[(e + (s + 8)) >> 2] | 0;
											t = a[(e + (s + 12)) >> 2] | 0;
											f = (7352 + ((i << 1) << 2)) | 0;
											if ((n | 0) != (f | 0)) {
												if (n >>> 0 < o >>> 0) de();
												if ((a[(n + 12) >> 2] | 0) != (b | 0)) de();
											}
											if ((t | 0) == (n | 0)) {
												a[1828] = a[1828] & ~(1 << i);
												y = b;
												l = d;
												break;
											}
											if ((t | 0) != (f | 0)) {
												if (t >>> 0 < o >>> 0) de();
												f = (t + 8) | 0;
												if ((a[f >> 2] | 0) == (b | 0)) r = f;
												else de();
											} else r = (t + 8) | 0;
											a[(n + 12) >> 2] = t;
											a[r >> 2] = n;
											y = b;
											l = d;
											break;
										}
										r = a[(e + (s + 24)) >> 2] | 0;
										n = a[(e + (s + 12)) >> 2] | 0;
										do
											if ((n | 0) == (b | 0)) {
												t = (e + (s + 20)) | 0;
												f = a[t >> 2] | 0;
												if (!f) {
													t = (e + (s + 16)) | 0;
													f = a[t >> 2] | 0;
													if (!f) {
														u = 0;
														break;
													}
												}
												while (1) {
													i = (f + 20) | 0;
													n = a[i >> 2] | 0;
													if (n) {
														f = n;
														t = i;
														continue;
													}
													i = (f + 16) | 0;
													n = a[i >> 2] | 0;
													if (!n) break;
													else {
														f = n;
														t = i;
													}
												}
												if (t >>> 0 < o >>> 0) de();
												else {
													a[t >> 2] = 0;
													u = f;
													break;
												}
											} else {
												i = a[(e + (s + 8)) >> 2] | 0;
												if (i >>> 0 < o >>> 0) de();
												f = (i + 12) | 0;
												if ((a[f >> 2] | 0) != (b | 0)) de();
												t = (n + 8) | 0;
												if ((a[t >> 2] | 0) == (b | 0)) {
													a[f >> 2] = n;
													a[t >> 2] = i;
													u = n;
													break;
												} else de();
											}
										while (0);
										if (r) {
											f = a[(e + (s + 28)) >> 2] | 0;
											t = (7616 + (f << 2)) | 0;
											if ((b | 0) == (a[t >> 2] | 0)) {
												a[t >> 2] = u;
												if (!u) {
													a[1829] = a[1829] & ~(1 << f);
													y = b;
													l = d;
													break;
												}
											} else {
												if (r >>> 0 < (a[1832] | 0) >>> 0) de();
												f = (r + 16) | 0;
												if ((a[f >> 2] | 0) == (b | 0)) a[f >> 2] = u;
												else a[(r + 20) >> 2] = u;
												if (!u) {
													y = b;
													l = d;
													break;
												}
											}
											t = a[1832] | 0;
											if (u >>> 0 < t >>> 0) de();
											a[(u + 24) >> 2] = r;
											f = a[(e + (s + 16)) >> 2] | 0;
											do
												if (f)
													if (f >>> 0 < t >>> 0) de();
													else {
														a[(u + 16) >> 2] = f;
														a[(f + 24) >> 2] = u;
														break;
													}
											while (0);
											f = a[(e + (s + 20)) >> 2] | 0;
											if (f)
												if (f >>> 0 < (a[1832] | 0) >>> 0) de();
												else {
													a[(u + 20) >> 2] = f;
													a[(f + 24) >> 2] = u;
													y = b;
													l = d;
													break;
												}
											else {
												y = b;
												l = d;
											}
										} else {
											y = b;
											l = d;
										}
									} else {
										y = t;
										l = k;
									}
								while (0);
								if (y >>> 0 >= w >>> 0) de();
								f = (e + (k + -4)) | 0;
								t = a[f >> 2] | 0;
								if (!(t & 1)) de();
								if (!(t & 2)) {
									if ((w | 0) == (a[1834] | 0)) {
										b = ((a[1831] | 0) + l) | 0;
										a[1831] = b;
										a[1834] = y;
										a[(y + 4) >> 2] = b | 1;
										if ((y | 0) != (a[1833] | 0)) {
											c = B;
											return;
										}
										a[1833] = 0;
										a[1830] = 0;
										c = B;
										return;
									}
									if ((w | 0) == (a[1833] | 0)) {
										b = ((a[1830] | 0) + l) | 0;
										a[1830] = b;
										a[1833] = y;
										a[(y + 4) >> 2] = b | 1;
										a[(y + b) >> 2] = b;
										c = B;
										return;
									}
									o = ((t & -8) + l) | 0;
									i = t >>> 3;
									do
										if (t >>> 0 >= 256) {
											r = a[(e + (k + 16)) >> 2] | 0;
											f = a[(e + (k | 4)) >> 2] | 0;
											do
												if ((f | 0) == (w | 0)) {
													t = (e + (k + 12)) | 0;
													f = a[t >> 2] | 0;
													if (!f) {
														t = (e + (k + 8)) | 0;
														f = a[t >> 2] | 0;
														if (!f) {
															p = 0;
															break;
														}
													}
													while (1) {
														i = (f + 20) | 0;
														n = a[i >> 2] | 0;
														if (n) {
															f = n;
															t = i;
															continue;
														}
														i = (f + 16) | 0;
														n = a[i >> 2] | 0;
														if (!n) break;
														else {
															f = n;
															t = i;
														}
													}
													if (t >>> 0 < (a[1832] | 0) >>> 0) de();
													else {
														a[t >> 2] = 0;
														p = f;
														break;
													}
												} else {
													t = a[(e + k) >> 2] | 0;
													if (t >>> 0 < (a[1832] | 0) >>> 0) de();
													n = (t + 12) | 0;
													if ((a[n >> 2] | 0) != (w | 0)) de();
													i = (f + 8) | 0;
													if ((a[i >> 2] | 0) == (w | 0)) {
														a[n >> 2] = f;
														a[i >> 2] = t;
														p = f;
														break;
													} else de();
												}
											while (0);
											if (r) {
												f = a[(e + (k + 20)) >> 2] | 0;
												t = (7616 + (f << 2)) | 0;
												if ((w | 0) == (a[t >> 2] | 0)) {
													a[t >> 2] = p;
													if (!p) {
														a[1829] = a[1829] & ~(1 << f);
														break;
													}
												} else {
													if (r >>> 0 < (a[1832] | 0) >>> 0) de();
													f = (r + 16) | 0;
													if ((a[f >> 2] | 0) == (w | 0)) a[f >> 2] = p;
													else a[(r + 20) >> 2] = p;
													if (!p) break;
												}
												f = a[1832] | 0;
												if (p >>> 0 < f >>> 0) de();
												a[(p + 24) >> 2] = r;
												t = a[(e + (k + 8)) >> 2] | 0;
												do
													if (t)
														if (t >>> 0 < f >>> 0) de();
														else {
															a[(p + 16) >> 2] = t;
															a[(t + 24) >> 2] = p;
															break;
														}
												while (0);
												i = a[(e + (k + 12)) >> 2] | 0;
												if (i)
													if (i >>> 0 < (a[1832] | 0) >>> 0) de();
													else {
														a[(p + 20) >> 2] = i;
														a[(i + 24) >> 2] = p;
														break;
													}
											}
										} else {
											n = a[(e + k) >> 2] | 0;
											t = a[(e + (k | 4)) >> 2] | 0;
											f = (7352 + ((i << 1) << 2)) | 0;
											if ((n | 0) != (f | 0)) {
												if (n >>> 0 < (a[1832] | 0) >>> 0) de();
												if ((a[(n + 12) >> 2] | 0) != (w | 0)) de();
											}
											if ((t | 0) == (n | 0)) {
												a[1828] = a[1828] & ~(1 << i);
												break;
											}
											if ((t | 0) != (f | 0)) {
												if (t >>> 0 < (a[1832] | 0) >>> 0) de();
												f = (t + 8) | 0;
												if ((a[f >> 2] | 0) == (w | 0)) h = f;
												else de();
											} else h = (t + 8) | 0;
											a[(n + 12) >> 2] = t;
											a[h >> 2] = n;
										}
									while (0);
									a[(y + 4) >> 2] = o | 1;
									a[(y + o) >> 2] = o;
									if ((y | 0) == (a[1833] | 0)) {
										a[1830] = o;
										c = B;
										return;
									} else f = o;
								} else {
									a[f >> 2] = t & -2;
									a[(y + 4) >> 2] = l | 1;
									a[(y + l) >> 2] = l;
									f = l;
								}
								n = f >>> 3;
								if (f >>> 0 < 256) {
									t = n << 1;
									f = (7352 + (t << 2)) | 0;
									i = a[1828] | 0;
									n = 1 << n;
									if (i & n) {
										i = (7352 + ((t + 2) << 2)) | 0;
										r = a[i >> 2] | 0;
										if (r >>> 0 < (a[1832] | 0) >>> 0) de();
										else {
											m = i;
											v = r;
										}
									} else {
										a[1828] = i | n;
										m = (7352 + ((t + 2) << 2)) | 0;
										v = f;
									}
									a[m >> 2] = y;
									a[(v + 12) >> 2] = y;
									a[(y + 8) >> 2] = v;
									a[(y + 12) >> 2] = f;
									c = B;
									return;
								}
								i = f >>> 8;
								if (i)
									if (f >>> 0 > 16777215) t = 31;
									else {
										l = (((i + 1048320) | 0) >>> 16) & 8;
										b = i << l;
										u = (((b + 520192) | 0) >>> 16) & 4;
										b = b << u;
										t = (((b + 245760) | 0) >>> 16) & 2;
										t = (14 - (u | l | t) + ((b << t) >>> 15)) | 0;
										t = ((f >>> ((t + 7) | 0)) & 1) | (t << 1);
									}
								else t = 0;
								r = (7616 + (t << 2)) | 0;
								a[(y + 28) >> 2] = t;
								a[(y + 20) >> 2] = 0;
								a[(y + 16) >> 2] = 0;
								i = a[1829] | 0;
								n = 1 << t;
								e: do
									if (i & n) {
										r = a[r >> 2] | 0;
										if ((t | 0) == 31) i = 0;
										else i = (25 - (t >>> 1)) | 0;
										r: do
											if (((a[(r + 4) >> 2] & -8) | 0) != (f | 0)) {
												t = f << i;
												while (1) {
													n = (r + ((t >>> 31) << 2) + 16) | 0;
													i = a[n >> 2] | 0;
													if (!i) break;
													if (((a[(i + 4) >> 2] & -8) | 0) == (f | 0)) {
														g = i;
														break r;
													} else {
														t = t << 1;
														r = i;
													}
												}
												if (n >>> 0 < (a[1832] | 0) >>> 0) de();
												else {
													a[n >> 2] = y;
													a[(y + 24) >> 2] = r;
													a[(y + 12) >> 2] = y;
													a[(y + 8) >> 2] = y;
													break e;
												}
											} else g = r;
										while (0);
										i = (g + 8) | 0;
										r = a[i >> 2] | 0;
										b = a[1832] | 0;
										if ((g >>> 0 >= b >>> 0) & (r >>> 0 >= b >>> 0)) {
											a[(r + 12) >> 2] = y;
											a[i >> 2] = y;
											a[(y + 8) >> 2] = r;
											a[(y + 12) >> 2] = g;
											a[(y + 24) >> 2] = 0;
											break;
										} else de();
									} else {
										a[1829] = i | n;
										a[r >> 2] = y;
										a[(y + 24) >> 2] = r;
										a[(y + 12) >> 2] = y;
										a[(y + 8) >> 2] = y;
									}
								while (0);
								b = ((a[1836] | 0) + -1) | 0;
								a[1836] = b;
								if (!b) r = 7768 | 0;
								else {
									c = B;
									return;
								}
								while (1) {
									r = a[r >> 2] | 0;
									if (!r) break;
									else r = (r + 8) | 0;
								}
								a[1836] = -1;
								c = B;
								return;
							}
							function hn() {}
							function pn(e) {
								e = e | 0;
								var r = 0;
								r = e;
								while (n[r >> 0] | 0) r = (r + 1) | 0;
								return (r - e) | 0;
							}
							function kn(e, r, i) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								var t = 0,
									f = 0,
									o = 0,
									s = 0;
								t = (e + i) | 0;
								if ((i | 0) >= 20) {
									r = r & 255;
									o = e & 3;
									s = r | (r << 8) | (r << 16) | (r << 24);
									f = t & ~3;
									if (o) {
										o = (e + 4 - o) | 0;
										while ((e | 0) < (o | 0)) {
											n[e >> 0] = r;
											e = (e + 1) | 0;
										}
									}
									while ((e | 0) < (f | 0)) {
										a[e >> 2] = s;
										e = (e + 4) | 0;
									}
								}
								while ((e | 0) < (t | 0)) {
									n[e >> 0] = r;
									e = (e + 1) | 0;
								}
								return (e - i) | 0;
							}
							function wn(e, r, i) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								var t = 0;
								if ((i | 0) >= 4096) return me(e | 0, r | 0, i | 0) | 0;
								t = e | 0;
								if ((e & 3) == (r & 3)) {
									while (e & 3) {
										if (!i) return t | 0;
										n[e >> 0] = n[r >> 0] | 0;
										e = (e + 1) | 0;
										r = (r + 1) | 0;
										i = (i - 1) | 0;
									}
									while ((i | 0) >= 4) {
										a[e >> 2] = a[r >> 2];
										e = (e + 4) | 0;
										r = (r + 4) | 0;
										i = (i - 4) | 0;
									}
								}
								while ((i | 0) > 0) {
									n[e >> 0] = n[r >> 0] | 0;
									e = (e + 1) | 0;
									r = (r + 1) | 0;
									i = (i - 1) | 0;
								}
								return t | 0;
							}
							function mn(e, r, i, n, t, a) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								n = n | 0;
								t = t | 0;
								a = a | 0;
								gn[e & 3](r | 0, i | 0, n | 0, t | 0, a | 0);
							}
							function vn(e, r, i, n, t) {
								e = e | 0;
								r = r | 0;
								i = i | 0;
								n = n | 0;
								t = t | 0;
								re(0);
							}
							var gn = [vn, je, xe, vn];
							return {
								_strlen: pn,
								_free: dn,
								_broadwayGetMajorVersion: fn,
								_get_h264bsdClip: vi,
								_broadwayExit: an,
								_memset: kn,
								_broadwayCreateStream: Qi,
								_malloc: bn,
								_memcpy: wn,
								_broadwayGetMinorVersion: on,
								_broadwayPlayStream: rn,
								_broadwaySetStreamLength: en,
								_broadwayInit: nn,
								runPostSets: hn,
								stackAlloc: fr,
								stackSave: or,
								stackRestore: sr,
								setThrew: ur,
								setTempRet0: br,
								getTempRet0: dr,
								dynCall_viiiii: mn,
							};
						})(p.Xc, p.Yc, Q),
						Bb = (p._strlen = $._strlen),
						Ea = (p._free = $._free);
					(p._broadwayGetMajorVersion = $._broadwayGetMajorVersion),
						(p._get_h264bsdClip = $._get_h264bsdClip),
						(p._broadwayExit = $._broadwayExit);
					var Gb = (p._memset = $._memset);
					p._broadwayCreateStream = $._broadwayCreateStream;
					var Ca = (p._malloc = $._malloc),
						gc = (p._memcpy = $._memcpy);
					if (
						((p._broadwayGetMinorVersion = $._broadwayGetMinorVersion),
						(p._broadwayPlayStream = $._broadwayPlayStream),
						(p._broadwaySetStreamLength = $._broadwaySetStreamLength),
						(p._broadwayInit = $._broadwayInit),
						(p.runPostSets = $.runPostSets),
						(p.dynCall_viiiii = $.dynCall_viiiii),
						(z.pb = $.stackAlloc),
						(z.Tb = $.stackSave),
						(z.Sb = $.stackRestore),
						(z.Yd = $.setTempRet0),
						(z.xd = $.getTempRet0),
						T)
					)
						if (
							("function" == typeof p.locateFile
								? (T = p.locateFile(T))
								: p.memoryInitializerPrefixURL &&
								  (T = p.memoryInitializerPrefixURL + T),
							t || da)
						) {
							var hc = p.readBinary(T);
							N.set(hc, Ia);
						} else
							Ya(),
								yb(
									T,
									function (e) {
										N.set(e, Ia), Za();
									},
									function () {
										d("could not load memory initializer " + T);
									}
								);
					ia.prototype = Error();
					var ic,
						jc = k,
						Xa = function e() {
							!p.calledRun && lc && mc(), p.calledRun || (Xa = e);
						};
					if (
						((p.callMain = p.ag =
							function (e) {
								function r() {
									for (var e = 0; 3 > e; e++) t.push(0);
								}
								w(
									0 == S,
									"cannot call main when async dependencies remain! (listen on __ATMAIN__)"
								),
									w(
										0 == Oa.length,
										"cannot call main when preRun functions remain to be called"
									),
									(e = e || []),
									Sa || ((Sa = i), Na(R));
								var n = e.length + 1,
									t = [M(Va(p.thisProgram), "i8", 0)];
								r();
								for (var a = 0; a < n - 1; a += 1)
									t.push(M(Va(e[a]), "i8", 0)), r();
								t.push(0), (t = M(t, "i32", 0)), (ic = y);
								try {
									var f = p._main(n, t, 0);
									nc(f);
								} catch (e) {
									e instanceof ia ||
										("SimulateInfiniteLoop" == e
											? (p.noExitRuntime = i)
											: (e &&
													"object" == typeof e &&
													e.stack &&
													p.fa("exception thrown: " + [e, e.stack]),
											  d(e)));
								} finally {
								}
							}),
						(p.run = p.Ng = mc),
						(p.exit = p.hg = nc),
						(p.abort = p.abort = A),
						p.preInit)
					)
						for (
							"function" == typeof p.preInit && (p.preInit = [p.preInit]);
							0 < p.preInit.length;

						)
							p.preInit.pop()();
					var lc = m;
					p.noInitialRun && (lc = m), mc();
					var resultModule = window.Module || global.Module || Module;
					return resultModule;
				},
				nowValue = function () {
					return new Date().getTime();
				};
			"undefined" != typeof performance &&
				performance.now &&
				(nowValue = function () {
					return performance.now();
				});
			var Broadway = function (e) {
				function r(e, r) {
					return a.subarray(e, e + r);
				}
				(this.options = e || {}), (this.now = nowValue);
				var i,
					n = {},
					t = getModule.apply(n, [
						function () {},
						function (e, n, t) {
							var a = this.pictureBuffers[e];
							a || (a = this.pictureBuffers[e] = r(e, (n * t * 3) / 2));
							var f,
								o = !1;
							if (
								(this.infoAr.length && ((o = !0), (f = this.infoAr)),
								(this.infoAr = []),
								this.options.rgb)
							) {
								i || (i = getAsm(n, t)), i.inp.set(a), i.doit();
								var s = new Uint8Array(i.outSize);
								return (
									s.set(i.out),
									o && (f[0].finishDecoding = nowValue()),
									void this.onPictureDecoded(s, n, t, f)
								);
							}
							o && (f[0].finishDecoding = nowValue()),
								this.onPictureDecoded(a, n, t, f);
						}.bind(this),
					]),
					a = (t.HEAP8, t.HEAPU8),
					f = (t.HEAP16, t.HEAP32, t._get_h264bsdClip(), 1048576);
				t._broadwayInit(),
					(this.streamBuffer = r(t._broadwayCreateStream(f), f)),
					(this.pictureBuffers = {}),
					(this.infoAr = []),
					(this.onPictureDecoded = function (e, r, i, n) {}),
					(this.decode = function (e, r) {
						r && (this.infoAr.push(r), (r.startDecoding = nowValue())),
							this.streamBuffer.set(e),
							t._broadwaySetStreamLength(e.length),
							t._broadwayPlayStream();
					});
			};
			Broadway.prototype = {
				configure: function (e) {
					console.info("Broadway Configured: " + JSON.stringify(e));
				},
			};
			var asmInstances = {},
				getAsm = function (e, r) {
					var i = "" + e + "x" + r;
					if (asmInstances[i]) return asmInstances[i];
					for (
						var n = e * r,
							t = (0 | n) >> 2,
							a = n + t + t,
							f = e * r * 4,
							o = 4 * Math.pow(2, 24),
							s = a + f + o,
							u = Math.pow(2, 24),
							l = u;
						l < s;

					)
						l += u;
					var c = new ArrayBuffer(l),
						b = asmFactory(global, {}, c);
					return (
						b.init(e, r),
						(asmInstances[i] = b),
						(b.heap = c),
						(b.out = new Uint8Array(c, 0, f)),
						(b.inp = new Uint8Array(c, f, a)),
						(b.outSize = f),
						b
					);
				};
			if ("undefined" != typeof self) {
				var isWorker = !1,
					decoder,
					reuseMemory = !1,
					memAr = [],
					getMem = function (e) {
						if (memAr.length) {
							for (var r = memAr.shift(); r && r.byteLength !== e; )
								r = memAr.shift();
							if (r) return r;
						}
						return new ArrayBuffer(e);
					};
				self.addEventListener(
					"message",
					function (e) {
						isWorker
							? (reuseMemory && e.data.reuse && memAr.push(e.data.reuse),
							  e.data.buf &&
									decoder.decode(
										new Uint8Array(
											e.data.buf,
											e.data.offset || 0,
											e.data.length
										),
										e.data.info
									))
							: e.data &&
							  "Broadway.js - Worker init" === e.data.type &&
							  ((isWorker = !0),
							  (decoder = new Broadway(e.data.options)),
							  e.data.options.reuseMemory
									? ((reuseMemory = !0),
									  (decoder.onPictureDecoded = function (e, r, i, n) {
											var t = new Uint8Array(getMem(e.length));
											t.set(e, 0, e.length),
												postMessage(
													{
														buf: t.buffer,
														length: e.length,
														width: r,
														height: i,
														infos: n,
													},
													[t.buffer]
												);
									  }))
									: (decoder.onPictureDecoded = function (e, r, i, n) {
											e && (e = new Uint8Array(e));
											var t = new Uint8Array(e.length);
											t.set(e, 0, e.length),
												postMessage(
													{
														buf: t.buffer,
														length: e.length,
														width: r,
														height: i,
														infos: n,
													},
													[t.buffer]
												);
									  }),
							  postMessage({ consoleLog: "broadway worker initialized" }));
					},
					!1
				);
			}
			return (Broadway.nowValue = nowValue), Broadway;
		})()
	);
});
//# sourceMappingURL=Decoder.min.js.map
