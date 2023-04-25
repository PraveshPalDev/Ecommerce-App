import {StyleSheet} from 'react-native';
import colors from '../../../Resourse/Color';
import scaling from '../../../Resourse/normalize';

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    marginTop: scaling.heightScale(10),
  },
  view1: {
    width: '40%',
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  view2: {
    width: '50%',
  },
  text: {
    color: colors.black,
  },
  view3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: scaling.heightScale(6),
  },
  image: {
    width: scaling.normalize(25),
    height: scaling.normalize(18),
  },
  text1: {
    fontSize: scaling.normalize(20),
    fontWeight: '600',
    color: colors.black,
  },
  view4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: scaling.heightScale(15),
  },
  targeterr: {
    fontSize: scaling.normalize(10),
    color: colors.red,
  },
});

export default styles;
