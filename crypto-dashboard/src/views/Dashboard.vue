<template>
    <div class="content-box">
        <div class="menu-bar2">
          <template v-if="user.loggedIn">
            <!-- <div class="nav-item">{{user.data.displayName}}</div> -->
            <button class="login-btn" @click.prevent="signOut">
              Sign out
            </button>
            <button class="login-btn" @click='test'>
              {{user.data.email}}
            </button>
          </template>
          <template v-else>
            <button class="login-btn" v-if="currentPage === 'dashboard'" @click="$router.push({ path:'/login'})">
              LOGIN
            </button>
            <button class="account-btn" @click="$router.push({path:'/register'})">REGISTER
            </button>
          </template>
        </div>
        <div class="menu-bar">
            <v-select id="base" :options="currencyList[quote]" :clearable="false" v-model="baseCurrency" placeholder="Select Token"></v-select>
            <span class="slash">/</span>
            <v-select id="quote" :options="quoteOptions" :searchable="false" :clearable="false" v-model="quote" @input="resetBase" style="width: 80px"></v-select>
            <button class="add-coin-btn" @click="addCoinPair">Add</button>
            <button class="question-btn" @click="submitQuestion">Question?</button>
            <button class="question-btn" @click="settoDefault">Reset</button>
        </div>
        <CryptoBoard></CryptoBoard>
    </div>
</template>
<script>
  /* eslint-disable no-unused-vars */
  import vSelect from 'vue-select'
  import defaultPair from '@/assets/defaultpair.json'
  import coins from '@/assets/group.json'
  import CryptoBoard from '@/views/CryptoBoard.vue'
  import { isEmpty } from '@/other/util'
  import {subscribeSymbol, unSubscribeSymbol} from '@/services/binance'
  import { mapState } from 'vuex'
  import Swal from 'sweetalert2'
  import { firebase } from '@firebase/app'
  import '@firebase/auth'
  export default {
    name: 'dashboard',
    data() {
      return {
        currentPage: 'dashboard',
        currencyList: coins,
        quote: 'BTC',
        quoteOptions: ['BTC','ETH', 'USDT'],
        baseCurrency: {}
      }
    },
    mounted(){
      if(this.currencies) {
        this.currencies.forEach(currency => {
          subscribeSymbol(currency.symbol);
        });
      }
    },
    computed: {
      ...mapState(['currencies']),
      ...mapState({
        user:"user"
      })
    },
    components: {
      vSelect,
      CryptoBoard,
      Swal
    },
    methods: {
      resetBase() {
        this.baseCurrency = {}
      },
      test(){
        //console.log(this.user)
      },
      addCoinPair() {
        if(!isEmpty(this.baseCurrency)){
          const symbol = `${this.baseCurrency.value}${this.quote}`;
          subscribeSymbol(symbol);
          this.$store.commit('ADD_COIN_PAIR',{"symbol": symbol ,"base": this.baseCurrency.value, "quote": this.quote, "name": this.baseCurrency.name})
          Swal.fire({
            title: 'Confirmed!',
            icon: 'success',
            confirmButtonText: 'OK'
          })
        }else {
          Swal.fire({
            title: 'Please select token first',
            icon: 'error',
            confirmButtonText: 'OK'
          })
        }
      },
      signOut() {
        firebase
          .auth()
          .signOut()
          .then(() => {
            this.$router.go({ path:'/'});
          });
      },
      submitQuestion() {
          const value = Swal.fire({
            title: 'Cannot find the desired token?',
            icon: 'question',
            input: 'text',
            inputLabel: 'Enter the token here e.g. BTC, we will update in 24hrs',
            inputValue: '',
            showCancelButton: true,
            inputPlaceholder: 'Enter the token here'
          })
      },
      settoDefault() {
        const SymbolArray = defaultPair.map (item => item.symbol);
        // ["BTCUSDT", "ETHUSDT", "EOSUSDT", "XRPUSDT"]
        for(var key in this.currencies){
            const value = this.currencies[key].symbol
            if(!(SymbolArray.includes(value))){
              unSubscribeSymbol(value);
              this.$store.commit('REMOVE_COIN_PAIR', value);
            }
        }
      }
    }
  }
</script>
