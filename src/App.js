import logo from './logo.svg';
import './App.css';
import { Databinding } from './Data_Binding/Databinding';
import ComponentToViewDataBinding from './Data_Binding/ComponentToViewDataBinding';
import { TwoWatDataBinding } from './Data_Binding/TwoWatDataBinding';
import { GlobalScope } from './Scopes/GlobalScope';
import { LocalScope } from './Scopes/LocalScope';
import { BlockScope } from './Scopes/BlockScope';
import { NestedScope } from './Scopes/NestedScope';
import { LexicalScope } from './Scopes/LexicalScope';
import { ScopeChain } from './Scopes/ScopeChain';
import { LetAndConst } from './ES6Features/LetAndConst';
import { ArrowFunction } from './ES6Features/ArrowFunction';
import { Literals } from './ES6Features/Literals';
import DefaultParameters from './ES6Features/DefaultParameters';
import { ArrayDestructuring } from './ES6Features/ArrayDestructuring';
import { ObjectDestructuring } from './ES6Features/ObjectDestructuring';
import { RestOperator } from './ES6Features/RestOperator';
import { PRomises } from './ES6Features/PRomises';
import { Classes } from './ES6Features/Classes';
import { UndeclaredVariable } from './Error_Handling/UndeclaredVariable';
import { TryCatchFinally } from './Error_Handling/TryCatchFinally';
import { ForOfLoop } from './Loops/ForOfLoop';
import { ForInLoop } from './Loops/ForInLoop';
import { WhileLoop } from './Loops/WhileLoop';
import { DoWhileLoop } from './Loops/DoWhileLoop';
import { DatatypesDemo } from './Datatypes/DatatypesDemo';
import { VarDemo } from './Var_Let_Const/VarDemo';
import { LetDemo } from './Var_Let_Const/LetDemo';
import { ConstDemo } from './Var_Let_Const/ConstDemo';
import { NamedFunction } from './TypesOfFunctions/NamedFunction';
import { IIFEFunction } from './TypesOfFunctions/IIFEFunction';
import { PureFunction } from './TypesOfFunctions/PureFunction';
import { ImpureFunction } from './TypesOfFunctions/ImpureFunction';
import { CallbackFunction } from './TypesOfFunctions/CallbackFunction';
import { HigherOrderFunction } from './TypesOfFunctions/HigherOrderFunction';
import { FirstClassFunction } from './TypesOfFunctions/FirstClassFunction';
import { FunctionExpression } from './TypesOfFunctions/FunctionExpression';
import { RecursionFunction } from './TypesOfFunctions/RecursionFunction';
import { GeneratorFunction } from './TypesOfFunctions/GeneratorFunction';
import { AnonymousFunction } from './TypesOfFunctions/AnonymousFunction';
import { AsyncAwaitDemo } from './AsyncAwait/AsyncAwaitDemo';
import { FindSecondLargest } from './LogicalPrograms/FindSecondLargest';
import { SwapWithoutThirdVar } from './LogicalPrograms/SwapWithoutThirdVar';
import { ReverseInteger } from './LogicalPrograms/ReverseInteger';
import { Anagram } from './LogicalPrograms/Anagram';
import { FindReverseString } from './LogicalPrograms/FindReverseString';
import { MissingNumber } from './LogicalPrograms/MissingNumber';
import { PalindromeString } from './LogicalPrograms/PalindromeString';
import { EvenNumbers } from './LogicalPrograms/EvenNumbers';
import { FibonacciSeriesWithRecursion } from './LogicalPrograms/FibonacciSeriesWithRecursion';
import { Clouser } from './Clouser/Clouser';
import { EventLoop } from './Event Loop/EventLoop';
import { TypeSelector } from './CSS-Selectors/TypeSelector';
import { ClassSelector } from './CSS-Selectors/ClassSelector';
import { IDSelector } from './CSS-Selectors/IDSelector';
import { UniversalSelector } from './CSS-Selectors/UniversalSelector';
import { ArithmaticOperator } from './Operators/ArithmaticOperator';
import { AssignmentOperator } from './Operators/AssignmentOperator';
import { ComparisonOperator } from './Operators/ComparisonOperator';
import { LogicalOperator } from './Operators/LogicalOperator';
import { Promises } from './Promises/Promises';
import { AsyncAwait } from './AsyncAwait/AsyncAwait';
import { AsyncAwait1 } from './AsyncAwait/AsyncAwait1';
import { ShiftZeroLast } from './LogicalPrograms/ShiftZeroLast';
import { OddEvenArrangement } from './LogicalPrograms/OddEvenArrangement';
import { FindFirstNonRepeatingCharacter } from './LogicalPrograms/FindFirstNonRepeatingCharacter';
import { FindMissingNumber } from './LogicalPrograms/FindMissingNumber';
import { DeepCopy } from './LogicalPrograms/DeepCopy';

