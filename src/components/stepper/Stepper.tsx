
export default function Stepper({ steps = 3, currentStep = 1 }) {
  return (
    <div className="flex items-center justify-center gap-4 w-full">
      {Array.from({ length: steps }).map((_, i) => (
        <div key={i} className="flex items-center">
          {/* Step Circle */}
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-full border-2 ${
              i < currentStep ? "border-[#cc33ba] bg-[#cc33ba] text-white" : "border-gray-400 bg-gray-100 text-gray-600"
            } transition-all`}
          >
            {i + 1}
          </div>

          {/* Line Connector (Not for last step) */}
          {i < steps - 1 && (
            <div
              className={`h-1 w-12 ml-4 ${
                i < currentStep - 1 ? "bg-[#cc33ba]" : "bg-gray-400"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}
