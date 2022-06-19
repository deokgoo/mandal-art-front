import * as React from 'react'

const PlanContext = React.createContext(null);

function useEffectAfterMount(cb: any, dependencies: any[]) {
  const justMounted = React.useRef(true)
  React.useEffect(() => {
    if (!justMounted.current) {
      return cb()
    }
    justMounted.current = false
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cb, ...dependencies])
}

function PlanNode(props: any) {
  const [on, setOn] = React.useState(false)
  // const toggle = React.useCallback(() => setOn(oldOn => !oldOn), [])
  useEffectAfterMount(() => {
    props.onToggle(on)
  }, [on])
  // const value = React.useMemo(() => ({on, toggle}), [on])
  return (
    <PlanContext.Provider value={null}>
      {props.children}
    </PlanContext.Provider>
  )
}

function usePlanNodeContext() {
  const context = React.useContext(PlanContext)
  if (!context) {
    throw new Error(
      `Toggle compound components cannot be rendered outside the Toggle component`,
    )
  }
  return context
}

function Middle({no, children}: {no: number, children: React.ReactElement}) {
  const {on} = usePlanNodeContext()
  return <></>
}

function Small({no}: {no: number}) {
  const {on} = usePlanNodeContext()
  return <></>
}

// function Button(props) {
//   const {on, toggle} = useToggleContext()
//   return <Switch on={on} onClick={toggle} {...props} />
// }

// for convenience, but totally not required...
PlanNode.middle = Middle
PlanNode.small = Small

export default PlanNode;
