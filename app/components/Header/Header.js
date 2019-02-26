import React from 'react';
import {ScrollView, StyleSheet, Text, View,Image , ImageBackground ,Button, TouchableOpacity} from 'react-native';
import { CheckBox } from 'react-native';
import { Ionicons, Entypo,Feather, FontAwesome,SimpleLineIcons , MaterialCommunityIcons,MaterialIcons} from '@expo/vector-icons';


import Modal from "react-native-modal";
import {Collapse, CollapseHeader, CollapseBody, } from 'accordion-collapse-react-native';
import { Accordion, Separator,List,ListItem, Body} from 'native-base';
export default class Header extends React.Component {  
  state = {
  isCategoryFilter: false,
  checked: false,
  };
  

  _catgoryModal = () => {
    this.setState({ isCategoryFilter: !this.state.isCategoryFilter });
  }
  
  render() {
    return (      
      <View style={styles.topheader}>
        <View style={styles.col}>                   
          <TouchableOpacity  onPress={() => this.props.navigation.openDrawer()}
           >
            <FontAwesome name="navicon" size={26} style={styles.menuicon}  />
          </TouchableOpacity>
            <TouchableOpacity style={styles.tph_two}>                  
              <Image source={require('../../assets/images/logo.png')} style={styles.imgcompr}
                 />
              <Text style={[styles.logotxt, styles.mrglft3, ]}>Swoopos</Text>
            </TouchableOpacity>        
        </View>               
        <View style={[styles.col, styles.colright]}>
          <View style={styles.button}> 
            <TouchableOpacity style={styles.iconbtn}>
              <Ionicons name="ios-notifications" size={30} style={styles.iconbtn} />
            </TouchableOpacity> 
          </View> 
          <View style={styles.button}> 
            <TouchableOpacity style={styles.iconbtn}>
              <Entypo name="shopping-cart" size={30}  style={styles.iconbtn} />
            </TouchableOpacity> 
          </View> 
          <View style={styles.button}> 
            <TouchableOpacity style={styles.iconbtn} onPress={() => this._catgoryModal()}>
              <MaterialCommunityIcons name="filter-variant" size={30} style={styles.iconbtn} />
            </TouchableOpacity> 
          </View>
        </View>

        <Modal isVisible={this.state.isCategoryFilter}>
        <View style={{flexDirection:'row'}}>
            <View style={styles.modalbtnpanel}>
              <TouchableOpacity style={styles.shopbtnbottom} onPress={this._catgoryModal} >
                <MaterialIcons name="cancel" color= '#fff' size= {30}></MaterialIcons>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.filterModal}>
            <View style={styles.filterModalHeader}>
              <View style={styles.filterSection}>
                <View style={styles.filterSectionRow}>
                  <Text><Image style={{width: 20, height: 20,}} source={require('../../assets/images/icons/equilizer-bars.png')} /> </Text>
                  <Text style={{marginLeft:5, justifyContent:'center', marginTop:3,}}>Filter</Text>
                </View>
              </View>
              <View style={styles.clearSection}>
                <View style={styles.clearSectionRow}>
                  <Text>
                    <MaterialIcons name="cancel" style={styles.cancelBtn}></MaterialIcons>
                  </Text>
                  <Text style={{marginLeft:5,}}>Clear All</Text>
                </View>
              </View>
            </View>
              <View>
                <View style={styles.orderTypeRow}>
                  <Collapse style={{flex:1,}} >
                    <CollapseHeader style={styles.accodianHeader}>
                      <View style={styles.orderTypeColunm_1}>
                        <View style={styles.clearSectionRow}>
                          <View>
                            <ImageBackground source={require('../../assets/images/icons/shopping-bag.png')}  style={{width: 16, height: 20}}>    
                            </ImageBackground>
                          </View>
                          <View>
                            <Text style={styles.categoryFont}>Order Type</Text>
                          </View>
                        </View>
                      </View>
                      <View style={styles.orderTypeColunm_2}>
                        <View style={styles.clearSectionRow}>
                          <Text>
                            <MaterialIcons name="keyboard-arrow-down" style={styles.dropDownBtn}></MaterialIcons>
                          </Text>
                        </View>
                      </View>
                    </CollapseHeader>
                    <CollapseBody style={styles.accordianBodyRow}>
                      <ListItem style={styles.checkboxBorderRemove}>
                        <View style={styles.checkboxSection}>
                          <View>
                            <CheckBox  checked={this.state.checked}
                              onPress={() =>
                            this.setState({ checked: !this.state.checked })} color="green"/>
                          </View>
                          <View>
                            <Text style={styles.checkboxtext}>Click & Collect</Text>
                          </View>
                        </View>
                      </ListItem>
                    </CollapseBody>
                  </Collapse>
                </View>
                <View style={styles.orderTypeRow}>
                  <View style={styles.orderTypeColunm_1}>
                    <View style={styles.clearSectionRow}>
                      {/* 
                      <Text>
                        <SimpleLineIcons name="handbag" style={[styles.cancelBtn, style={color:'#fff'}]}></SimpleLineIcons>
                      </Text>
                      */}
                      <View>
                        <ImageBackground source={require('../../assets/images/icons/catgory_icon.png')}  style={{width: 20, height: 20}}>    
                        </ImageBackground>
                      </View>
                      <View>
                        <Text style={styles.categoryFont}>Categories</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.orderTypeColunm_2}>
                    <View style={styles.clearSectionRow}>
                      <Text>
                        <MaterialIcons name="keyboard-arrow-down" style={styles.dropDownBtn}></MaterialIcons>
                      </Text>
                    </View>
                  </View>
                  <View>
                    {/* 
                    <Accordion
                      list={this.state.list}
                      header={this._head}
                      body={this._body}
                      />
                    */}
                    {/* 
                    <Accordion dataArray={dataArray} icon="add" expandedIcon="remove" />
                    */}
                  </View>
                </View>
                <View style={styles.orderTypeRow}>
                  <View style={styles.orderTypeColunm_1}>
                    <View style={styles.clearSectionRow}>
                      {/* 
                      <Text>
                        <SimpleLineIcons name="handbag" style={[styles.cancelBtn, style={color:'#fff'}]}></SimpleLineIcons>
                      </Text>
                      */}
                      <View>
                        <ImageBackground source={require('../../assets/images/icons/price_icon.png')}  style={{width:30, height: 20}}>    
                        </ImageBackground>
                      </View>
                      <View>
                        <Text style={styles.categoryFont}>Price</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.orderTypeColunm_2}>
                    <View style={styles.clearSectionRow}>
                      <Text>
                        <MaterialIcons name="keyboard-arrow-down" style={styles.dropDownBtn}></MaterialIcons>
                      </Text>
                    </View>
                  </View>
                  <View>
                    {/* 
                    <Accordion
                      list={this.state.list}
                      header={this._head}
                      body={this._body}
                      />
                    */}
                    {/* 
                    <Accordion dataArray={dataArray} icon="add" expandedIcon="remove" />
                    */}
                  </View>
                </View>
                <View style={styles.orderTypeRow}>
                  <View style={styles.orderTypeColunm_1}>
                    <View style={styles.clearSectionRow}>
                      {/* 
                      <Text>
                        <SimpleLineIcons name="handbag" style={[styles.cancelBtn, style={color:'#fff'}]}></SimpleLineIcons>
                      </Text>
                      */}
                      <View>
                        <ImageBackground source={require('../../assets/images/icons/delivery-package-opened.png')}  style={{width:30, height: 20}}>    
                        </ImageBackground>
                      </View>
                      <View>
                        <Text style={styles.categoryFont}>Delivery Options</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.orderTypeColunm_2}>
                    <View style={styles.clearSectionRow}>
                      <Text>
                        <MaterialIcons name="keyboard-arrow-down" style={styles.dropDownBtn}></MaterialIcons>
                      </Text>
                    </View>
                  </View>
                  <View>
                    {/* 
                    <Accordion
                      list={this.state.list}
                      header={this._head}
                      body={this._body}
                      />
                    */}
                    {/* 
                    <Accordion dataArray={dataArray} icon="add" expandedIcon="remove" />
                    */}
                  </View>
                </View>
                <View style={styles.orderTypeRow}>
                  <View style={styles.orderTypeColunm_1}>
                    <View style={styles.clearSectionRow}>
                      {/* 
                      <Text>
                        <SimpleLineIcons name="handbag" style={[styles.cancelBtn, style={color:'#fff'}]}></SimpleLineIcons>
                      </Text>
                      */}
                      <View>
                        <ImageBackground source={require('../../assets/images/icons/brand_icon.png')}  style={{width:25, height: 20}}>    
                        </ImageBackground>
                      </View>
                      <View>
                        <Text style={styles.categoryFont}>Brand</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.orderTypeColunm_2}>
                    <View style={styles.clearSectionRow}>
                      <Text>
                        <MaterialIcons name="keyboard-arrow-down" style={styles.dropDownBtn}></MaterialIcons>
                      </Text>
                    </View>
                  </View>
                  <View>
                    {/* 
                    <Accordion
                      list={this.state.list}
                      header={this._head}
                      body={this._body}
                      />
                    */}
                    {/* 
                    <Accordion dataArray={dataArray} icon="add" expandedIcon="remove" />
                    */}
                  </View>
                </View>
                <View style={styles.orderTypeRow}>
                  <View style={styles.orderTypeColunm_1}>
                    <View style={styles.clearSectionRow}>
                      {/* 
                      <Text>
                        <SimpleLineIcons name="handbag" style={[styles.cancelBtn, style={color:'#fff'}]}></SimpleLineIcons>
                      </Text>
                      */}
                      <View>
                        <ImageBackground source={require('../../assets/images/icons/discount_category.png')}  style={{width:25, height: 25}}>    
                        </ImageBackground>
                      </View>
                      <View>
                        <Text style={styles.categoryFont}>Discount</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.orderTypeColunm_2}>
                    <View style={styles.clearSectionRow}>
                      <Text>
                        <MaterialIcons name="keyboard-arrow-down" style={styles.dropDownBtn}></MaterialIcons>
                      </Text>
                    </View>
                  </View>
                  <View>
                    {/* 
                    <Accordion
                      list={this.state.list}
                      header={this._head}
                      body={this._body}
                      />
                    */}
                    {/* 
                    <Accordion dataArray={dataArray} icon="add" expandedIcon="remove" />
                    */}
                  </View>
                </View>
                <View style={styles.orderTypeRow}>
                  <View style={styles.orderTypeColunm_1}>
                    <View style={styles.clearSectionRow}>
                      {/* 
                      <Text>
                        <SimpleLineIcons name="handbag" style={[styles.cancelBtn, style={color:'#fff'}]}></SimpleLineIcons>
                      </Text>
                      */}
                      <View>
                        <ImageBackground source={require('../../assets/images/icons/distance.png')}  style={{width:25, height: 25}}>    
                        </ImageBackground>
                      </View>
                      <View>
                        <Text style={styles.categoryFont}>Distance</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.orderTypeColunm_2}>
                    <View style={styles.clearSectionRow}>
                      <Text>
                        <MaterialIcons name="keyboard-arrow-down" style={styles.dropDownBtn}></MaterialIcons>
                      </Text>
                    </View>
                  </View>
                  <View>
                    {/* 
                    <Accordion
                      list={this.state.list}
                      header={this._head}
                      body={this._body}
                      />
                    */}
                    {/* 
                    <Accordion dataArray={dataArray} icon="add" expandedIcon="remove" />
                    */}
                  </View>
                </View>
                <View style={styles.orderTypeRow}>
                  <View style={styles.orderTypeColunm_1}>
                    <View style={styles.clearSectionRow}>
                      {/* 
                      <Text>
                        <SimpleLineIcons name="handbag" style={[styles.cancelBtn, style={color:'#fff'}]}></SimpleLineIcons>
                      </Text>
                      */}
                      <View>
                        <ImageBackground source={require('../../assets/images/icons/rating_star.png')}  style={{width:20, height: 20}}>    
                        </ImageBackground>
                      </View>
                      <View>
                        <Text style={styles.categoryFont}>Ratings</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.orderTypeColunm_2}>
                    <View style={styles.clearSectionRow}>
                      <Text>
                        <MaterialIcons name="keyboard-arrow-down" style={styles.dropDownBtn}></MaterialIcons>
                      </Text>
                    </View>
                  </View>
                  <View>
                    {/* 
                    <Accordion
                      list={this.state.list}
                      header={this._head}
                      body={this._body}
                      />
                    */}
                    {/* 
                    <Accordion dataArray={dataArray} icon="add" expandedIcon="remove" />
                    */}
                  </View>
                </View>
              </View>

          </View>
          
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topheader:{flexDirection: 'row', height:75, paddingTop:15, paddingLeft:10, paddingRight: 10, justifyContent: 'space-between', backgroundColor: '#5bb8ce',  alignItems: 'center',   },
  col: {flexDirection: 'row'},
  button: {marginLeft: 10},
  iconbtn: {color: '#fff'},
  menuicon: {color: '#fff', marginRight: 10, marginTop: 3},
  tph_one:{width:'10%',backgroundColor: 'transparent',},
  tph_two:{width:'50%',flexDirection: 'row',},
  colright: {flexDirection: 'row',},  
  logotxt:{color:'white',fontWeight:'normal',fontSize:20, marginLeft: 5},
  imgcompr:{width:30, height:30,},

  filterModal:{backgroundColor:"#fff",borderRadius:5, justifyContent:'center', alignItems:'center', position:'relative',},
  filterModalHeader:{flexDirection:'row', padding:15,},
  filterSection:{flex:3, },
  clearSection:{flex:1,},
  clearSectionRow:{flexDirection:'row',},
  filterSectionRow:{flexDirection:'row',},
  cancelBtn:{fontSize: 25, color:'#da466b',},
  orderTypeRow:{flexDirection:'row', width:'100%', paddingTop:10, paddingBottom:10, borderTopColor:'#f1f1f1',  borderTopWidth: 1, paddingLeft:5,
  paddingRight:5,},
  orderTypeColunm_1:{flex:4, padding:5, },
  orderTypeColunm_2:{flex:1, justifyContent:'center', alignItems:'center',},
  activeFilterAccodian:{backgroundColor:'#54a6bc', color:'#fff', padding:5,},
  dropDownBtn:{color:'#606060', fontSize:25,},
  categoryCustomBtn:{color:'#54a6bc',},
  categoryFont:{marginLeft:5, },
  accodianHeader:{flexDirection:'row'},
  accordianBodyRow:{},
  checkboxSection:{flexDirection:'row'},
  modalbtnpanel:{borderRadius:50, backgroundColor:'#da466b', justifyContent:'center', alignItems:'center',
  width:45, height: 45, position:'absolute', right:-10, top: -35, zIndex: 9,},
  shopbtnbottom:{borderRadius:50, backgroundColor:'#da466b', padding:8, margin:0, justifyContent:'center', alignItems:'center',},
  checkboxtext:{fontWeight:'bold', marginLeft:3, marginTop:4,},
  checkboxBorderRemove:{borderWidth:0,},
});