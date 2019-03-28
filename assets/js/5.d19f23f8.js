(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{243:function(t,s,e){"use strict";e.r(s);var a=e(2),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_0-52-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0-52-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.52.1")]),t._v(" "),e("ul",[e("li",[t._v("Support queries to linked mapped storage (found in new staking interfaces)")]),t._v(" "),e("li",[t._v("Add derive.staking.controllers to retrieve all active staking controllers")]),t._v(" "),e("li",[t._v("Align types as per latest substrate master")]),t._v(" "),e("li",[t._v("PeerInfo from system_peers does not have the index field anymore (dropped in substrate)")]),t._v(" "),e("li",[t._v("Allow parsing of V3 metadata with DoubleMap support")]),t._v(" "),e("li",[t._v("Check for single instances for api and types as they are loaded (assertSingletonPackage)")])]),t._v(" "),e("h1",{attrs:{id:"_0-51-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0-51-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.51.1")]),t._v(" "),e("ul",[e("li",[t._v("Support metadata V2 as per latest substrate master")]),t._v(" "),e("li",[t._v("Update metadata with new types as per lastest substrate master")])]),t._v(" "),e("h1",{attrs:{id:"_0-50-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0-50-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.50.1")]),t._v(" "),e("ul",[e("li",[t._v("Lastest util-crypto (usage of WASM with JS fallbacks if not available)")]),t._v(" "),e("li",[t._v("Update upstream @polkadot dependencies (for new crypto)")])]),t._v(" "),e("h1",{attrs:{id:"_0-49-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0-49-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.49.1")]),t._v(" "),e("ul",[e("li",[t._v("Fix large message signing on non-known nodes (default is now hashing, there has been enough time between upgrades)")])]),t._v(" "),e("h1",{attrs:{id:"_0-48-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0-48-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.48.1")]),t._v(" "),e("ul",[e("li",[t._v("Pull in new sr25519 capable keyring for dev nodes")]),t._v(" "),e("li",[t._v("When using dev mode, it assumes that the node is the latest with derived sr25519 keys")])]),t._v(" "),e("h1",{attrs:{id:"_0-47-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0-47-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.47.1")]),t._v(" "),e("ul",[e("li",[t._v("Swap to publishing -beta.x on merge (non-breaking testing)")])]),t._v(" "),e("h1",{attrs:{id:"_0-46-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0-46-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.46.1")]),t._v(" "),e("ul",[e("li",[t._v("Extended type registration to now handle internal types as well. Additionally the built-in Extrinsic type can now we overridden with a custom version.")]),t._v(" "),e("li",[t._v("Where "),e("code",[t._v("Extrinsic")]),t._v(" and "),e("code",[t._v("Method")]),t._v(" is used as types, considder importing "),e("code",[t._v("{ IMethod, IExtrinsic }")]),t._v(" from "),e("code",[t._v("@polkadot/types/types")]),t._v(", especially in the cases where this is uased from a "),e("code",[t._v("SubmittableExtrinsic")])]),t._v(" "),e("li",[t._v("The "),e("code",[t._v("typeRegistry")]),t._v(" constant is now "),e("code",[t._v("getTypeRegistry()")]),t._v(" as a function")])]),t._v(" "),e("h1",{attrs:{id:"_0-45-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0-45-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.45.1")]),t._v(" "),e("ul",[e("li",[t._v("Storage with option values now correctly return "),e("code",[t._v("Option<Type>")]),t._v(" and is indicated as such in the documentation")])]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// old")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ll "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" api"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("session"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("lastLengthChange")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ll'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ll "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* BlockNumber */")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// would be 0 if not set yet")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// new")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" llo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" api"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("session"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("lastLengthChange")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'llo'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" llo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("unwrapOr")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'not set'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Option<BlockNumber> */")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])]),e("h1",{attrs:{id:"_0-44-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0-44-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.44.1")]),t._v(" "),e("ul",[e("li",[t._v("Split primitives and types into seperate folders. This should not affect external use since the exports remain the same, however does have an impact where classes are referenced directly. e.g.")])]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// old (affected)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Method "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/types/Method'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Signature "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/types/Signature'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// new locations")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Method "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/types/primitive/Method'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Signature "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/types/type/Signature'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// unaffected")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Method"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Signature "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/types'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br")])]),e("h1",{attrs:{id:"_0-43-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0-43-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.43.1")]),t._v(" "),e("ul",[e("li",[t._v("Intrduces support for the new keyring with sr25519 support in addition to ed25519. While this does not change the exposed API, it is considerred breaking since @polkadot/keuyring has interface changes. (Unless needed, don't rush the upgrade)")])]),t._v(" "),e("h1",{attrs:{id:"_0-42-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0-42-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.42.1")]),t._v(" "),e("ul",[e("li",[t._v("Support for substrate hash signing with implVersion >= 18")]),t._v(" "),e("li",[t._v("Changed signatures for Extrinsic signing, this should not have (much) of an impact since it is generally not used directly. SubmittableExtrinsic (as exposed by the API), supports the old-style use.")])]),t._v(" "),e("h1",{attrs:{id:"_0-41-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0-41-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.41.1")]),t._v(" "),e("ul",[e("li",[t._v("Support the V1 metadata specification from Substrate in addition to the currently testnet-active V0 version")])]),t._v(" "),e("h1",{attrs:{id:"_0-40-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0-40-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.40.1")]),t._v(" "),e("ul",[e("li",[t._v("The API interfaces now require a WS-compatible provider, e.g. subscription support is a must. Previously the HTTPProvider could be use (although it was very limited in the interactions).")])]),t._v(" "),e("h1",{attrs:{id:"_0-39-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0-39-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.39.1")]),t._v(" "),e("ul",[e("li",[t._v("The Promise API now returns a "),e("code",[t._v("Promise<UnsubFunction>")]),t._v(" instead of "),e("code",[t._v("UnsubFunction")]),t._v(" when making subscriptions.")])]),t._v(" "),e("h1",{attrs:{id:"_0-38-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0-38-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.38.1")]),t._v(" "),e("p",[t._v("Substrate has been updated with a breaking new transaction format where the Index/Nonce is now encoded as a Compact. This change is being rolled out to both Alexander (Polkadot testnet) as well as Charred Cherry (Substrate testnet) - transactions between old and new are not compatible.")]),t._v(" "),e("h1",{attrs:{id:"_0-37-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0-37-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.37.1")]),t._v(" "),e("p",[t._v("api-observable has been removed. This was only used in /apps and inconsistent with the api/rx and api/promise APIs. Future work will include derivates like was included in api-observable into the base.")]),t._v(" "),e("p",[t._v("Tuples now return single types when only one type is available, i.e. "),e("code",[t._v("(AccountId)")]),t._v(" would now resolve as "),e("code",[t._v("AccountId")]),t._v(". The extra type wrapper adds no benefit to users here.")]),t._v(" "),e("h1",{attrs:{id:"_0-36-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0-36-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.36.1")]),t._v(" "),e("p",[t._v("Api Promise has been updated in the way we deal with subscriptions. Previously a subscription returned "),e("code",[t._v("Promise<number>")]),t._v(" where the caller was to keep track of the id and use it in subsequent unsubscribes. Now any subscriptions return an unsubscribe/destroy function "),e("code",[t._v("(): void")]),t._v(", that is use for removing the subscriptions, e.g.")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" unsubscribe "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" api"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("balance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("freeBalance")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Alice"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("balance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("unsubscribe")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// here we destroy the subscription")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("h1",{attrs:{id:"_0-35-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0-35-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.35.1")]),t._v(" "),e("p",[t._v("Swapped to new metadata structures from Substrate. If the API is not working with your node, update Substrate to latest master branch. (Or 0.9.1 for Charred Cherry). Dropped support for old metadata as found as far back as BBQ Birch.")]),t._v(" "),e("h1",{attrs:{id:"_0-34-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0-34-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.34.1")]),t._v(" "),e("p",[t._v("Changed the send signature (for future expansion of eg. events) to return "),e("code",[t._v("result: { status: ExtrinsicStatus }")]),t._v(" instead of "),e("code",[t._v("status: ExtrinsicStatus")]),t._v(". For most cases where only status "),e("code",[t._v("type")]),t._v(" checks are used, i.e. "),e("code",[t._v("status.type === 'Finalised'")]),t._v(" this should not be a breaking change. Deep inspection of the status object however will need to adapt.")])])},[],!1,null,null,null);s.default=n.exports}}]);