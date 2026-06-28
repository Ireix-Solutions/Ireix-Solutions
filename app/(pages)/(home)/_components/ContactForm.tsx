"use client";

import { useActionState, useState } from "react";

import { submitProposalAction } from "@/app/actions/proposal";
import {
  homePageContent,
  proposalProjectTypes,
} from "@/app/(pages)/(home)/_components/home-content";
import { initialProposalState } from "@/lib/schemas/proposal";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitProposalAction,
    initialProposalState,
  );
  const { contact } = homePageContent;
  const formKey = `${state.status}-${JSON.stringify(state.values)}`;
  const formStatusClass =
    state.status === "success"
      ? "text-[var(--irex-success)]"
      : state.status === "invalid" || state.status === "error"
        ? "text-[var(--irex-danger)]"
        : "text-[var(--irex-muted)]";

  return (
    <div className="rounded-[28px] border border-[var(--irex-border)] bg-white p-7 shadow-[0_12px_34px_-24px_rgba(6,16,20,0.12)]">
      <h3 className="text-[15px] font-bold text-[var(--irex-ink)]">
        {contact.formTitle}
      </h3>

      <form
        key={formKey}
        action={formAction}
        className="mt-3.5 space-y-3.5"
        noValidate
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <Field
            label="Nome"
            name="name"
            placeholder="Seu nome"
            defaultValue={state.values.name}
            error={state.fieldErrors?.name?.[0]}
          />
          <Field
            label="E-mail"
            name="email"
            type="email"
            placeholder="voce@email.com"
            defaultValue={state.values.email}
            error={state.fieldErrors?.email?.[0]}
          />
        </div>

        <PhoneField
          placeholder="(00) 00000-0000"
          defaultValue={state.values.phone}
          error={state.fieldErrors?.phone?.[0]}
        />

        <div className="space-y-1.5">
          <label htmlFor="projectType" className="irex-form-label">
            Tipo de projeto
          </label>
          <select
            id="projectType"
            name="projectType"
            defaultValue={state.values.projectType}
            className={`irex-input ${state.fieldErrors?.projectType ? "irex-input--error" : ""}`}
            aria-invalid={Boolean(state.fieldErrors?.projectType)}
            aria-describedby={
              state.fieldErrors?.projectType ? "projectType-error" : undefined
            }
          >
            <option value="">Selecione</option>
            {proposalProjectTypes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {state.fieldErrors?.projectType?.[0] ? (
            <p id="projectType-error" className="irex-field-error">
              {state.fieldErrors.projectType[0]}
            </p>
          ) : null}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="message" className="irex-form-label">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Conte um pouco sobre seu projeto..."
            defaultValue={state.values.message}
            rows={5}
            className={`irex-input min-h-[120px] resize-y py-3 ${state.fieldErrors?.message ? "irex-input--error" : ""}`}
            aria-invalid={Boolean(state.fieldErrors?.message)}
            aria-describedby={
              state.fieldErrors?.message ? "message-error" : undefined
            }
          />
          {state.fieldErrors?.message?.[0] ? (
            <p id="message-error" className="irex-field-error">
              {state.fieldErrors.message[0]}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] leading-[1.45] text-[#64747C]">
            {contact.formNote}
          </p>
          <button
            type="submit"
            className="irex-button irex-button--primary justify-center disabled:cursor-not-allowed disabled:opacity-70"
            disabled={isPending}
          >
            {isPending ? "Enviando..." : "Enviar mensagem"}
          </button>
        </div>

        <p aria-live="polite" className={`text-sm ${formStatusClass}`}>
          {state.message}
        </p>
      </form>
    </div>
  );
}

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function PhoneField({
  defaultValue,
  error,
  placeholder,
}: {
  defaultValue: string;
  error?: string;
  placeholder?: string;
}) {
  const [value, setValue] = useState(() => formatPhone(defaultValue));
  const errorId = "phone-error";

  return (
    <div className="space-y-1.5">
      <label htmlFor="phone" className="irex-form-label">
        Telefone / WhatsApp
      </label>
      <input
        id="phone"
        name="phone"
        type="tel"
        inputMode="numeric"
        autoComplete="tel"
        placeholder={placeholder}
        value={value}
        onChange={(event) => setValue(formatPhone(event.target.value))}
        className={`irex-input ${error ? "irex-input--error" : ""}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
      />
      {error ? (
        <p id={errorId} className="irex-field-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}

type FieldProps = {
  defaultValue: string;
  error?: string;
  label: string;
  name: "name" | "email" | "phone";
  placeholder?: string;
  type?: "email" | "text";
};

function Field({
  defaultValue,
  error,
  label,
  name,
  placeholder,
  type = "text",
}: FieldProps) {
  const errorId = `${name}-error`;

  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="irex-form-label">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className={`irex-input ${error ? "irex-input--error" : ""}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
      />
      {error ? (
        <p id={errorId} className="irex-field-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
