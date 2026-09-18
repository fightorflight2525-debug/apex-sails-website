// SAUCE-313: the @modal slot renders nothing unless /welcome is intercepted
// (see app/@modal/(.)welcome). Required fallback for a parallel-route slot.
export default function ModalDefault() {
  return null;
}
