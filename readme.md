# react-native-default-props

Simple function to override the default props of any react-native component. 

Set the default props of any component once and they will be set everywhere in your project. No need to export or import custom components, just bind them to the original ones.

### Motivation

We have encountered a lot of situations where we were using specific props at different locations throughout a single react-native project. For example, we wanted the `activeOpacity` prop of the `TouchableOpacity` component to be the same everywhere in the project. 

This can be done by creating a custom component around the `TouchableOpacity` and by using this wrapper-component everywhere instead of the original `TouchableOpacity` component. However, this is extra overhead that we should avoid for such a small adjustment. This library aims to solve this issue by overriding the default props of various components in order to reduce boilerplate code and make it easier to define a global theme of your project. 

The inspiration for this library comes from [react-native-global-props](https://github.com/Ajackster/react-native-global-props). The reason we have created our own library is that we do not want to be limited to the components that the library supports and we prefer a more generic approach. This library only contains ~5% of the code but supports even more components due to the generic structure.

### Basics
```
$ yarn add react-native-default-props
```

```js
import { TouchableOpacity } from 'react-native';
import customize from 'react-native-default-props';

customize(TouchableOpacity, {
  activeOpacity: 0.8,
});
```

### License 

This library is published under the MIT license. The full license can be found in the `license.md` file.
