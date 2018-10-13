import {StackNavigator,TabNavigator} from 'react-navigation';
import login from '../../screens/login';
import home from '../../screens/home';
import signup from '../../screens/signup';
import personals from '../../screens/personals';
import Screen1 from '../../screens/Screen1';
import Screen2 from '../../screens/Screen2';
import Screen3 from '../../screens/Screen3';


const mytab=TabNavigator({
                          Screen1:{screen:Screen1},
                          Screen2:{screen:Screen2},
                          Screen3:{screen:Screen3}
                        },
                        {
                            animationEnabled:true,
                            tabBarPosition:'top',
                            swipeEnabled:true,
                            tabBarOptions:{
                                showIcon: true,
                                showLabel: true,
                            activeTintColor:'white',
                            activeBackgroundColor:'darkgreen',
                            inactiveTintColor:'black',
                            inactiveBackgroundColor:'green',
                            padding:0
                                      }
                    }
                        );



export default AppNavigator =StackNavigator({
    login:{screen:login},
    home:{screen:home},
    signup:{screen:signup},
    personals:{screen:personals},
    mytab:{screen:mytab}
}) 