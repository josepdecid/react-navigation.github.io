"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[36054],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(a),b=i,h=c["".concat(s,".").concat(b)]||c[b]||p[b]||r;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),i=a(86010),r={tabItem:"tabItem_Ymn6"};function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,o),hidden:a},t)}},74866:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(83117),i=a(67294),r=a(86010),o=a(12466),l=a(16550),s=a(91980),u=a(67392),d=a(50012);function c(e){return function(e){return i.Children.map(e,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,a=e.children;return(0,i.useMemo)((function(){var e=null!=t?t:c(a);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function b(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,r=(0,l.k6)(),o=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,s._X)(o),(0,i.useCallback)((function(e){if(o){var t=new URLSearchParams(r.location.search);t.set(o,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}}),[o,r])]}function m(e){var t,a,n,r,o=e.defaultValue,l=e.queryString,s=void 0!==l&&l,u=e.groupId,c=p(e),m=(0,i.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!b({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var i=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:o,tabValues:c})})),v=m[0],k=m[1],f=h({queryString:s,groupId:u}),g=f[0],y=f[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),a=(0,d.Nk)(t),n=a[0],r=a[1],[n,(0,i.useCallback)((function(e){t&&r.set(e)}),[t,r])]),w=N[0],C=N[1],T=function(){var e=null!=g?g:w;return b({value:e,tabValues:c})?e:null}();return(0,i.useLayoutEffect)((function(){T&&k(T)}),[T]),{selectedValue:v,selectValue:(0,i.useCallback)((function(e){if(!b({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);k(e),y(e),C(e)}),[y,C,c]),tabValues:c}}var v=a(72389),k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){var t=e.className,a=e.block,l=e.selectedValue,s=e.selectValue,u=e.tabValues,d=[],c=(0,o.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,a=d.indexOf(t),n=u[a].value;n!==l&&(c(t),s(n))},b=function(e){var t,a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var n,i=d.indexOf(e.currentTarget)+1;a=null!=(n=d[i])?n:d[0];break;case"ArrowLeft":var r,o=d.indexOf(e.currentTarget)-1;a=null!=(r=d[o])?r:d[d.length-1]}null==(t=a)||t.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((function(e){var t=e.value,a=e.label,o=e.attributes;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return d.push(e)},onKeyDown:b,onClick:p},o,{className:(0,r.Z)("tabs__item",k.tabItem,null==o?void 0:o.className,{"tabs__item--active":l===t})}),null!=a?a:t)})))}function g(e){var t=e.lazy,a=e.children,n=e.selectedValue;if(a=Array.isArray(a)?a:[a],t){var r=a.find((function(e){return e.props.value===n}));return r?(0,i.cloneElement)(r,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function y(e){var t=m(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",k.tabList)},i.createElement(f,(0,n.Z)({},e,t)),i.createElement(g,(0,n.Z)({},e,t)))}function N(e){var t=(0,v.Z)();return i.createElement(y,(0,n.Z)({key:String(t)},e))}},39845:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return b}});var n=a(83117),i=a(80102),r=(a(67294),a(3905)),o=a(74866),l=a(85162),s=["components"],u={id:"material-top-tab-navigator",title:"Material Top Tabs Navigator",sidebar_label:"Material Top Tabs"},d=void 0,c={unversionedId:"material-top-tab-navigator",id:"version-7.x/material-top-tab-navigator",title:"Material Top Tabs Navigator",description:"A material-design themed tab bar on the top of the screen that lets you switch between different routes by tapping the tabs or swiping horizontally. Transitions are animated by default. Screen components for each route are mounted immediately.",source:"@site/versioned_docs/version-7.x/material-top-tab-navigator.md",sourceDirName:".",slug:"/material-top-tab-navigator",permalink:"/docs/7.x/material-top-tab-navigator",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/material-top-tab-navigator.md",tags:[],version:"7.x",frontMatter:{id:"material-top-tab-navigator",title:"Material Top Tabs Navigator",sidebar_label:"Material Top Tabs"},sidebar:"version-7.x/docs",previous:{title:"Material Bottom Tabs",permalink:"/docs/7.x/material-bottom-tab-navigator"},next:{title:"Developer tools",permalink:"/docs/7.x/devtools"}},p={},b=[{value:"Installation",id:"installation",level:2},{value:"API Definition",id:"api-definition",level:2},{value:"Props",id:"props",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>initialRouteName</code>",id:"initialroutename",level:4},{value:"<code>screenOptions</code>",id:"screenoptions",level:4},{value:"<code>backBehavior</code>",id:"backbehavior",level:4},{value:"<code>tabBarPosition</code>",id:"tabbarposition",level:4},{value:"<code>keyboardDismissMode</code>",id:"keyboarddismissmode",level:4},{value:"<code>initialLayout</code>",id:"initiallayout",level:4},{value:"<code>sceneContainerStyle</code>",id:"scenecontainerstyle",level:4},{value:"<code>style</code>",id:"style",level:4},{value:"<code>tabBar</code>",id:"tabbar",level:4},{value:"Options",id:"options",level:3},{value:"<code>title</code>",id:"title",level:4},{value:"<code>tabBarLabel</code>",id:"tabbarlabel",level:4},{value:"<code>tabBarAccessibilityLabel</code>",id:"tabbaraccessibilitylabel",level:4},{value:"<code>tabBarAllowFontScaling</code>",id:"tabbarallowfontscaling",level:4},{value:"<code>tabBarShowLabel</code>",id:"tabbarshowlabel",level:4},{value:"<code>tabBarIcon</code>",id:"tabbaricon",level:4},{value:"<code>tabBarShowIcon</code>",id:"tabbarshowicon",level:4},{value:"<code>tabBarBadge</code>",id:"tabbarbadge",level:4},{value:"<code>tabBarIndicator</code>",id:"tabbarindicator",level:4},{value:"<code>tabBarIndicatorStyle</code>",id:"tabbarindicatorstyle",level:4},{value:"<code>tabBarIndicatorContainerStyle</code>",id:"tabbarindicatorcontainerstyle",level:4},{value:"<code>tabBarTestID</code>",id:"tabbartestid",level:4},{value:"<code>tabBarActiveTintColor</code>",id:"tabbaractivetintcolor",level:4},{value:"<code>tabBarInactiveTintColor</code>",id:"tabbarinactivetintcolor",level:4},{value:"<code>tabBarPressColor</code>",id:"tabbarpresscolor",level:4},{value:"<code>tabBarPressOpacity</code>",id:"tabbarpressopacity",level:4},{value:"<code>tabBarBounces</code>",id:"tabbarbounces",level:4},{value:"<code>tabBarScrollEnabled</code>",id:"tabbarscrollenabled",level:4},{value:"<code>tabBarIconStyle</code>",id:"tabbariconstyle",level:4},{value:"<code>tabBarLabelStyle</code>",id:"tabbarlabelstyle",level:4},{value:"<code>tabBarItemStyle</code>",id:"tabbaritemstyle",level:4},{value:"<code>tabBarContentContainerStyle</code>",id:"tabbarcontentcontainerstyle",level:4},{value:"<code>tabBarStyle</code>",id:"tabbarstyle",level:4},{value:"<code>swipeEnabled</code>",id:"swipeenabled",level:4},{value:"<code>lazy</code>",id:"lazy",level:4},{value:"<code>lazyPreloadDistance</code>",id:"lazypreloaddistance",level:4},{value:"<code>lazyPlaceholder</code>",id:"lazyplaceholder",level:4},{value:"Events",id:"events",level:3},{value:"<code>tabPress</code>",id:"tabpress",level:4},{value:"<code>tabLongPress</code>",id:"tablongpress",level:4},{value:"Helpers",id:"helpers",level:3},{value:"<code>jumpTo</code>",id:"jumpto",level:4},{value:"Example",id:"example",level:2}],h={toc:b},m="wrapper";function v(e){var t=e.components,a=(0,i.Z)(e,s);return(0,r.kt)(m,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A material-design themed tab bar on the top of the screen that lets you switch between different routes by tapping the tabs or swiping horizontally. Transitions are animated by default. Screen components for each route are mounted immediately."),(0,r.kt)("div",{style:{display:"flex",margin:"16px 0"}},(0,r.kt)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0},(0,r.kt)("source",{src:"/assets/navigators/tabs/material-top-tabs.mov"}))),(0,r.kt)("p",null,"This wraps ",(0,r.kt)("a",{parentName:"p",href:"/docs/7.x/tab-view"},(0,r.kt)("inlineCode",{parentName:"a"},"react-native-tab-view")),". If you want to use the tab view without React Navigation integration, use the library directly instead."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"To use this navigator, ensure that you have ",(0,r.kt)("a",{parentName:"p",href:"/docs/7.x/getting-started"},(0,r.kt)("inlineCode",{parentName:"a"},"@react-navigation/native")," and its dependencies (follow this guide)"),", then install ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/tree/main/packages/material-top-tabs"},(0,r.kt)("inlineCode",{parentName:"a"},"@react-navigation/material-top-tabs")),":"),(0,r.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @react-navigation/material-top-tabs react-native-tab-view\n"))),(0,r.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @react-navigation/material-top-tabs react-native-tab-view\n")))),(0,r.kt)("p",null,"Then, you need to install ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/callstack/react-native-pager-view"},(0,r.kt)("inlineCode",{parentName:"a"},"react-native-pager-view"))," which is required by the navigator."),(0,r.kt)("p",null,"If you have a Expo managed project, in your project directory, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx expo install react-native-pager-view\n")),(0,r.kt)("p",null,"If you have a bare React Native project, in your project directory, run:"),(0,r.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-pager-view\n"))),(0,r.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-pager-view\n")))),(0,r.kt)("p",null,"If you're on a Mac and developing for iOS, you also need to install the pods (via ",(0,r.kt)("a",{parentName:"p",href:"https://cocoapods.org/"},"Cocoapods"),") to complete the linking."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx pod-install ios\n")),(0,r.kt)("h2",{id:"api-definition"},"API Definition"),(0,r.kt)("p",null,"To use this tab navigator, import it from ",(0,r.kt)("inlineCode",{parentName:"p"},"@react-navigation/material-top-tabs"),":"),(0,r.kt)("samp",{id:"material-top-tab-based-navigation-minimal"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { createMaterialTopTabNavigator } from \'@react-navigation/material-top-tabs\';\n\nconst Tab = createMaterialTopTabNavigator();\n\nfunction MyTabs() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Home" component={HomeScreen} />\n      <Tab.Screen name="Settings" component={SettingsScreen} />\n    </Tab.Navigator>\n  );\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For a complete usage guide please visit ",(0,r.kt)("a",{parentName:"p",href:"/docs/7.x/tab-based-navigation"},"Tab Navigation"))),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Tab.Navigator")," component accepts following props:"),(0,r.kt)("h4",{id:"id"},(0,r.kt)("inlineCode",{parentName:"h4"},"id")),(0,r.kt)("p",null,"Optional unique ID for the navigator. This can be used with ",(0,r.kt)("a",{parentName:"p",href:"/docs/7.x/navigation-prop#getparent"},(0,r.kt)("inlineCode",{parentName:"a"},"navigation.getParent"))," to refer to this navigator in a child navigator."),(0,r.kt)("h4",{id:"initialroutename"},(0,r.kt)("inlineCode",{parentName:"h4"},"initialRouteName")),(0,r.kt)("p",null,"The name of the route to render on first load of the navigator."),(0,r.kt)("h4",{id:"screenoptions"},(0,r.kt)("inlineCode",{parentName:"h4"},"screenOptions")),(0,r.kt)("p",null,"Default options to use for the screens in the navigator."),(0,r.kt)("h4",{id:"backbehavior"},(0,r.kt)("inlineCode",{parentName:"h4"},"backBehavior")),(0,r.kt)("p",null,"This controls what happens when ",(0,r.kt)("inlineCode",{parentName:"p"},"goBack")," is called in the navigator. This includes pressing the device's back button or back gesture on Android."),(0,r.kt)("p",null,"It supports the following values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"firstRoute")," - return to the first screen defined in the navigator (default)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"initialRoute")," - return to initial screen passed in ",(0,r.kt)("inlineCode",{parentName:"li"},"initialRouteName")," prop, if not passed, defaults to the first screen"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"order")," - return to screen defined before the focused screen"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"history")," - return to last visited screen in the navigator; if the same screen is visited multiple times, the older entries are dropped from the history"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"none")," - do not handle back button")),(0,r.kt)("h4",{id:"tabbarposition"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarPosition")),(0,r.kt)("p",null,"Position of the tab bar in the tab view. Possible values are ",(0,r.kt)("inlineCode",{parentName:"p"},"'top'")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"'bottom'"),". Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"'top'"),"."),(0,r.kt)("h4",{id:"keyboarddismissmode"},(0,r.kt)("inlineCode",{parentName:"h4"},"keyboardDismissMode")),(0,r.kt)("p",null,"String indicating whether the keyboard gets dismissed in response to a drag gesture. Possible values are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'auto'")," (default): the keyboard is dismissed when the index changes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'on-drag'"),": the keyboard is dismissed when a drag begins."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'none'"),": drags do not dismiss the keyboard.")),(0,r.kt)("h4",{id:"initiallayout"},(0,r.kt)("inlineCode",{parentName:"h4"},"initialLayout")),(0,r.kt)("p",null,"Object containing the initial height and width of the screens. Passing this will improve the initial rendering performance. For most apps, this is a good default:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  width: Dimensions.get('window').width;\n}\n")),(0,r.kt)("h4",{id:"scenecontainerstyle"},(0,r.kt)("inlineCode",{parentName:"h4"},"sceneContainerStyle")),(0,r.kt)("p",null,"Style to apply to the view wrapping each screen. You can pass this to override some default styles such as overflow clipping."),(0,r.kt)("h4",{id:"style"},(0,r.kt)("inlineCode",{parentName:"h4"},"style")),(0,r.kt)("p",null,"Style to apply to the tab view container."),(0,r.kt)("h4",{id:"tabbar"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBar")),(0,r.kt)("p",null,"Function that returns a React element to display as the tab bar."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("samp",{id:"material-top-tab-custom-tab-bar"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Animated, View, TouchableOpacity } from 'react-native';\n\nfunction MyTabBar({ state, descriptors, navigation, position }) {\n  return (\n    <View style={{ flexDirection: 'row' }}>\n      {state.routes.map((route, index) => {\n        const { options } = descriptors[route.key];\n        const label =\n          options.tabBarLabel !== undefined\n            ? options.tabBarLabel\n            : options.title !== undefined\n            ? options.title\n            : route.name;\n\n        const isFocused = state.index === index;\n\n        const onPress = () => {\n          const event = navigation.emit({\n            type: 'tabPress',\n            target: route.key,\n            canPreventDefault: true,\n          });\n\n          if (!isFocused && !event.defaultPrevented) {\n            // The `merge: true` option makes sure that the params inside the tab screen are preserved\n            navigation.navigate({ name: route.name, merge: true });\n          }\n        };\n\n        const onLongPress = () => {\n          navigation.emit({\n            type: 'tabLongPress',\n            target: route.key,\n          });\n        };\n\n        const inputRange = state.routes.map((_, i) => i);\n        const opacity = position.interpolate({\n          inputRange,\n          outputRange: inputRange.map(i => (i === index ? 1 : 0)),\n        });\n\n        return (\n          <TouchableOpacity\n            accessibilityRole=\"button\"\n            accessibilityState={isFocused ? { selected: true } : {}}\n            accessibilityLabel={options.tabBarAccessibilityLabel}\n            testID={options.tabBarTestID}\n            onPress={onPress}\n            onLongPress={onLongPress}\n            style={{ flex: 1 }}\n          >\n            <Animated.Text style={{ opacity }}>\n              {label}\n            </Animated.Text>\n          </TouchableOpacity>\n        );\n      })}\n    </View>\n  );\n}\n\n// ...\n\n<Tab.Navigator tabBar={props => <MyTabBar {...props} />}>\n  {...}\n</Tab.Navigator>\n")),(0,r.kt)("p",null,"This example will render a basic tab bar with labels."),(0,r.kt)("p",null,"Note that you ",(0,r.kt)("strong",{parentName:"p"},"cannot")," use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useNavigation")," hook inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"tabBar")," since ",(0,r.kt)("inlineCode",{parentName:"p"},"useNavigation")," is only available inside screens. You get a ",(0,r.kt)("inlineCode",{parentName:"p"},"navigation")," prop for your ",(0,r.kt)("inlineCode",{parentName:"p"},"tabBar")," which you can use instead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function MyTabBar({ navigation }) {\n  return (\n    <Button\n      title=\"Go somewhere\"\n      onPress={() => {\n        // Navigate using the `navigation` prop that you received\n        navigation.navigate('SomeScreen');\n      }}\n    />\n  );\n}\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("p",null,"The following ",(0,r.kt)("a",{parentName:"p",href:"/docs/7.x/screen-options"},"options")," can be used to configure the screens in the navigator:"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("samp",{id:"material-top-tab-options"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<Tab.Navigator\n  screenOptions={{\n    tabBarLabelStyle: { fontSize: 12 },\n    tabBarItemStyle: { width: 100 },\n    tabBarStyle: { backgroundColor: 'powderblue' },\n  }}\n>\n  {/* ... */}\n</Tab.Navigator>\n")),(0,r.kt)("h4",{id:"title"},(0,r.kt)("inlineCode",{parentName:"h4"},"title")),(0,r.kt)("p",null,"Generic title that can be used as a fallback for ",(0,r.kt)("inlineCode",{parentName:"p"},"headerTitle")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tabBarLabel"),"."),(0,r.kt)("h4",{id:"tabbarlabel"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarLabel")),(0,r.kt)("p",null,"Title string of a tab displayed in the tab bar or a function that given ",(0,r.kt)("inlineCode",{parentName:"p"},"{ focused: boolean, color: string }")," returns a React.Node, to display in tab bar. When undefined, scene ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," is used. To hide, see ",(0,r.kt)("a",{parentName:"p",href:"#tabbarshowlabel"},(0,r.kt)("inlineCode",{parentName:"a"},"tabBarShowLabel"))," option."),(0,r.kt)("h4",{id:"tabbaraccessibilitylabel"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarAccessibilityLabel")),(0,r.kt)("p",null,"Accessibility label for the tab button. This is read by the screen reader when the user taps the tab. It's recommended to set this if you don't have a label for the tab."),(0,r.kt)("h4",{id:"tabbarallowfontscaling"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarAllowFontScaling")),(0,r.kt)("p",null,"Whether label font should scale to respect Text Size accessibility settings."),(0,r.kt)("h4",{id:"tabbarshowlabel"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarShowLabel")),(0,r.kt)("p",null,"Whether the tab label should be visible. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h4",{id:"tabbaricon"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarIcon")),(0,r.kt)("p",null,"Function that given ",(0,r.kt)("inlineCode",{parentName:"p"},"{ focused: boolean, color: string }")," returns a React.Node, to display in the tab bar."),(0,r.kt)("h4",{id:"tabbarshowicon"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarShowIcon")),(0,r.kt)("p",null,"Whether the tab icon should be visible. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("h4",{id:"tabbarbadge"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarBadge")),(0,r.kt)("p",null,"Function that returns a React element to use as a badge for the tab."),(0,r.kt)("h4",{id:"tabbarindicator"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarIndicator")),(0,r.kt)("p",null,"Function that returns a React element as the tab bar indicator."),(0,r.kt)("h4",{id:"tabbarindicatorstyle"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarIndicatorStyle")),(0,r.kt)("p",null,"Style object for the tab bar indicator."),(0,r.kt)("h4",{id:"tabbarindicatorcontainerstyle"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarIndicatorContainerStyle")),(0,r.kt)("p",null,"Style object for the view containing the tab bar indicator."),(0,r.kt)("h4",{id:"tabbartestid"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarTestID")),(0,r.kt)("p",null,"ID to locate this tab button in tests."),(0,r.kt)("h4",{id:"tabbaractivetintcolor"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarActiveTintColor")),(0,r.kt)("p",null,"Color for the icon and label in the active tab."),(0,r.kt)("h4",{id:"tabbarinactivetintcolor"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarInactiveTintColor")),(0,r.kt)("p",null,"Color for the icon and label in the inactive tabs."),(0,r.kt)("h4",{id:"tabbarpresscolor"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarPressColor")),(0,r.kt)("p",null,"Color for material ripple (Android >= 5.0 only)."),(0,r.kt)("h4",{id:"tabbarpressopacity"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarPressOpacity")),(0,r.kt)("p",null,"Opacity for pressed tab (iOS and Android < 5.0 only)."),(0,r.kt)("h4",{id:"tabbarbounces"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarBounces")),(0,r.kt)("p",null,"Boolean indicating whether the tab bar bounces when overscrolling."),(0,r.kt)("h4",{id:"tabbarscrollenabled"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarScrollEnabled")),(0,r.kt)("p",null,"Boolean indicating whether to make the tab bar scrollable."),(0,r.kt)("p",null,"If you set this to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", you should also specify a width in ",(0,r.kt)("inlineCode",{parentName:"p"},"tabBarItemStyle")," to improve the performance of initial render."),(0,r.kt)("h4",{id:"tabbariconstyle"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarIconStyle")),(0,r.kt)("p",null,"Style object for the tab icon container."),(0,r.kt)("h4",{id:"tabbarlabelstyle"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarLabelStyle")),(0,r.kt)("p",null,"Style object for the tab label."),(0,r.kt)("h4",{id:"tabbaritemstyle"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarItemStyle")),(0,r.kt)("p",null,"Style object for the individual tab items."),(0,r.kt)("h4",{id:"tabbarcontentcontainerstyle"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarContentContainerStyle")),(0,r.kt)("p",null,"Style object for the view containing the tab items."),(0,r.kt)("h4",{id:"tabbarstyle"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarStyle")),(0,r.kt)("p",null,"Style object for the tab bar."),(0,r.kt)("h4",{id:"swipeenabled"},(0,r.kt)("inlineCode",{parentName:"h4"},"swipeEnabled")),(0,r.kt)("p",null,"Boolean indicating whether to enable swipe gestures. Swipe gestures are enabled by default. Passing ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," will disable swipe gestures, but the user can still switch tabs by pressing the tab bar."),(0,r.kt)("h4",{id:"lazy"},(0,r.kt)("inlineCode",{parentName:"h4"},"lazy")),(0,r.kt)("p",null,"Whether this screen should be lazily rendered. When this is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the screen will be rendered as it comes into the viewport. By default all screens are rendered to provide a smoother swipe experience. But you might want to defer the rendering of screens out of the viewport until the user sees them. To enable lazy rendering for this screen, set ",(0,r.kt)("inlineCode",{parentName:"p"},"lazy")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",null,"When you enable ",(0,r.kt)("inlineCode",{parentName:"p"},"lazy"),", the lazy loaded screens will usually take some time to render when they come into the viewport. You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"lazyPlaceholder")," prop to customize what the user sees during this short period."),(0,r.kt)("h4",{id:"lazypreloaddistance"},(0,r.kt)("inlineCode",{parentName:"h4"},"lazyPreloadDistance")),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"lazy")," is enabled, you can specify how many adjacent screens should be preloaded in advance with this prop. This value defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," which means lazy pages are loaded as they come into the viewport."),(0,r.kt)("h4",{id:"lazyplaceholder"},(0,r.kt)("inlineCode",{parentName:"h4"},"lazyPlaceholder")),(0,r.kt)("p",null,"Function that returns a React element to render if this screen hasn't been rendered yet. The ",(0,r.kt)("inlineCode",{parentName:"p"},"lazy")," option also needs to be enabled for this to work."),(0,r.kt)("p",null,"This view is usually only shown for a split second. Keep it lightweight."),(0,r.kt)("p",null,"By default, this renders ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("p",null,"The navigator can ",(0,r.kt)("a",{parentName:"p",href:"/docs/7.x/navigation-events"},"emit events")," on certain actions. Supported events are:"),(0,r.kt)("h4",{id:"tabpress"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabPress")),(0,r.kt)("p",null,"This event is fired when the user presses the tab button for the current screen in the tab bar. By default a tab press does several things:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the tab is not focused, tab press will focus that tab"),(0,r.kt)("li",{parentName:"ul"},"If the tab is already focused:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If the screen for the tab renders a scroll view, you can use ",(0,r.kt)("a",{parentName:"li",href:"/docs/7.x/use-scroll-to-top"},(0,r.kt)("inlineCode",{parentName:"a"},"useScrollToTop"))," to scroll it to top"),(0,r.kt)("li",{parentName:"ul"},"If the screen for the tab renders a stack navigator, a ",(0,r.kt)("inlineCode",{parentName:"li"},"popToTop")," action is performed on the stack")))),(0,r.kt)("p",null,"To prevent the default behavior, you can call ",(0,r.kt)("inlineCode",{parentName:"p"},"event.preventDefault"),":"),(0,r.kt)("samp",{id:"material-top-tab-prevent-default"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"React.useEffect(() => {\n  const unsubscribe = navigation.addListener('tabPress', (e) => {\n    // Prevent default behavior\n    e.preventDefault();\n\n    // Do something manually\n    // ...\n  });\n\n  return unsubscribe;\n}, [navigation]);\n")),(0,r.kt)("h4",{id:"tablongpress"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabLongPress")),(0,r.kt)("p",null,"This event is fired when the user presses the tab button for the current screen in the tab bar for an extended period."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"React.useEffect(() => {\n  const unsubscribe = navigation.addListener('tabLongPress', (e) => {\n    // Do something\n  });\n\n  return unsubscribe;\n}, [navigation]);\n")),(0,r.kt)("h3",{id:"helpers"},"Helpers"),(0,r.kt)("p",null,"The tab navigator adds the following methods to the navigation prop:"),(0,r.kt)("h4",{id:"jumpto"},(0,r.kt)("inlineCode",{parentName:"h4"},"jumpTo")),(0,r.kt)("p",null,"Navigates to an existing screen in the tab navigator. The method accepts following arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," - ",(0,r.kt)("em",{parentName:"li"},"string")," - Name of the route to jump to."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"params")," - ",(0,r.kt)("em",{parentName:"li"},"object")," - Screen params to pass to the destination route.")),(0,r.kt)("samp",{id:"material-top-tab-jump-to"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"navigation.jumpTo('Profile', { name: 'Micha\u015b' });\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("samp",{id:"material-top-tab-example"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';\n\nconst Tab = createMaterialTopTabNavigator();\n\nfunction MyTabs() {\n  return (\n    <Tab.Navigator\n      initialRouteName=\"Feed\"\n      screenOptions={{\n        tabBarActiveTintColor: '#e91e63',\n        tabBarLabelStyle: { fontSize: 12 },\n        tabBarStyle: { backgroundColor: 'powderblue' },\n      }}\n    >\n      <Tab.Screen\n        name=\"Feed\"\n        component={Feed}\n        options={{ tabBarLabel: 'Home' }}\n      />\n      <Tab.Screen\n        name=\"Notifications\"\n        component={Notifications}\n        options={{ tabBarLabel: 'Updates' }}\n      />\n      <Tab.Screen\n        name=\"Profile\"\n        component={Profile}\n        options={{ tabBarLabel: 'Profile' }}\n      />\n    </Tab.Navigator>\n  );\n}\n")))}v.isMDXComponent=!0}}]);