function App() {
  return (
    <div className="App">
      {/* <Databinding></Databinding> */}
      {/* <ComponentToViewDataBinding></ComponentToViewDataBinding> */}
      {/* <TwoWatDataBinding></TwoWatDataBinding> */}
      {/* <GlobalScope></GlobalScope> */}
      {/* <LocalScope></LocalScope> */}
      {/* <BlockScope></BlockScope> */}
      {/* <NestedScope></NestedScope> */}
      {/* <LexicalScope></LexicalScope> */}
      {/* <ScopeChain></ScopeChain> */}
      {/* <LetAndConst></LetAndConst> */}
      {/* <ArrowFunction></ArrowFunction> */}
      {/* <Literals></Literals> */}
      {/* <DefaultParameters></DefaultParameters> */}
      {/* <ArrayDestructuring></ArrayDestructuring>
      <ObjectDestructuring></ObjectDestructuring> */}
      {/* <RestOperator></RestOperator> */}
        {/* <PRomises></PRomises> */}
        {/* <Classes></Classes> */}
        {/* <UndeclaredVariable></UndeclaredVariable> */}
        {/* <TryCatchFinally></TryCatchFinally> */}
        {/* <ForOfLoop></ForOfLoop> */}
        {/* <ForInLoop></ForInLoop> */}
        {/* <WhileLoop></WhileLoop> */}
        {/* <DoWhileLoop></DoWhileLoop> */}
        {/* <DatatypesDemo></DatatypesDemo> */}
        {/* <VarDemo></VarDemo> */}
        {/* <LetDemo></LetDemo> */}
        {/* <ConstDemo></ConstDemo> */}
        {/* <NamedFunction></NamedFunction> */}
        {/* <ArrowFunction></ArrowFunction> */}
        {/* <IIFEFunction></IIFEFunction> */}
        {/* <PureFunction></PureFunction> */}
        {/* <ImpureFunction></ImpureFunction> */}
        {/* <CallbackFunction></CallbackFunction> */}
        {/* <HigherOrderFunction></HigherOrderFunction> */}
        {/* <FirstClassFunction></FirstClassFunction> */}
        {/* <FunctionExpression></FunctionExpression> */}
        {/* <RecursionFunction></RecursionFunction> */}
        {/* <GeneratorFunction></GeneratorFunction>
        <AnonymousFunction></AnonymousFunction> */}
        {/* <AsyncAwaitDemo></AsyncAwaitDemo> */}
        {/* <FindSecondLargest></FindSecondLargest> */}
        {/* <SwapWithoutThirdVar></SwapWithoutThirdVar> */}
        {/* <ReverseInteger></ReverseInteger> */}
        {/* <Anagram></Anagram> */}
        {/* <FindReverseString></FindReverseString> */}
        {/* <MissingNumber></MissingNumber> */}
        {/* <PalindromeString></PalindromeString> */}
        {/* <EvenNumbers></EvenNumbers> */}
        {/* <FibonacciSeriesWithRecursion></FibonacciSeriesWithRecursion> */}
        {/* <Clouser></Clouser> */}
        {/* <EventLoop></EventLoop> */}
        {/* <TypeSelector></TypeSelector> */}
        {/* <ClassSelector></ClassSelector> */}
        {/* <IDSelector></IDSelector> */}
        {/* <UniversalSelector></UniversalSelector> */}
        {/* <ArithmaticOperator></ArithmaticOperator> */}
        {/* <AssignmentOperator></AssignmentOperator> */}
        {/* <ComparisonOperator></ComparisonOperator> */}
        {/* <LogicalOperator> </LogicalOperator> */}
        {/* <Promises></Promises> */}
        {/* <AsyncAwait></AsyncAwait> */}
        {/* <AsyncAwait1></AsyncAwait1> */}
        {/* <ShiftZeroLast></ShiftZeroLast> */}
        {/* <OddEvenArrangement></OddEvenArrangement> */}
        {/* <FindFirstNonRepeatingCharacter></FindFirstNonRepeatingCharacter> */}
        {/* <FindMissingNumber></FindMissingNumber> */}
        <DeepCopy></DeepCopy>
    </div>
  );
}

export default App;
